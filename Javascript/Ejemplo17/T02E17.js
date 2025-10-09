// Conversión de distintos tipos a número
console.log("Conversión a número:");
console.log(Number("123"));         // 123
console.log(Number("123.45"));      // 123.45
console.log(Number(""));            // 0
console.log(Number(null));          // 0
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number("123abc"));      // NaN

// Uso de parseInt e parseFloat
console.log("Uso de parseInt e parseFloat:");
console.log(parseInt("123px"));     // 123
console.log(parseInt("12.3"));      // 12
console.log(parseFloat("12.3px"));  // 12.3

// Verificación de valores válidos
console.log("Verificación de números:");
console.log(isNaN(Number("abc")));  // true
console.log(isNaN(Number("123")));  // false
console.log(Number.isNaN("123"));   // false (non é un NaN real)
console.log(Number.isFinite(10));   // true
console.log(Number.isFinite(Infinity)); // false

// Métodos útiles de Number
console.log("Métodos de Number:");
console.log(Number.isInteger(10));      // true
console.log(Number.isInteger(10.5));    // false
console.log(Number.parseFloat("123.456", 10).toFixed(2)); // "123.46"
console.log(Number.parseInt("FF", 16)); // 255

// Constantes especiais
console.log("Constantes especiais:");
console.log(Number.EPSILON);       // 2.220446049250313e-16
console.log(Number.MAX_VALUE);     // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);     // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// Validación simple dun valor numérico
function éNumero(valor) {
    return typeof valor === 'number' && !isNaN(valor) && isFinite(valor);
}

console.log("Validación personalizada:");
console.log(éNumero(42));           // true
console.log(éNumero(NaN));          // false
console.log(éNumero(Infinity));     // false
console.log(éNumero("123"));        // false