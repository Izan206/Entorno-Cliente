let dataActual=new Date();
console.log("Data actual: ", dataActual);

let meses= [
    "Xaneiro",
    "Febreiro",
    "Marzo",
    "Abril",
    "Maio",
    "Xuño",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Decembro"
]

let diaSemana=[
    "Domingo",
    "Luns",
    "Martes",
    "Mercores",
    "Xoves",
    "Venres",
    "Sabado"
]

console.log("Ano: ",)
console.log("Mes (0-11): ",)
console.log("Dia de mes: ",)
console.log(": ",)
console.log(": ",)
console.log(": ",)
console.log(": ",)
console.log(": ",)

let ano=dataActual.getFullYear();
let mes=dataActual.getMonth();
let dia=dataActual.getDate();
let diaDaSemana=dataActual.getDay();

console.log(`Hoxe é ${diaSemana[diaDaSemana]}, ${dia} de ${meses[mes]}`)

let fechaNacemento=new Date(2006, 1, 15)

let anoNacemento=fechaNacemento.getFullYear();
let mesNacemento=fechaNacemento.getMonth();
let diaNacemento=fechaNacemento.getDate();
let diaDaSemanaNacemento=fechaNacemento.getDay();

console.log(`Nacin o ${diaSemana[diaDaSemanaNacemento]}, ${diaNacemento} de ${meses[mesNacemento]} de ${anoNacemento}`)
console.log(fechaNacemento)