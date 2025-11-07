let dataNacementoInput = document.getElementById("data");
let diaSemanaInput = document.getElementById("dia-semana");
let resultadoHTML = document.getElementById("resultado");

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

function calcularAniversario() {
  let dataNacementoStr = dataNacementoInput.value;
  let diaSemana = parseInt(diaSemanaInput.value);

  if (dataNacementoStr == "" || diaSemanaInput.value == "") {
    resultadoHTML.style.color = "red";
    resultadoHTML.innerHTML =
      "<p>Debes introducir una fecha y un dia obligatoriamente</p>";
    return;
  }

  let dataNacemento = new Date(dataNacementoStr);
  let mesOriginal = dataNacemento.getMonth();
  let diaOriginal = dataNacemento.getDate();
  let anoInicial = dataNacemento.getFullYear();

  let fechaHoy = new Date();
  let anoBuscado = fechaHoy.getFullYear(); // Ahora mismo: 2025

  let dataBuscada = new Date(anoBuscado, mesOriginal, diaOriginal);

  if (dataBuscada < fechaHoy) {
    dataBuscada.setFullYear(dataBuscada.getFullYear() + 1);
  }

  let diaBuscado = dataBuscada.getDay();
  while (diaSemana != diaBuscado) {
    dataBuscada.setFullYear(dataBuscada.getFullYear() + 1);
    diaBuscado = dataBuscada.getDay();
  }

  let diaEncontrado = diasSemana[diaBuscado];
  let dataEncontrada = dataBuscada.toLocaleDateString();
  resultadoHTML.style.color = "green";
  resultadoHTML.innerHTML = `
        <p>O teu aniversario cadrará en ${diaEncontrado} o ${dataEncontrada}</p>
    `;
}
