let letras = ['beta','gamma','alpha', 'delta', 'epsilon', 'gamma', 'delta']

let resultadosSome=letras.some(function (busca){return busca.includes("dell")});
console.log(resultadosSome);

let resultadosEvery=letras.every(function (busca){return busca.length>3});
console.log(resultadosEvery);

let resultadosFind=letras.find(function (busca) {return busca.startsWith("d")})
console.log(resultadosFind);

let resultadosFilter=letras.filter(function (busca) {return busca.length%2==0})
console.log(resultadosFilter);

//IMPORTANTE ELIMINAR ELEMENTO ARRAY
let resultadosFilterBorrarElemento=letras.filter(function (busca) {return busca!="epsilon"})
console.log(resultadosFilterBorrarElemento);

let resultadosFindIndex=letras.filter(function (busca) {return busca!="epsilon"})
console.log(resultadosFindIndex);

let resultadoMap=letras.map(function (busca) {return busca+('('+busca.length+')')})
console.log(resultadoMap);

let numLetras=0
letras.forEach(function (busca) {return numLetras+= busca.length})
console.log(numLetras);

let resultadoReduce=letras.reduce(function (busca, totalLetras) {return totalLetras + busca.length}, 0)
console.log(resultadoReduce);

let resultadoReduce2=letras.reduce(function (busca, totalLetras) {return totalLetras + "->"+ busca},  "Inicio")
console.log(resultadoReduce2);

let resultadoReduceRight=letras.reduceRight(function (busca, totalLetras) {return totalLetras + "<-"+ busca},  "Inicio")
console.log(resultadoReduceRight);

let produtos = [
    {nome: "Leite", stock:10, prezo:1.50},
    {nome: "Pan", stock:0, prezo:0.90},
    {nome: "Ovos", stock:25, prezo:2.20},
    {nome: "Queixo", stock:5, prezo:3.45}
]

console.log("Array orixinal") 
console.log(produtos)

let resultadoProductos=produtos.filter(function (producto) {return producto.stock !=0})

resultadoProductos.forEach(objeto => {
    console.log(objeto)
})