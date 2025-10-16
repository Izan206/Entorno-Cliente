// DECLARACIÓN DA FUNCIÓN 

/**
 * Función que calcula a media de tres números
 * @param {number} num1 - Primeiro número
 * @param {number} num2 - Segundo número
 * @param {number} num3 - Terceiro número
 * @returns {number} Media dos tres números
 */
function calcularMedia(num1, num2, num3) {
    let total = num1 + num2 + num3;
    let media = total / 3;
    return media;
}

// USO DA FUNCIÓN 

let resultado1 = calcularMedia(4, 5, 6);
console.log("Media de 4, 5 e 6: "+ resultado1); // 5

let resultado2 = calcularMedia(7, 8, 9);
console.log("Media de 7, 8 e 9: "+ resultado2); // 8

let resultado3 = calcularMedia(3.5, 4.5, 5);
console.log("Media de 3.5, 4.5 e 5: "+ resultado3); // 4.333...

// USO EN OUTRO CONTEXTO 

function amosarResultado(nome, nota1, nota2, nota3) {
    let media = calcularMedia(nota1, nota2, nota3);
    console.log(`${nome} ten unha media de ${media.toFixed(2)}.`);
}

amosarResultado("Ana", 6, 7, 8); // Ana ten unha media de 7.00.
amosarResultado("Berto", 5, 6, 4); // Berto ten unha media de 5.00