$(document).ready(function () {
  /* Array */
  //Obtiene las tarjetas desde el local
  const productos = JSON.parse(localStorage.getItem("tarjetas"));
  const productosCarrito = [];

  /* Objetos */
  class Producto {
    constructor(id, clase, nombre, precio, cantidad, foto) {
      this.id = id;
      this.clase = clase;
      this.nombre = nombre;
      this.precio = precio;
      this.foto = foto;
      this.cantidad = cantidad;
    }
  }

  /* Funciones */
//Imprime las tarjetas en el HTML
  function creadorDeTarjetas() {
    let sumaTarjetasTutu = "";
    let sumaTarjetasPijama = "";
    let sumaTarjetasBox = "";
    let sumaTarjetasTaza = "";

    for (let i = 0; i < productos.length; i++) {
      nombre = productos[i].nombre;
      precio = productos[i].precio;
      foto = productos[i].foto;
      clase = productos[i].clase;
      let tarjeta = `<a class="gridContainer__item" data-bs-toggle="offcanvas" href="#producto${i}" role="button" aria-controls="tarjeta${i}"    style="background-image: ${foto}">
  <p>
  ${clase} - ${nombre}
  </p>
  </a>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="producto${i}" aria-labelledby="tarjeta${i}">
  <div class="offcanvas-header">
  <h5 class="offcanvas-title" id="tarjeta${i}">
  Tutu ${nombre}
  </h5>
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
  aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div class="tarjetaOffcanvas">
  <div class="tarjetaOffcanvas__img" style="background-image: ${foto}">
  </div>
  <p class="tarjetaOffcanvas__texto">
    El set de TUTU incluse accesorio, remera y tutu. Talles: XS, S, M, L. Se pueden comprar por separado.
    Precio: $${precio}
  </p>
  </div>
  <!-- Boton de compra -->
  <div class="dropdown mt-3">
    <a class="btn btnComprar" data-bs-dismiss="offcanvas"
    aria-label="Close" id="${[i]}">
      Comprar
    </a>
  </div>
  </div>
  </div>`;

      switch (this.clase) {
        case "tutu":
          sumaTarjetasTutu = sumaTarjetasTutu + tarjeta;

          break;
        case "pijama":
          sumaTarjetasPijama = sumaTarjetasPijama + tarjeta;
          break;
        case "box":
          sumaTarjetasBox = sumaTarjetasBox + tarjeta;
          break;
        case "taza":
          sumaTarjetasTaza = sumaTarjetasTaza + tarjeta;
          break;
        default:
          break;
      }
    }
    let contenedorTutu = document.getElementById("contenedorTutus");
    contenedorTutu.innerHTML = sumaTarjetasTutu;

    let contenedorPijama = document.getElementById("contenedorPijama");
    contenedorPijama.innerHTML = sumaTarjetasPijama;

    let contenedorBox = document.getElementById("contenedorBox");
    contenedorBox.innerHTML = sumaTarjetasBox;

    let contenedorTaza = document.getElementById("contenedorTaza");
    contenedorTaza.innerHTML = sumaTarjetasTaza;
  }

  //envia al Local el producto seleccionado
  function agregarProducto(e) {
    const boton = e.target;
    productosCarrito.push(productos[boton.id]);
    if (productosCarrito !== 0) {
      localStorage.setItem("productos", JSON.stringify(productosCarrito));
    }
    $(
      "#alert"
    ).append(`<div class="alert alert-success d-flex justify-content-between fixed-top" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    Se agrego el producto: ${
      productos[boton.id].clase
    } - ${productos[boton.id].nombre} al carrito de compra.
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`);
  }
//escucha el click del boton comprar
  function selectorDeCompras() {
    const listBtnComprar = document.getElementsByClassName("btnComprar");

    for (const btn of listBtnComprar) {
      btn.addEventListener("click", agregarProducto);
    }
  }
//acumula los productos seleccionados en el local
  function acumuladorDeCompras() {
    if (localStorage.length !== 0) {
      const productosEnStorage = JSON.parse(localStorage.getItem("productos"));
      for (let i = 0; i < productosEnStorage.length; i++) {
        productosCarrito.push(productosEnStorage[i]);
      }
    }
  }

  /* Ejecucion */

  creadorDeTarjetas();
  selectorDeCompras();
  acumuladorDeCompras();
});
