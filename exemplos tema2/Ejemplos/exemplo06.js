var numero1 = 25;  // Declaramos e inicializamos unha variable numérica
var numero2 = '25'; // Declaramos e inicializamos unha variable string

if (numero1 == 25) { // Comparamos a variable numero1 cun literal
  console.log("Número1 vale 25");
}

if (numero1 == numero2) { // Comparamos os valores das variables numero1 e numero2
  console.log("Numero1 e Numero2 teñen o mesmo valor");
} else {
  console.log("Numero1 e Numero2 teñen valores distintos")
}

if (numero1 === numero2) { // Comparamos os valores e tipos das variables numero1 e numero2
  console.log("Numero1 e Numero2 teñen o mesmo valor e tipo");
} else {
  console.log("Numero1 e Numero2 teñen distinto valor ou tipo")
}

// Este é un exemplo de uso do if en forma shorthand usando o operador ?
(numero1 == numero2) ? console.log("Numero1 e Numero2 teñen o mesmo valor") : console.log("Numero1 e Numero2 teñen valores distintos");

// Exemplo de switch-case sen comportamento fall-through
var entrada = '2';
switch(entrada) {
  case '1':
    console.log("A entrada é 1");
    entrada = '2';
    break;
  case '2':
    console.log("A entrada é 2");
    entrada = '3';
    break;
  case '3':
    console.log("A entrada é 3");
    entrada = '4';
    break;
  default:
    console.log("A entrada non é nin 1, nin 2, nin 3");    
}
console.log(entrada);

// Exemplo de switch-case con comportamento fall-through
//entrada = '2';
switch(entrada) {
  case '1':
    console.log("A entrada é 1");
    entrada = '2';
  case '2':
    console.log("A entrada é 2");
    entrada = '3';
  case '3':
    console.log("A entrada é 3");
    entrada = '4';
  default:
    console.log("A entrada non é nin 1, nin 2, nin 3");    
}
console.log(entrada);

