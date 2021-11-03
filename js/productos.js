/* Array */

const productos = [];
const productosCarrito = [];

/* Objetos */
class Producto {
  constructor(id, clase, nombre, precio, foto) {
    (this.id = id), (this.clase = clase);
    this.nombre = nombre;
    this.precio = precio;
    this.foto = foto;
  }
}

productos.push(
  new Producto(0, "tutu", "princesa", 2000, "url(../img/tutus/tutunena.png)"),
  new Producto(1, "tutu", "pepa", 2000, "url(../img/tutus/tutuPepa.png)"),
  new Producto(2, "tutu", "unicornio", 2000, "url(../img/tutus/tutuUnic.png)"),
  new Producto(3, "tutu", "bulldog", 2000, "url(../img/tutus/tutuPerro.png)"),
  new Producto(4, "pijama", "harry", 2500, "url(../img/Pijamas/pijama1.png)"),
  new Producto(5,"pijama","animalitos",2500,"url(../img/Pijamas/pijama3.png)"),
  new Producto(6, "pijama", "roblox", 2500, "url(../img/Pijamas/pijama4.png)"),
  new Producto(7, "pijama", "among", 2500, "url(../img/Pijamas/pijama2.png)"),
  new Producto(8, "box", "arcoiris", 1000, "url(../img/box/box1.png)"),
  new Producto(9, "box", "tateti", 1000, "url(../img/box/box2.jpg)"),
  new Producto(10, "box", "nube", 1000, "url(../img/box/box3.jpg)"),
  new Producto(11, "box", "creativo", 1000, "url(../img/box/box4.png)"),
  new Producto(12, "taza", "dino", 500, "url(../img/tazas/tazaDino.png)"),
  new Producto(13, "taza", "unicornio", 500, "url(../img/tazas/tazaUnic.png)")
);

/* Funciones */

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

function agregarProducto(e) {
  const boton = e.target;
  productosCarrito.push(productos[boton.id]);
  if (productosCarrito !== 0) {
    localStorage.setItem("productos", JSON.stringify(productosCarrito));
  }
  let contenedor = document.getElementById("alert");
  let divItem = document.createElement("div");
  divItem.innerHTML = `<div class="alert alert-success d-flex justify-content-between" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
      <div>
        Se agrego el producto: ${productos[boton.id].clase} - ${
    productos[boton.id].nombre
  } al carrito de compra.
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  contenedor.appendChild(divItem);
}

function selectorDeCompras(params) {
  const listBtnComprar = document.getElementsByClassName("btnComprar");

  for (const btn of listBtnComprar) {
    btn.addEventListener("click", agregarProducto);
  }
}

function acumuladorDeCompras() {
  if (localStorage !== 0) {
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
