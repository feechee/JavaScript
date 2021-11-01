/* Array */

const productos = [
    {id:1, clase:"tutu", nombre:"princesa", precio:2000, foto:"url(../img/tutus/tutunena.png)" },
    {id:2, clase:"tutu", nombre:"pepa", precio:2000, foto:"url(../img/tutus/tutuPepa.png)" },
    {id:3, clase:"tutu", nombre:"unicornio", precio:2000, foto:"url(../img/tutus/tutuUnic.png)" },
    {id:4, clase:"tutu", nombre:"bulldog", precio:2000, foto:"url(../img/tutus/tutuPerro.png)" },
    {id:5, clase:"pijama", nombre:"harry", precio:2500, foto:"url(../img/pijamas/pijama1.png)" },
    {id:6, clase:"pijama", nombre:"animalitos", precio:2500, foto:"url(../img/pijamas/pijama3.png)" },
    {id:7, clase:"pijama", nombre:"roblox", precio:2500, foto:"url(../img/pijamas/pijama4.png)" },
    {id:8, clase:"pijama", nombre:"among", precio:2500, foto:"url(../img/pijamas/pijama2.png)" },
    {id:9, clase:"box", nombre:"arcoiris", precio:1000, foto:"url(../img/box/box1.png)" },
    {id:10, clase:"box", nombre:"tateti", precio:1000, foto:"url(../img/box/box2.jpg)" },
    {id:11, clase:"box", nombre:"nube", precio:1000, foto:"url(../img/box/box3.jpg)" },
    {id:12, clase:"box", nombre:"creativo", precio:1000, foto:"url(../img/box/box4.png)" },
    {id:13, clase:"taza", nombre:"dino", precio:500, foto:"url(../img/tazas/tazaDino.png)" },
    {id:14, clase:"taza", nombre:"unicornio", precio:500, foto:"url(../img/tazas/tazaUnic.png)"},
];

/* Funciones */

function creadorDeTarjetas() {
  
  let nombre=0;
  let precio=0;
  let foto=0;
  let sumaTarjetasTutu="";
  let sumaTarjetasPijama="";
  let sumaTarjetasBox="";
  let sumaTarjetasTaza="";
  
  for (let i = 0; i < productos.length; i++) {
      nombre = productos[i].nombre
      precio = productos[i].precio
      foto = productos[i].foto
      clase = productos[i].clase
      let tarjeta =`<a class="gridContainer__item" data-bs-toggle="offcanvas" href="#producto${i}" role="button" aria-controls="tarjeta${i}"    style="background-image: ${foto}">
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
    <a class="btn btnComprar" id=${[i]}">
      Comprar
    </a>
  </div>
  </div>
  </div>`;
  
  switch (productos[i].clase) {
    case "tutu":
      sumaTarjetasTutu = sumaTarjetasTutu + tarjeta;
  
      break;
      case "pijama":
        sumaTarjetasPijama = sumaTarjetasPijama + tarjeta;
        break
        case "box":
        sumaTarjetasBox = sumaTarjetasBox + tarjeta;
        break
        case "taza":
        sumaTarjetasTaza = sumaTarjetasTaza + tarjeta;
        break
    default:
      break;
  };
  };
  
  
  
  let contenedorTutu = document.getElementById("contenedorTutus");
  contenedorTutu.innerHTML =  sumaTarjetasTutu;
 
  let contenedorPijama = document.getElementById("contenedorPijama");
  contenedorPijama.innerHTML =  sumaTarjetasPijama;
 
  let contenedorBox = document.getElementById("contenedorBox");
  contenedorBox.innerHTML =  sumaTarjetasBox;
  
  let contenedorTaza = document.getElementById("contenedorTaza");
  contenedorTaza.innerHTML =  sumaTarjetasTaza;
  

}


let listBtnComprar = document.getElementsByClassName("btnComprar");

for(const objeto of listBtnComprar){
  objeto.addEventListener('click', agregarProducto)
}

function agregarProducto(e) {
 productos[e.target.id]
}



/* Ejecucion */

creadorDeTarjetas()

