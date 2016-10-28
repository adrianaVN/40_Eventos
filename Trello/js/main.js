var box = document.createElement('input');
var contenedor = document.createElement('div');

function crear(obj){
	espacio = document.getElementById('espacio');
	contenedor.id ='div'
	espacio.appendChild(contenedor);

	
	box.setAttribute('type', 'text');
	box.setAttribute('placeholder', 'ingrese nombre de la lista');
	box.setAttribute('class', 'espace')
	contenedor.appendChild(box);
	 
	var boton = document.createElement('button');
	boton.className='btn btn-success marl';
	boton.innerHTML ='Guardar';
	contenedor.appendChild(boton);
	boton.setAttribute('onclick','guardar()');




}

function guardar(){
 	
 	contenedor2 = document.createElement('div');
 	contenedor2.setAttribute('class', 'div1');
 	contenedor.appendChild(contenedor2);

 	
 	
	var texto = document.createElement('p');
 	texto.id ="texto";
 	contenedor2.appendChild(texto);
 	var tituloList = document.createElement('h2');
 	texto.appendChild(tituloList);
 	tituloList.innerHTML = box.value;

 	var boton2 = document.createElement('button');
 	boton2.className='btn btn-success marl';
 	boton2.setAttribute('id', 'boton');
 	boton2.innerHTML='crear tarjeta';
 	boton2.setAttribute('onclick','tarjetas()');
 	contenedor2.appendChild(boton2);



}


function tarjetas(){
	var contenedor3 = document.createElement('div');
	contenedor2.appendChild(contenedor3);
	

	var texto2 = document.createElement('input');
	texto2.id ="texto2";
	contenedor3.appendChild(texto2);
	contenedor3.setAttribute('draggable','true');
	contenedor3.setAttribute('onmousedown', 'drag(ev)');
	function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

	var boton3 = document.createElement('button');
	boton3.className='btn btn-success';
 	boton3.setAttribute('id', 'boton3');
 	boton3.innerHTML='guardar targeta';
 	boton3.setAttribute('onclick','guardarTarjeta()');
 	contenedor3.appendChild(boton3);

 	


}
function guardarTarjeta(){

	/*var texto3 = document.createElement('a');
	texto3.id ="texto3";
	texto3.appendChild(texto2);	*/
 }

