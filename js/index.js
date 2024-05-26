/*let anios = ("")
let mesesTotales = (parseInt(anios) * 12)
let semanasTotales = (parseInt(mesesTotales) * 4)
let diasTotales = (parseInt(anios) * 365)

function calcularTiempo (mesesTotales, semanasTotales, diasTotales){
    
    console.log("¿Cuántos años tiene?", anios)
    for (let i=0; i <= calcularTiempo.length; i++) {
        console.log(calcularTiempo[i])
    }
    console.log("Su edad es:", calcularTiempo)
}

function simularTiempo(){
    let anios = prompt("ingrese cuántos años tiene:")

    if (anios !== ""){
        calcularTiempo(mesesTotales, semanasTotales, diasTotales)
    } else{
        console.warning("🚨Ingrese su edad")
    }
}*/

const carrito = []
const tiempoDeVida = [{imagen: "🔢", codigo: 1, nombre: "4 días + de vida", precio: 2000},
{imagen: "☁️", codigo: 2, nombre: "12 días + de vida", precio: 6000},
{imagen: "⛅", codigo: 3, nombre: "20 días + de vida", precio: 10000},
{imagen: "📅", codigo: 4, nombre: "2 meses + de vida", precio: 20000},
{imagen: "📆", codigo: 5, nombre: "4 meses + de vida", precio: 35000},
{imagen: "🗓️", codigo: 6, nombre: "9 meses+ de vida", precio: 65000},
{imagen: "✨", codigo: 7, nombre: "2 años + de vida", precio: 115000},
{imagen: "🎍", codigo: 8, nombre: "3 años + de vida", precio: 200000},
{imagen: "🐉", codigo: 9, nombre: "5 años + de vida", precio: 280000}]

function buscarTiempo(codigo){
    let tiempoSeleccionado = tiempoDeVida.find ((tiempo)=> tiempo.codigo === codigo)
    return tiempoSeleccionado
}

function comprar(){
    let codigo = prompt("Ingresa el código del tiempo que quieres comprar:")
    let tiempoSeleccionado = buscarTiempo(parseInt(codigo))

    if (tiempoSeleccionado === undefined){
        console.warn("🚨 Usted no puede tener este tiempo de vida")
    } else{
        carrito.push(tiempoSeleccionado)
        alert(tiempoSeleccionado.nombre + " se agregaron a su existir")
        let respuesta = confirm("¿Desea más tiempo en esta tierra?")
        if (respuesta === true) {
            comprar()
        } else{
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerTotal()
            console.log("el total de su compra es de $ ", subtotal)
        }
    }
}
comprar()
  