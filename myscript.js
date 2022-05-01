(function(){

	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");
		

	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);


		enlace.appendChild(contenido);

		enlace.setAttribute("href", "#");

		nuevaTarea.appendChild(enlace);

		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		var a=0;
		a=a+1;
		document.getElementById("total").innerHTML=a;

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	btnNuevaTarea.addEventListener("click", agregarTarea);

	tareaInput.addEventListener("click", comprobarInput);

	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());

function guardar(){
    let apodo=document.getElementById("apodo").value;



    sessionStorage.setItem("claveApodo",apodo);


    document.getElementById("apodo").value="";

}

function mostrar(){
    let getApodo=sessionStorage.getItem("claveApodo")
  

    document.getElementById("pApodo").innerHTML=getApodo;


  
}

function total(){
	var total=document.getElementById("total").innerHTML=lista;
}