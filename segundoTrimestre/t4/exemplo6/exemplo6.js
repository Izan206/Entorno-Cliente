// Ejemplo 1 Clásico

// function crearContador() {
//     let conta=0
//     return function() {
//         conta++
//         console.log("Valor actual: "+conta)
//     }
// }

// const contador1=crearContador()

// contador1()
// contador1()

// const contador2=crearContador()
// contador2()

// Ejemplo 2

function crearSaudo(mensaxe) {
    return function(nome) {
        console.log(mensaxe + ", "+ nome+ "!")
    }
}

const saudoGalego=crearSaudo("Boas")
saudoGalego("Izan")

const saudoInformal=crearSaudo("Que tal")
saudoInformal("Izan")