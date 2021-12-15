fetch('../js/tarjetas.json')
.then((respuesta)=>{
    respuesta.json()
    .then((datos)=>{
        localStorage.setItem("tarjetas", JSON.stringify(datos));
    })
})