let saludar=function(){console.log("Hola clase")}
saludar()

let numeros=[1,2,3,4,5];
numeros.forEach(function(num){
    console.log(num)
})

let dobles=numeros.map(function(num){
    return num*2
})

console.log(dobles)


function aplicarFuncion(valor, funcion) {
    return funcion(valor)
}

let resultado=aplicarFuncion(9, function (x) {
    return x*x;
});

console.log(resultado)