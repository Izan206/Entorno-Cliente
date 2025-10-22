function saudar(nome, mensaxe = "benvido/a ") { //mensaxe ten valor por defecto
    console.log(mensaxe + nome);
}

saudar("Izan");
saudar("Izan", "Hola ");

function mostrarArgumentos() {
    for (let i in arguments) {
        console.log(arguments[i]);
    }
}

mostrarArgumentos(1, 3, 5, 7, 13)

function multiplicar(...numeros) {
    return numeros.reduce((resultadoFinal, b) => resultadoFinal*b, 1)
}

console.log(multiplicar(2, 5, 8));
console.log(multiplicar(...[2, 4, 6, 8, 10]));



//Paso por valor con datos primitivos
console.log("Paso por valor con datos primitivos")
let a=10
let b=1

function pasoPorValor(a, b) {
    a++;
    b++;
    console.log(a, b)
}

pasoPorValor(a,b)

//Paso por referencia con arrays
console.log("Paso por referencia con arrays")
let array = [1, 2, 3]
console.log(array)
function parsoPorReferencia(arr) {
    for (let i in arr) {
        arr[i]++;
    }
    console.log(arr)
}

parsoPorReferencia(array)
console.log(array)

function datosPersoa(id, nome, ...detalles) {
    console.log(id+", "+ nome+ ", "+detalles);
}

datosPersoa(1, "Pepe", 24, true)