// Saída de datos
console.log("Mensaje de log");
console.info("Informacion adicional");
console.warn("Advertencia!!");
console.error("Error 404");

const compra = ["Pan", "Arroz", "Leite", "Froita"];
console.table(compra);

console.group("COMEZO DO GRUPO");
console.log("Primeira mensaxe do grupo");
console.log("Segunda mensaxe do grupo");
console.groupEnd();

// Manipulando DOM
const div_salida = document.getElementById("saida");
div_salida.innerHTML = "<p><strong>Hola</strong> Mundo</p>";

// Insertar HTML directamente en distintas posiciones
div_salida.insertAdjacentHTML("beforebegin", "<div>Antes de la etiqueta</div>");
div_salida.insertAdjacentHTML("afterbegin", "<div>Dentro al inicio</div>");
div_salida.insertAdjacentHTML("beforeend", "<div>Dentro al final</div>");
div_salida.insertAdjacentHTML("afterend", "<div>Después de la etiqueta</div>");

// Confirmación con el usuario
let confirmacion = window.confirm("Queres continuar?");
if (confirmacion) {
  console.log("El usuario aceptó");
  div_salida.insertAdjacentHTML("beforeend", "<p>El usuario aceptó</p>");
} else {
  console.log("El usuario denegó");
  div_salida.insertAdjacentHTML("beforeend", "<p>El usuario denegó</p>");
}

let nombre = window.prompt("Introduce tu nombre", "Ex: Izan");

if (nombre != null && nombre.trim() != "") {
  console.log("El usuario se llama ", nombre);
  div_salida.insertAdjacentHTML("beforeend", `<p>Un saludo, ${nombre} </p>`);
} else {
  console.log("El usuario canceló", nombre);
  div_salida.insertAdjacentHTML("beforeend", "<p>Un saludo, ${nombre}</p>");
}
