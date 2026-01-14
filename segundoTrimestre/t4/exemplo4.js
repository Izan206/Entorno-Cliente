function CalcularEstadisticas(numeros) {
  // let mensaxe="Ola"
  // function functionInterna() {
  //     console.log(mensaxe + ", " + nome)
  // }

  // functionInterna()

  function calcularMedia() {
    let media;
    let suma = 0;
    let cantidadNumeros;
    for (let num of numeros) {
      suma += num;
      cantidadNumeros = numeros.length;
      media = suma / cantidadNumeros;
    }
    return media;
  }

  console.log("Media de la lista introducida: "+calcularMedia())

  function calcularMaximo() {
    let maximo=0;
    for (let num of numeros) {
        if (num>maximo) {
            maximo=num
        }
    }
    return maximo
  }

  console.log("Maximo de la lista: "+calcularMaximo())
}

CalcularEstadisticas([1, 4, 5, 6, 7]);
