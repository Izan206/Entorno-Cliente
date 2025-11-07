var auxiliar = 3;

// Exemplo de bucle while que vai descontando até 0
while (auxiliar > 0) {
  console.log(auxiliar);
  auxiliar--;
}

// Exemplo de bucle do-while que incrementa nunha unidade a variable até que o seu valor sexa 3
do {
  console.log(auxiliar);
  auxiliar++;
} while (auxiliar <= 3);

// Exemplo de bucle for que conta os números do 1 ao 5 (con iterador interno)
for(let i=1; i<=5; i++) {
  console.log(i);
}

// Exemplo de bucle for que conta os números do 1 ao 5 (con iterador externo)
var j=1
for(; j<=5;) {
  console.log(j);
   j++;
}

// PERCORRIDO DE COLECCIÓNS
var deportes = ['Fútbol', 'Baloncesto', 'Rugby', 'Tenis', 'Ciclismo'];

// Percorrido cun bucle for
for (let x=0; x<deportes.length; x++) {
  console.log(deportes[x]);
}

// Percorrido cun bucle for-of (toma o array elemento a elemento)
for(let deporte of deportes) {
  console.log(deporte);
}

// Percorrido cun bucle for-in (toma o array índice a índice)
for(let indice in deportes) {
  console.log(deportes[indice]);
}