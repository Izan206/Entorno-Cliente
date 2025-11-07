// Declaramos unha variable numérica global sen inicializar e outra inicializada
var numero1, numero2 = 20;

// Inicializamos a variable numérica
numero1 = 60;

// Declaramos unha variable global e tomamos o valor dun prompt
//var texto = prompt('Introduce un texto: ','');

//console.log(texto);

// Creamos un array con varios elementos de tipo string
var postos = ['Programador/a','Técnico/a','Administrativo/a','Xerente'];

console.log(postos); // Imprimimos todo o contido do array
console.log(postos[2]); // Imprimimos unha posición concreta
console.log(postos[4]); // Imprimimos unha posición inválida
postos[4] = 'Auxiliar'; // Engadimos un novo elemento ao array polo final
console.log(postos[4]); // Imprimimos unha posición nova
console.log(typeof postos); // Imprimimos o tipo do array (object)
console.log(postos.length); // Imprimimos a lonxitude do array
postos[6] = 'Prácticas'; // Engadimos un novo elemento ao array deixando un oco
console.log(postos); // Imprimimos todo o contido do array

// Declaramos un novo array, neste caso numérico
var numeros = [1,2,3,4,5];

// Declaramos unha función auxiliar que actuará como iterador do array
function imprimirDecenas(i) {
  console.log(i*10);
}

// Percorremos o array de números pasándolle a función auxiliar como iterador
numeros.forEach(imprimirDecenas);

// Extraemos e imprimimos o último elemento do array de postos
console.log(postos.pop());
console.log(postos); // Comprobamos que efectivamente xa non está o último elemento

// Imprimimos os elementos do array de postos empregando unha cadea como separador
console.log(postos.join(' - '));

// Extraemos e imprimimos o primeiro elemento do array de postos
console.log(postos.shift());
console.log(postos); // Comprobamos que efectivamente xa non está o primeiro elemento

postos.push('Programador/a'); // Engadimos un elemento polo final ao array de postos
postos.unshift('Prácticas'); // Engadimos un elemento polo inicio ao array de postos
console.log(postos);
postos.sort(); // Ordenamos o array alfabeticamente
console.log(postos);

// Eliminamos directamente un elemento por posición
delete postos[2];
console.log(postos);

// Engadir a partires da posición 2, sobreescribindo 1 elemento, o valor "Programador/a"
postos.splice(2,1,'Programador/a');
console.log(postos);

// Eliminamos 1 elemento a partires da posición 6
postos.splice(6,1);
console.log(postos);

// Creamos subarrays do array de postos (o primeiro parámetro é a posición de inicio -incluída- e o segundo a posición de remate -non incluída-)
var inicio = postos.slice(0,3);
var fin = postos.slice(3,postos.length);
console.log(inicio);
console.log(fin);