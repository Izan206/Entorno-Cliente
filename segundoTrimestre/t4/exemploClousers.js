var incrementar = (function () {
  var contador = 0;
  return function () {
    return ++contador;
  };
})();
incrementar();
incrementar();
console.log(incrementar()); // contador = 3 (só accesible a través da función)

// Esta función devolve outra función encargada de incrementar o contador.
function crearContador() {
  var contador = 0;
  return function () {
    contador++;
    console.log(contador);
    return contador;
  };
}
// Ao gardar o resultado de executar a función "crearContador" nunha variable
// estamos a crear un closure que conterá a función devolta e máis o ámbito da
// función "crearContador" (iso é o que permite que non se "perda" a variable
// contador)
var incrementar = crearContador();
incrementar();
incrementar();
incrementar();
