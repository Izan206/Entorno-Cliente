let dataEventoInput = document.getElementById("data");
let nomeEventoInput = document.getElementById("nome-evento");
let mensajeInput = document.getElementById("mensaje");
let listaEventos = document.getElementById("listaEventos");

let agendaEventos = [];

function gardarEvento() {
  let dataEventoStr = dataEventoInput.value;
  let nomeEventoStr = nomeEventoInput.value.trim();

  let dataEvento = new Date(dataEventoStr);
  dataEvento.setHours(0, 0, 0, 0);
  let dataActual = new Date();
  dataActual.setHours(0, 0, 0, 0);

  mensajeInput.textContent = "";

  if (dataEventoStr === "" || dataEvento < dataActual) {
    mensajeInput.textContent =
      "Debes introducir una fecha válida y no anterior a la actual";
    return;
  }

  if (nomeEventoStr === "") {
    mensajeInput.textContent = "El evento debe tener un nombre";
    return;
  }

  agendaEventos.push({
    data: dataEventoStr,
    nome: nomeEventoStr,
    dataObj: dataEvento,
  });

  renderizarEventos();
  dataEventoInput.value = "";
  nomeEventoInput.value = "";
}

function renderizarEventos(eventos = agendaEventos) {
  eventos.sort((a, b) => a.dataObj - b.dataObj);
  listaEventos.innerHTML = "";
  eventos.forEach((evento, index) => {
    const li = document.createElement("li");
    li.textContent = `${formatarData(evento.dataObj)} - ${evento.nome}`;

    // Botón de editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.style.marginLeft = "10px";
    btnEditar.onclick = () => editarEvento(index);
    li.appendChild(btnEditar);

    listaEventos.appendChild(li);
  });
}

function filtrarEventos(filtro) {
  let hoxe = new Date();
  hoxe.setHours(0, 0, 0, 0);
  let dataLimite = new Date();
  dataLimite.setHours(0, 0, 0, 0);

  if (filtro === "todo") {
    renderizarEventos();
    return;
  } else if (filtro === "semanaSiguiente") {
    dataLimite.setDate(hoxe.getDate() + 7);
  } else if (filtro === "mesSiguiente") {
    dataLimite.setMonth(hoxe.getMonth() + 1);
  } else if (filtro === "anhoSiguiente") {
    dataLimite.setFullYear(hoxe.getFullYear() + 1);
  }

  let eventosFiltrados = agendaEventos.filter(
    (evento) => evento.dataObj >= hoxe && evento.dataObj <= dataLimite
  );

  renderizarEventos(eventosFiltrados);
}

function formatarData(data) {
  let opcions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return data.toLocaleDateString("gl-ES", opcions);
}

function editarEvento(index) {
  let evento = agendaEventos[index];
  if (!evento) return;
  dataEventoInput.value = evento.data;
  nomeEventoInput.value = evento.nome;
  agendaEventos.splice(index, 1);
  renderizarEventos();
}
