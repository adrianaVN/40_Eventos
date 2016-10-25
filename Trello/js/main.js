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

 	var input2 =document.createElement('textarea');
 	contenedor2.appendChild(input2);

 	var boton2 = document.createElement('button');
 	boton2.className='btn btn-success marl';
 	boton2.setAttribute('id', 'boton');
 	boton2.innerHTML='crear targeta';
 	boton2.setAttribute('onclick','targetas()');
 	contenedor2.appendChild(boton2);
 	


}


function targetas(){
	var contenedor3 = document.createElement('textarea');
	contenedor2.appendChild(contenedor3);

	var texto2 = document.createElement('p');
	texto.id ="texto2";
	contenedor2.appendChild(texto2);

}


