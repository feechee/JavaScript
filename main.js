/* Variables */
let producto = 0;
let precio = 0;
let cantidadProducto = 0;

/* Array de productos */
const productos = [
    {id:1, nombre:"TUTU", precio:2000},
    {id:2, nombre:"PIJAMA", precio:3000},
    {id:3, nombre:"BOX", precio:1500},
    {id:4, nombre:"TAZA", precio:700},
];
/* Objeto de Compra */
class Compra{
    constructor(producto, precio, cantidadProducto){
        this.producto = producto;
        this.precio = precio;
        this.cantidadProducto = cantidadProducto;
        this.subTotal=0;
        this.envio=0;
        this.conf=0;
        this.total=0;
        
    }

    calcularSubtotal(){
        this.subTotal = this.precio * this.cantidadProducto;
    }
    calcularIva(){
        return this.subTotal * 0.21;
    }
    calcularEnvio(){
    this.conf = (confirm("Desea que se lo enviemos a su casa?.Tiene un costo de $700"))
    if (this.conf==true) {
        this.envio = 700;
        alert("Su pedido sera despachado a la brevedad")
    } else {
        alert("Puede retirar su pedido por nuestro local de Lunes a Viernes, de 09hs a 18hs")
    }
    }
    calcularTotal(){
        this.total = this.subTotal + this.calcularIva() + this.envio;
    }
}


/* Funcion: Agrega productos al carro */
function agregarAlCarro(){
    while (!producto || producto==0) {
        producto = prompt("BIENVENIDO!\nEscoja algun item del listado para agregar a su compra:\n TUTU\n PIJAMA\n BOX\n TAZA\n").toUpperCase()
        switch (producto) {
            case "TUTU":
                break;
            case "PIJAMA":
                break;
            case "BOX":
                break;
            case "TAZA":
                break;
            default:
                alert("Dato incorrecto")
                producto=0;
        }
    }
    const item = productos.find(valor => valor.nombre === producto)
    console.log(item.precio);
    precio = item.precio;

    while (!cantidadProducto || cantidadProducto==0) {
        cantidadProducto = parseInt(prompt("Ingrese la cantidad:"));
    }
    return new Compra (producto, precio, cantidadProducto);
}

 /* Ejecucion */
const compra = agregarAlCarro();
compra.calcularSubtotal();
compra.calcularIva();
compra.calcularEnvio();
compra.calcularTotal();

alert("Gracias por su compra de: "+ producto +"\nSu total a pagar es de: $"+compra.total)