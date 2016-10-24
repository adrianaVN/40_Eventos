contador=0
function crear(obj){
	contador++;
	espacio = document.getElementById('espacio');
	contenedor = document.createElement('div');
	contenedor.id ='div'+contador;
	espacio.appendChild(contenedor);

	var box = document.createElement('input');
	box.innerHTML ='<input type="text" name="box" /*/ placeholder="ingresa el titulo de tu lista">';
	contenedor.appendChild(box);

	boton = document.createElement('button');
	boton.innerHTML='<input type="button" class="btn btn-succes" value="Guardar" onclick="guardar()">';
	 
	 function guardar(){
	 	texto = getElementByTagName(boton);
	 }
}
