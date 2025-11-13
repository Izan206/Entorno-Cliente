console.log(innerHeight, "x", innerWidth);
console.log(screenX, "x", screenY, "y");
alert("benvido a esta aplicacion");
let x = confirm("Queres continuar?");
console.log("Valor confirm", x);

if (x) {
  console.log("O usuario ha decidido continuar");
} else {
  console.log("O usuario a rechazado continuar");
}

let nome = prompt("Como te chamas?", "anonimo");
console.log(nome);

setTimeout(() => {
  console.log("Esta mensaxe tarda en mostrase tres segundos");
}, 3000);

let id = setInterval(() => {
  console.log("cada un segundo: ", new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Dejara de mostrarse tras 5 segundos");
}, 5000);

let novaVentana = window.open("", "_blank", "width=400, height=300");

setTimeout(() => {
  if (!novaVentana.closed) {
    novaVentana.document.writeln("Hola mundo despues de 5s");
  }
}, 5000);

setTimeout(() => {
    if (!novaVentana.closed) {
        novaVentana.close();
    }
}, 7000)