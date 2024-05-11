function calcularTiempo (años, meses, semanas, dias, horas, minutos, segundos ){
let meses = (parseInt(años) * 12)
let semanas = (parseInt(meses) * 4)
let dias = (parseInt(semanas) * 7)
let horas = (parseInt(dias) * 24)
let minutos = (parseInt(horas * 60))
let segundos = (parseInt(minutos) * 60)

for (let i = 0; i <= calcularTiempo.length; i++){
    console.log("años" + i + tiempoAños)
}
console.log("su edad en distintos tiempos de medición es:", calcularTiempo)
}

function simularEdad(){
    let años = prompt ("ingrese cuántos años tiene:")

    if (años !== ""){
        calcularTiempo(años, meses, semanas, dias, horas, minutos, segundos)
    } else {
        console.warn("por favor digite su edad")
    }
}

simularEdad()
//Por alguna razón no me funciona, porfa ayuda :(

  