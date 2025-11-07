let dataInput = document.getElementById("data");
let entradaInput = document.getElementById("nome-evento");
let listaEventosHTML = document.getElementById("listaEventos");

let eventos = [];

function gardarEvento() {
  let dataStr = dataInput.value; //String
  let nome = entradaInput.value;
  let dataIntroducida = new Date(dataStr);
  let dataHoxe = new Date();

  dataHoxe.setHours(0, 0, 0, 0);

  if (nome === "" || dataStr === "") {
    listaEventosHTML.style.color = "red";
    listaEventosHTML.innerHTML = `
        <li>
            <p>Debes introducir un valor en cada parámetro</p>
        </li>
    `;
    return;
  } else if (dataHoxe > dataIntroducida) {
    listaEventosHTML.style.color = "red";
    listaEventosHTML.innerHTML = `
        <li>
            <p>La fecha debe ser posterior a la actual</p>
        </li>
    `;
    return;
  }

  let evento = {
    id: Date.now(),
    nome: nome,
    data: dataStr,
    dataObxecto: dataIntroducida,
  };

  eventos.push(evento);
  dataInput.value = "";
  entradaInput.value = "";
  renderizarEvento(eventos);
}

function renderizarEvento(arrayRenderizar) {
  let eventoHTML = arrayRenderizar.map((elemento) => {
    return `
            <li>
                <div class="evento-info"> 
                    <span>${elemento.nome}</span> 
                    <span>${elemento.data}</span> 
                </div>
            </li>
        `;
  });

  listaEventosHTML.innerHTML = eventoHTML.join("");
}

function filtrarEventos(tipo) {
  let dataHoxe = new Date();
  dataHoxe.setHours(0, 0, 0, 0);

  let eventosFiltrados = [];

  switch (tipo) {
    case "todo":
      eventosFiltrados = eventos;
      break;
    case "semanaSiguiente":
      let dataLimiteSemana = new Date(dataHoxe);
      dataLimiteSemana.setDate(dataHoxe.getDate() + 7);
      eventosFiltrados = eventos.filter((evento) => {
        return (
          evento.dataObxecto >= dataHoxe &&
          evento.dataObxecto <= dataLimiteSemana
        );
      });
      break;
    case "mesSiguiente":
      let dataLimiteMes = new Date(dataHoxe);
      dataLimiteMes.setMonth(dataHoxe.getMonth() + 1);
      eventosFiltrados = eventos.filter((evento) => {
        return (
          evento.dataObxecto >= dataHoxe && evento.dataObxecto <= dataLimiteMes
        );
      });
      break;
    case "anhoSiguiente":
      let dataLimiteAnho = new Date(dataHoxe);
      dataLimiteAnho.setFullYear(dataHoxe.getFullYear() + 1);

      eventosFiltrados = eventos.filter((evento) => {
        return (
          evento.dataObxecto >= dataHoxe && evento.dataObxecto <= dataLimiteAnho
        );
      });
      break;
  }
  renderizarEvento(eventosFiltrados);
}
