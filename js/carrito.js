$(document).ready(function () {

  /* ARRAY DE OBJETOS */
  const productosCarrito = [];

  /* CLASE CONTRUCTORA */
  class Compra {
    constructor(nombre, clase, cantidad, precio, foto) {
      this.nombre = nombre;
      this.clase = clase;
      this.cantidad = cantidad;
      this.precio = precio;
      this.foto = foto;
    }
    //Agrega los items al carrito
    agregarAlCarrito(i) {
      $("#itemsCarro").append(`
      <div class="divCont__icono flexIcono">
      <p>${this.clase.toUpperCase()} - ${this.nombre.toUpperCase()}</p><input class="cantidadCarrito" id="cantidad${[i]}" type="number" value="${[this.cantidad]}" min="1"><p>$${this.precio * this.cantidad}</p>
      </div>`);
    }
  }

  /* FUNCIONES */
  //Trae los productos seleccionados desde el LocalStorage
  function llamarLocalStorage() {
    if (localStorage.length > 0) {
      productosEnStorage = JSON.parse(localStorage.getItem("productos"));
      for (let i = 0; i < productosEnStorage.length; i++) {
        productosCarrito.push(
          new Compra(
            productosEnStorage[i].nombre,
            productosEnStorage[i].clase,
            productosEnStorage[i].cantidad,
            productosEnStorage[i].precio,
            productosEnStorage[i].precio.foto
          )
        );
      }
    }
  }
  //Elimina los productos seleccionados del carrito (Limpia el localStorage)
  function vaciarCarrito() {
    $("#btnVaciar").click(function (e) {
      e.preventDefault();
      localStorage.clear();
      $("#itemsCarro").fadeOut(1000);
      location.reload();
    });
  }


//Imprime los items en el carrito
  function imprimir() {
    for (let i = 0; i < productosCarrito.length; i++) {
      productosCarrito[i].agregarAlCarrito(i);
    }
  }
//modifica las cantidades
  function modificarCantidades() {
    productosEnStorage = JSON.parse(localStorage.getItem("productos"));
    const botonesCantidad = $(".cantidadCarrito");
    for (let i = 0; i < botonesCantidad.length; i++) {
      $(`#cantidad${[i]}`).bind("keyup mouseup", function () {
        productosEnStorage[i].cantidad = botonesCantidad[i].value;
        localStorage.removeItem(
          "productos",
          JSON.stringify(productosEnStorage)
        );
        localStorage.setItem("productos", JSON.stringify(productosEnStorage));
        location.reload();
      });
    }
  }
//calcula el total a pagar
  function calcularTotal() {
    let total = 0;
    for (let i = 0; i < productosCarrito.length; i++) {
      subtotal = productosCarrito[i].precio * productosCarrito[i].cantidad;
      total = total + subtotal;
    }
    $("#total").prepend(`$ ${total}`);
  }
//dispara el mensaje desde el boton Comprar
  function comprar() {
    error = `<div class="alert alert-danger alert-dismissible fade show d-flex justify-content-center fixed-top" role="alert">
    El carrito esta vacio, debe seleccionar algun producto de la seccion "Productos".
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    mensaje = `<div class="alert alert-success alert-dismissible fade show d-flex justify-content-center fixed-top" role="alert">
    Gracias por su compra!! Nos contactaremos a la brevedad
    <button type="button" class="btn-close" id="alertaCarrito" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    $("#btnComprar").click(function (e) {
      e.preventDefault();
      if (productosCarrito.length == 0) {
        $("#mensaje").append(error);
      } else {
        $("#mensaje").append(mensaje);
        $("#alertaCarrito").click(function (e) { 
          e.preventDefault();
          localStorage.clear();
           $("#itemsCarro").fadeOut(1000);
            location.reload();
        });
      }
    });
  }



  /* EJECUCION */

  llamarLocalStorage();
  vaciarCarrito();
  imprimir();
  modificarCantidades();
  calcularTotal();
  comprar();
});
