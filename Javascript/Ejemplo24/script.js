let uri="https://www.fernandowirtz.com/publicar.php?tag=Organización"
uricodificado=encodeURI(uri)
console.log(uricodificado)

//Codifica mas simbolos en comparacion al anterior
let uricomponente=encodeURIComponent(uricodificado)
console.log(uricomponente)

console.log(decodeURI(uricodificado))

console.log(decodeURIComponent(uricomponente))

console.log(eval("(3+7)/3"))

console.log(eval("((3+7)/3).toFixed(3)"))


isFinite(1); // true
isFinite(1/0); // false
isFinite(+Infinity); // false
isFinite(-3.14); // true
isFinite(new Date()); // true
isFinite("2019-11-22"); // false

//● isNaN(): determina se un valor non é un número legal devolvendo true/false.
isNaN(1); // false
isNaN(1/0); // false
isNaN(NaN); // true
isNaN(-3.14); // false
isNaN(new Date()); // false
isNaN("2019-11-22"); // true

//Number(): converte o valor dun obxecto a un número. Devolve NaN se non é válido.
Number(true); // 1
Number(new Date()); // 1576224556541
Number("3.14"); // 3.14
Number("3 14"); // NaN

/* parseFloat(): determina se o primeiro caracter dunha string é un número (omitindo
espacios en branco ao principio). Nese caso colle caracteres até que atope un non
numérico e convérteo nun número decimal. Se non atopa ningún caracter numérico
devolve NaN.*/

parseFloat("3") // 3
parseFloat("3.0") // 3
parseFloat("3.14") // 3.14
parseFloat("3 4 5") // 3
parseFloat(" 3 ") // 3
parseFloat("70 kg") // 70 MUYYY IMPORTANTE aqui funciona y debajo no pq solo evalua si lo del principio es un numero
parseFloat("I am 70") // NaN

/* parseInt(): determina se o primeiro caracter dunha string é un número (omitindo
espacios en branco ao principio). Nese caso colle caracteres até que atope un non
numérico e convérteo nun número enteiro. Se non atopa ningún caracter numérico
devolve NaN.
A función recibe un segundo parámetro opcional que indica a base (entre 2 e 36) na que
está especificado o número */

parseInt("3") // 3
parseInt("1001", 2) // 9
parseInt("3.14") // 3
parseInt("3 4 5") // 3
parseInt(" 3 ") // 3
parseInt("70 kg") // 70
parseInt("I am 70") // NaN