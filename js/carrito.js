
const listBtnComprar = document.getElementsByClassName('btnComprar')

  for (const btn of listBtnComprar) {
    btn.addEventListener('click', agregarProducto)
  }
  

  function agregarProducto(e){
    const boton = e.target
    const producto = productos[boton.id].nombre
    const precio = productos[boton.id].precio
    console.log(producto);
    console.log(boton.id);
    console.log(precio);
      let contenedor = document.getElementById("itemsCarro");
      let divItem = document.createElement("div");    
      divItem.classList. add("divCont__icono");
      divItem.classList. add("flexIcono");
      divItem.innerHTML =`<p> ID: ${productos[boton.id].id}</p><p> Producto: ${productos[boton.id].clase}- ${productos[boton.id].nombre}</p><p>Precio: $${productos[boton.id].precio}</p>`;
      contenedor.appendChild(divItem);
      alert("Se agrego un elemento al Carrito")
  }