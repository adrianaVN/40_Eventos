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
 
    // Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    // Le establecemos un atributo href
    enlace.setAttribute("type", "checkbox");
    // Agrergamos el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(enlace);
    // Agregamos la nueva tarea a la lista
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