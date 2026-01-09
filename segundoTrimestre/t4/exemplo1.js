console.log(x)
var x=20
console.log(x)

// console.log(y) //Reference erro (variable non definida)
let y=7
console.log(y)

// console.log(z) //Reference erro (variable non definida)
const z=8
console.log(z)

chamar()
function chamar() {
    console.log("Facendo chamar...")
}

// executarFuncion() Type error: No funciona al guardar la funcion en var 
var executarFuncion =() => {console.log("Executada")}
executarFuncion()