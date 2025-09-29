var nome_global = "Son global con var";
let nome_global_let = "Son global let";
const nome_global_const = "Son global const";

function ambito_funcion() {
  var nome_funcion = "Son funcion con var";
  let nome_funcion_let = "Son funcion let";
  const nome_funcion_const = "Son funcion const";

  console.log("Dentro de la funcion: ");
  console.log(nome_global);
  console.log(nome_global_let);
  console.log(nome_global_const);
  console.log(nome_funcion);
  console.log(nome_funcion_let);
  console.log(nome_funcion_const);

  if (true) {
    console.log("Console dentro del bloque If");
    var nome_bloque = "Son bloque con var";
    let nome_bloque_let = "Son bloque let";
    const nome_bloque_const = "Son bloque const";
    console.log("Dentro de la funcion: ");
    console.log(nome_global);
    console.log(nome_global_let);
    console.log(nome_global_const);
    console.log(nome_funcion);
    console.log(nome_funcion_let);
    console.log(nome_funcion_const);
    console.log(nome_bloque);
    console.log(nome_bloque_let);
    console.log(nome_bloque_const);
  }

  console.log("Fuera del bloque if pero en la funcion");
  console.log(nome_bloque);
  //console.log(nome_bloque_let)
  //console.log(nome_bloque_const)
}

console.log("Fuera de la funcion");
console.log(nome_global);
console.log(nome_global_let);
console.log(nome_global_const);

console.log(nome_funcion);
console.log(nome_funcion_let);
console.log(nome_funcion_const);
ambito_funcion();
