let numAdiviñar = Math.floor(Math.random() * 100) + 1;
let numeroInput = document.getElementById("xogada");
let mensaxeHTML = document.getElementById("mensaxe");
let intentosHTML = document.getElementById("intentos");
let intentos = 0;

function comprobarSuposicion() {
  intentos++;
  let numeroEntrada = parseInt(numeroInput.value);
  if (Number.isNaN(numeroEntrada) || numeroEntrada < 1 || numeroEntrada > 100) {
    mensaxeHTML.style.color = "red";
    mensaxeHTML.textContent = "Debes introducir algun numero";
    return;
  }

  if (numeroEntrada === numAdiviñar) {
    mensaxeHTML.style.color = "green";
    mensaxeHTML.textContent = `Felicidades, el numero era ${numAdiviñar}`;
    intentosHTML.textContent = `Lo has logrado en ${intentos} intentos`;
  } else if (numeroEntrada > numAdiviñar) {
    mensaxeHTML.style.color = "orange";
    mensaxeHTML.textContent = `El numero que buscas es menor que ${numeroEntrada}`;
    intentosHTML.textContent = `Llevas ${intentos} intentos`;
  } else {
    mensaxeHTML.style.color = "orange";
    mensaxeHTML.textContent = `El numero que buscas es mayor que ${numeroEntrada}`;
    intentosHTML.textContent = `Llevas ${intentos} intentos`;
  }

  numeroInput.value = "";
}
