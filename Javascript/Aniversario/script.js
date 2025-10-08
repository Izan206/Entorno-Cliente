let dataNacementoIngresada = document.getElementById("data");
let diaSemanaIngresado = document.getElementById("dia-semana");
let resultadoDiv = document.getElementById("resultado");

const diasGL = [
  "Domingo",
  "Luns",
  "Martes",
  "Mercores",
  "Xoves",
  "Venres",
  "Sabado",
];
function calcularAniversario() {
  let dataNacementoStr = dataNacementoIngresada.value;
  let diaDesexado = Number(diaSemanaIngresado.value);

  //Validacion de q os campos non estan baleiros
  if (!dataNacementoStr || diaDesexado === "") {
    resultadoDiv.innerText =
      "Por favor, introduce unha data de nacemento e selecciona un dia";
    return false;
  }

  let dataNacemento = new Date(dataNacementoStr);
  let hoxe = new Date();

  //Comprobar que a data e valida e non esta no futuro
  if (dataNacemento > hoxe) {
    resultadoDiv.innerText =
      "Por favor, introduce unha data de nacemento no pasado";
    return false;
  }

  let anoActual = hoxe.getFullYear();
  let mesAniversario = dataNacemento.getMonth();
  let diaAniversario = dataNacemento.getDate();

  let dataProximoAniversario = new Date(
    anoActual,
    mesAniversario,
    diaAniversario
  );

  //se a data deste ano xa pasou imos o proximo ano
  if (dataProximoAniversario < hoxe) {
    dataProximoAniversario.setFullYear(
      dataProximoAniversario.getFullYear() + 1
    );
  }

  while (dataProximoAniversario.getDay !== diaDesexado) {
    //incrementamos o ano para buscar o seguinte aniversario
    dataProximoAniversario.setFullYear(dataProximoAniversario.getFullYear() + 1);
  }

  let inicio=new Date()
  let fin=new Date(dataProximoAniversario)
  let diferenciaDias=(fin-inicio)
}
