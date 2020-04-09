//funcion Carrito(){}: creamos una lista vacia
//agregarItem = contiene una funcion que tiene como parametro producto_lista
// en donde hacemos un push para que el producto se guarde en la lsita luego hacemos un alert para
// indicar que el producto a sidoa gregado a la lista
function Carrito() {
	this.producto_lista = [];
	this.agregarItem = function(_producto_lista) {
		this.producto_lista.push(_producto_lista);
		alert(this.producto_lista);
	}
}
function buscarProductoPorKey(key) {
	var detalleProducto = listap.get(key);

	return detalleProducto;
}


var agregados= '' 

function agregar(key) {

	productoEncontrado = buscarProductoPorKey(key);
// creamos la variable detalle en la que asigna otra variable productoencontrado donde tiene una funcion
// que buscar el producto de acuerdo a su clave que tiene como parametro key
	var detalle = 
		"<strong><li>Producto: </li></strong>" + productoEncontrado._descripcionProd 
		+ " " + "<img style='height: 50px' src=" + productoEncontrado._imagenProd + ">"
		+ "<strong><li>Precio: </li></strong>" + productoEncontrado._precioProd + "</br>";
	agregados += detalle;
	//hace llamado al id de nuestro modal, donde mostrara todos los productos agregados
	document.querySelector("#datos_carrito").innerHTML = agregados;


	document.getElementById(productoEncontrado.idProd).disabled = true;
}