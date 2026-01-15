let btnGardar = document.getElementById("btn-gardar");
let btnCancelar = document.getElementById("btn-cancelar");
let divHTML = document.getElementById("resultado");

function crearContador() {
  let conta = 0;
  return function (nome) {
    conta++;
    let p = document.createElement("p");
    p.textContent += `Levas ${conta} clicks seguidos no ${nome}  \n`;
    divHTML.appendChild(p);
    return conta;
  };
}
let contadorGardar = crearContador();
let contadorCancelar = crearContador();

btnGardar.addEventListener("click", function () {
  contadorGardar("boton gardar");
});
btnCancelar.addEventListener("click", function () {
  contadorCancelar("boton cancelar");
});
