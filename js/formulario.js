 $(document).ready(function () {
    const formulario = document.getElementById('formu');
    const inputs = document.querySelectorAll('#formu input');

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const campos= {
        nombre:false,
        apellido:false,
        email:false
    }


    const validarFormulario = (e) =>{
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case "apellido":
                validarCampo(expresiones.apellido, e.target, 'apellido');
                break;
            
            case "email":
                validarCampo(expresiones.email, e.target, 'email');

                break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`${campo}`).classList.remove("formulario__input-incorrecto")
            document.getElementById(`${campo}`).classList.add("formulario__input-correcto")
            campos[campo] = true
        }else{
            document.getElementById(`${campo}`).classList.add("formulario__input-incorrecto")
            document.getElementById(`${campo}`).classList.remove("formulario__input-correcto")
            campos[campo] = false
        }
    }
    

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) =>{
        e.preventDefault()

        if (campos.nombre && campos.apellido && campos.email) {
            $(
                "#alert"
              ).append(`<div class="alert alert-success d-flex justify-content-between fixed-top" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                El mensaje se envio correctamente
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`);
        }else{
            $(
                "#alert"
              ).append(`<div class="alert alert-danger d-flex justify-content-between fixed-top" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Complete correctamente los campos en marcados en rojo
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`);
        }
    })



 });





