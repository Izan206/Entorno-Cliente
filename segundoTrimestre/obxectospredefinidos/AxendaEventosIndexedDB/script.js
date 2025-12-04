const novaBD = window.indexedDB;

let dataInput = document.getElementById("data");
let entradaInput = document.getElementById("nome-evento");
let listaEventosHTML = document.getElementById("listaEventos");
let formulario = document.getElementById("formulario");
let eventos = [];

document.addEventListener("DOMContentLoaded", crearBase);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    renderizarEvento(eventos)
  }, 100)
})
function crearBase() {
  let solicitude = novaBD.open("eventos_bd", 1);

  solicitude.onerror = () => {
    console.error("Non se puido abrir a base de datos");
  };

  solicitude.onsuccess = (evento) => {
    db = evento.target.result;
    console.log("Base de datos aberta correctamente");
  };

  solicitude.onupgradeneeded = (evento) => {
    db = evento.target.result;

    if (!db.objectStoreNames.contains("eventos")) {
      let almacen = db.createObjectStore("eventos", {
        keyPath: "id",
        autoIncrement: true,
      });
      almacen.createIndex("dataIndice", "data", { unique: false });
      almacen.createIndex("nomeIndice", "nome", { unique: false });

      console.log("Almacen 'eventos' xa creado");
    } else {
      console.log("Almacen eventos xa existe na base de datos")
    }
  };
}

function gardarEvento() {
  let dataStr = dataInput.value;
  let nome = entradaInput.value;
  let dataIntroducida = new Date(dataStr);
  let dataHoxe = new Date();

  dataHoxe.setHours(0, 0, 0, 0);

  if (nome === "" || dataStr === "") {
    listaEventosHTML.innerHTML = "";
    let mensajeElement = document.getElementById("mensaje");
    mensajeElement.style.color = "red";
    mensajeElement.textContent = "Debes introducir un valor en cada parámetro";
    return;
  } else if (dataHoxe > dataIntroducida) {
    listaEventosHTML.innerHTML = "";
    let mensajeElement = document.getElementById("mensaje");
    mensajeElement.style.color = "red";
    mensajeElement.textContent = "La fecha debe ser posterior a la actual";
    return;
  }

  document.getElementById("mensaje").textContent = "";

  let evento = {
    id: Date.now(),
    nome: nome,
    data: dataStr,
    dataObxecto: dataIntroducida,
    completado: false,
  };

  let transaction = db.transaction(["eventos"], "readwrite");
  let almacen = transaction.objectStore("eventos");
  almacen.add(evento);

  transaction.onsuccess = () => {
    eventos.push(evento);
    dataInput.value = "";
    entradaInput.value = "";
    renderizarEvento(eventos);
  };
}

function renderizarEvento(arrayRenderizar) {
  listaEventosHTML.innerHTML = "";

  for (let evento of arrayRenderizar) {
    let li = document.createElement("li");
    if (evento.completado) {
      li.classList.add("evento-completado");
    }

    let divInfo = document.createElement("div");
    divInfo.classList.add("evento-info");
    li.appendChild(divInfo);

    let span1 = document.createElement("span");
    span1.textContent = `${evento.nome}`;

    let span2 = document.createElement("span");
    span2.textContent = `${evento.data}`;

    divInfo.appendChild(span1);
    divInfo.appendChild(span2);

    let divBotones = document.createElement("div");
    divBotones.classList.add("evento-botones");

    let btnCompletar = document.createElement("button");
    btnCompletar.textContent = evento.completado ? "Deshacer" : "Completar";
    btnCompletar.classList.add("btn-completar");
    btnCompletar.onclick = () => completarEvento(evento.id);
    divBotones.appendChild(btnCompletar);

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.onclick = () => eliminarEvento(evento.id);
    divBotones.appendChild(btnEliminar);

    li.appendChild(divBotones);
    listaEventosHTML.appendChild(li);
  }
}

function eliminarEvento(id) {
  if (!db) {
    mensaxe.textContent = "A BD non esta aberta";
    return;
  }
  let transaction = db.transaction(["eventos"], "readwrite");
  let almacen = transaction.objectStore("eventos");
  let solicitudeEliminacion = almacen.delete(id);

  solicitudeEliminacion.onsuccess = () => {
    eventos = eventos.filter((e) => e.id !== id);
    renderizarEvento(eventos);
  };
}

function completarEvento(id) {
  const eventoACompletar = eventos.find((evento) => evento.id === id);

  if (eventoACompletar) {
    eventoACompletar.completado = !eventoACompletar.completado;
    renderizarEvento(eventos);
  }
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
