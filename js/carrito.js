$(document).ready(function () {
  const productosCarrito = []

/* FUNCIONES */
function llamarLocalStorage() {
  if (localStorage.length > 0) {
     productosEnStorage = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < productosEnStorage.length; i++) {
      productosCarrito.push(new Compra(productosEnStorage[i].nombre, productosEnStorage[i].clase,productosEnStorage[i].cantidad, productosEnStorage[i].precio,productosEnStorage[i].precio.foto ))
    }
  }
}
function vaciarCarrito() {
  $("#btnVaciar").click(function (e) { 
    e.preventDefault();
    localStorage.clear()
    $("#itemsCarro").fadeOut(1000);
    location.reload()
  });
}

  



class Compra {
  constructor(nombre,clase , cantidad, precio, foto) {
  this.nombre = nombre
  this.clase = clase
  this.cantidad = cantidad
  this.precio = precio
  this.foto = foto
  }
  agregarAlCarrito(i){
   $("#itemsCarro").append(`
      <div class="divCont__icono flexIcono">
      <p>${this.clase.toUpperCase()} - ${this.nombre.toUpperCase()}</p><input class="cantidadCarrito" id="cantidad${[i]}" type="number" value="${[this.cantidad]}" min="1"><p>$${this.precio*this.cantidad}</p>
      </div>`
      );
      
  }
}

function imprimir () {
for (let i = 0; i < productosCarrito.length; i++) {
  productosCarrito[i].agregarAlCarrito(i)
  
}

}


function modificarCantidades() {
  productosEnStorage = JSON.parse(localStorage.getItem('productos'))
  const botonesCantidad = $('.cantidadCarrito')
  for (let i = 0; i < botonesCantidad.length; i++) {
   $(`#cantidad${[i]}`).bind('keyup mouseup', function () {
    productosEnStorage[i].cantidad = botonesCantidad[i].value
    localStorage.removeItem("productos", JSON.stringify(productosEnStorage));
    localStorage.setItem("productos", JSON.stringify(productosEnStorage));
    location.reload()
    });
  }
}

function calcularTotal() {
  let total = 0
for (let i = 0; i < productosCarrito.length; i++) {
 subtotal = productosCarrito[i].precio * productosCarrito[i].cantidad;
 total = total + subtotal
}
$("#total").prepend(`$ ${total}`);
}

function comprar () {
  error = "Debe agregar un producto al carrito desde la seccion Productos."
  mensaje = "Gracias por su compra!!, nos contactaremos a la brevedad"
  $("#btnComprar").click(function (e) { 
    e.preventDefault();
    if (productosCarrito.length == 0) {
      $("#mensaje").append(error);
    }else{
      $("#mensaje").append(mensaje);
    }
  });
 }
console.log(productosCarrito.length);
/* EJECUCION */

llamarLocalStorage()
vaciarCarrito()
imprimir ()
modificarCantidades()
calcularTotal()
comprar ()


});




