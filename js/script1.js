// funciones en la que se inicializa los datos de los productos "atributos"
function Producto(_id, _descripcion, _imagen, _precio) {
	this._idProd = _id;
	this._descripcionProd = _descripcion;
	this._imagenProd = _imagen;
	this._precioProd = _precio;
}

// hacemos uso del map en la que contendra una clave  un valor
// valor:  los datos , espeficiaciones de los productos
// de acuerdo a cuantos prodcutos necesite
let listap = new Map();
	listap.set(1, new Producto(1, "Logo, Identidad-Corporativa", "images/1-1.jpg", 15000));
	listap.set(2, new Producto(2, "Sistemas Informaticos", "images/2-1.jpg", 16000));
	listap.set(3, new Producto(3, "Flyer Publicitario", "images/3-1.jpg", 16000));
	listap.set(4, new Producto(4, "Flyer Publicitario", "images/4-1.jpg", 12000));
	listap.set(5, new Producto(5, "Flyer Publicitario", "images/5-1.jpg", 15000));
	listap.set(6, new Producto(6, "Flyer Publicitario", "images/6-1.jpg", 90000));
	listap.set(7, new Producto(7, "Sitemas de Facturacion", "images/7-1.jpg", 17000));
	listap.set(8, new Producto(8, "Manipulacion de Imagenes", "images/8-1.jpg", 9000));
	listap.set(8, new Producto(8, "Paginas Web", "images/9-1.jpg", 9000));
	listap.set(8, new Producto(8, "Tarjetas Personalizadas", "images/10-1.jpg", 9000));
	listap.set(8, new Producto(8, "Remeras Personalizadas", "images/11-1.jpg", 9000));
	listap.set(8, new Producto(8, "Triptico y catalogos", "images/12-1.jpg", 9000));
	listap.set(8, new Producto(8, "Tiendas Online", "images/13-1.jpg", 9000));
	listap.set(8, new Producto(8, "Manipulacion de Imagenes", "images/14-1.jpg", 9000));

//Iteramos sobre cada clave y valor de nuestro mapa
//y hacemos uns instancia de cada valor de nuestro producto siempre y cuando este sea igual  a neustros atributos
listap.forEach((valor, key, _copiamapa) => {
let template_js = `  <div class="container-image col-12 col-md-4 col-xl-3">
            			<img class="img" src="${valor._imagenProd}" height="300px" alt="...">
            			<div class="middle">
                             <button type="button" style="background:none" class="btn btn-primary" id="${valor._idProd}" onclick="agregar(${key})" ><img class="icons" src="images/carrito.png"></button>
                                    <p>${valor._descripcionProd}</p>
                                    <li>${valor._precioProd}</li>
                        </div>
                    </div>`;
//el tempalte de js una vez terminado asigna al nuestro id de nuestro DOM de html 
$("#galeria_Productos").append(template_js);
});