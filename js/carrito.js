function impresorDeCompras(params) {
  if (localStorage.length > 0) {
    const productosEnStorage = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < productosEnStorage.length; i++) {
  
      let contenedor = document.getElementById("itemsCarro");
    let divItem = document.createElement("div");    
    divItem.classList. add("divCont__icono");
    divItem.classList. add("flexIcono");
    divItem.innerHTML =`<p> ID: ${productosEnStorage[i].id}</p><p> Producto: ${productosEnStorage[i].clase}- ${productosEnStorage[i].nombre}</p><p>Precio: $${productosEnStorage[i].precio}</p>`;
    contenedor.appendChild(divItem); 
    }
  }
}
function vaciarCarrito() {
  return document.getElementById("btnVaciar").addEventListener("click", localStorage.clear())
}


impresorDeCompras()
vaciarCarrito()


  



