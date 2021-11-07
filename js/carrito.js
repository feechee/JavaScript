function impresorDeCompras(params) {
  if (localStorage.length > 0) {
     productosEnStorage = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < productosEnStorage.length; i++) {

      $("#itemsCarro").append(`
      <div class="divCont__icono flexIcono">     
        <p> ID: ${productosEnStorage[i].id}</p><p> Producto: ${productosEnStorage[i].clase}- ${productosEnStorage[i].nombre}</p><p>Precio: $${productosEnStorage[i].precio}</p>
      </div>`);
      let contenedor = document.getElementById("itemsCarro");
    }
  }
}
function vaciarCarrito() {
  vaciar = document.getElementById("btnVaciar").addEventListener("click", () => localStorage.clear())
}

impresorDeCompras()
vaciarCarrito()
  



