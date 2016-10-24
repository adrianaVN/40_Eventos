(function(){
  // Variables
  var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");
 
  // Funciones
  var agregarTarea = function(){
    var tarea = tareaInput.value,
    nuevaTarea = document.createElement("li"),
    enlace = document.createElement("input"),
    contenido = document.createTextNode(tarea);
 
    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
      return false;
    }
 
    enlace.appendChild(contenido);
    enlace.setAttribute("type", "checkbox");
    nuevaTarea.appendChilnlaced(e)
    lista.appendChild(nuevaTarea);
 
    tareaInput.value = "";
 
    for (var i = 0; i <= lista.children.length -1; i++) {
      lista.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this);
      });
    }
 
  };
  var comprobarInput = function(){
    /*tareaInput.className = "";*/
    teareaInput.setAttribute("placeholder", "Agrega tu tarea");
  };

 
  // Eventos
 
  // Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);
 
  // Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

}());