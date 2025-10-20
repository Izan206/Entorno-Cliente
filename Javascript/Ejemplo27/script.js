let saludar=new Function("nome", "console.log('Hola',nome)");

saludar('Izan')

let sumar=new Function("num1", "num2", "return num1+num2");

console.log(sumar("2","3"));

let media=new Function("notas", 
    "let total=notas.reduce(function (t, n){return t+n},0); return total/notas.length"
)

let notas = [2, 5, 3, 6, 10];
console.log(media(notas));

let valorExterno=5;

let mostrarValor=new Function("console.log(valorExterno)") //IMPORTANTE da error pq el constructor no puede acceder a variables globales 
// mostrarValor();

let tipo_numero=new Function("n", 
    "if((n%2)==0) {console.log('El numero es par')}else {console.log('El numero es impar')}"
)

tipo_numero(2)