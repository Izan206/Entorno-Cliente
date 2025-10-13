let idades = [40, 17, 85, 40, 3, 24]
let letras = ['beta','gamma','alpha', 'delta', 'epsilon', 'gamma']

console.log("Array orixinal: "+idades);
console.log("Array de Letras: "+letras);

console.log(letras.includes('del'))
console.log(letras.includes('delta'))

console.log("indice: ",letras.indexOf("gamma"));
console.log("indice: ",letras.indexOf("gamma", 2));

console.log("Ultimo indice: ",letras.lastIndexOf("gamma"));

console.log(letras.toString());

console.log(letras.join(" - "));

console.log(letras.sort())

console.log(idades.sort())

idades.sort( function (a,b) {return a-b;} ); // [5, 17, 24, 40, 110] DE MENOR A MAYOR

idades.sort( function (a,b) {return b-a;} ); // de MAYOR A MENOR

let claves=letras.keys();

for (let clave of claves) {
    console.log(clave);
}