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

//setTimeOut= mostrar un mensaje pasados x segundos
setTimeout(function (){
    console.log("Mostrar tras tres segundos")
}, 3000)

//setInterval= mostrar un mensaje cada x segundos
let intervalID=setInterval(function() {
    console.log("Mostrar cada tres segundos")
}, 3000)

clearInterval(intervalID) //Esto lo para


let conta=10
let intervalID2=setInterval(function() {
        console.log("Conta atras: ", conta--);
        if (conta==0) {
            clearInterval(intervalID2)
            console.log("Fin")
        }
},1000);