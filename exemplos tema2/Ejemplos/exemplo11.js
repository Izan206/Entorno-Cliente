// XEITOS DE INVOCAR FUNCIÓNS E PASALAS COMA PARÁMETRO

// Declaramos unha función estándar
function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 15));

// Declaramos unha función que recibe tres parámetros, sendo un deles a función "sumar"
function sumarTexto(x, y, aux) {
    console.log("A suma de " + x + " e " + y + " é " + aux(x, y));
}

// Chamamos á función sumarTexto pasándolle como parámetro dous números e a función "sumar"
sumarTexto(13, 14, sumar);

// Chamamos á función sumarTexto pasándolle como parámetro dous números e unha función anónima
sumarTexto(12, 34, function (a, b) { return a + b; });

// Chamamos á función sumarTexto pasándolle como parámetro dous números e unha función frecha
sumarTexto(7, 88, (a, b) => a + b);

// MANEXO DE PARÁMETROS DE XEITO POLIMÓRFICO

function parametros() {
    if (arguments.length == 0) {
        console.log("Non se recibiu ningún argumento");
    } else {
        console.log("Recibíronse " + arguments.length + " argumentos")
    }
}

parametros();
parametros(1, 2, 3);
parametros([1, 2, 3], (a, b) => a + b, "Ola mundo!");