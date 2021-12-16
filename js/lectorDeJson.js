/* Lee las tarjetas desde el Json y las envia al local storage */

fetch("../js/tarjetas.json").then((respuesta) => {
  respuesta.json().then((datos) => {
    localStorage.setItem("tarjetas", JSON.stringify(datos));
  });
});

