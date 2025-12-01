const novaBD = window.indexedDB;

let dataInput = document.getElementById("data");
let entradaInput = document.getElementById("nome-evento");
let listaEventosHTML = document.getElementById("listaEventos");
let btnCrearBD = document.getElementById("btnCrearBD");
let eventos = [];

document.addEventListener("DOMContentLoaded", crearBaseDatos);

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
  let dataLimite=new Date(dataHoxe)
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

  const rangoFiltro=IDBKeyRange.bound(dataHoxe, dataLimite, false, true)


  renderizarEvento(eventosFiltrados);
}

function crearBaseDatos() {
  let solicitude = novaBD.open("eventos_db", 1);

  solicitude.onerror = () => {
    console.error("Non se puido abrir a base de datos");
  };

  solicitude.onsuccess = (evento) => {
    db = evento.target.result;
    listaEventosHTML.style.color = "green";
    listaEventosHTML.innerHTML = `
        <li>
            <p>Base de datos aberta correctamente</p>
        </li>
    `;
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

      console.log("Almacen 'eventos' creado");
      listaEventosHTML.innerHTML = `
        <li>
            <p>Almacen eventos creado na BD</p>
        </li>
    `;
    } else {
      console.log("Almacen eventos xa existente");
      listaEventosHTML.innerHTML = `
        <li>
            <p>Almacen eventos xa existente</p>
        </li>
    `;
    }
  };
}

function gardarEvento() {
  if (!db) {
    listaEventosHTML.innerHTML = `
    <li>
        <p>Almacen eventos xa existente</p>
    </li>`;
  }

  let data = document.getElementById("data").value.trim();
  let nome = document.getElementById("nome-evento").value.trim();

  if (!data || !nome) {
    alert("Debes introducir  data y nombre");
    return;
  }

  let txLectura = db.transaction("eventos", "readonly");
  let almacen = txLectura.objectStore("eventos");
  let reqContar = almacen.count();

  reqContar.onsuccess = () => {
    let novoID = reqContar.result + 1;
    let txInsercion = db.transaction("eventos", "readwrite");
    let almacenInsercion = txInsercion.objectStore("eventos");

    let evento = {
      id: novoID,
      data: data,
      nome: nome,
    };

    let reqInsercion = almacenInsercion.add(evento);
    reqInsercion.onsuccess = () => {
      console.log("Evento creado: ", evento);
      listaEventosHTML.innerHTML = `
        <li>
          <p>Evento ${nome} creado</p>
        </li>
        `;
      eventos.push(evento)
    };
    reqInsercion.onerror=()=> {
      console.log("Erro ao inserir o evento")
        listaEventosHTML.innerHTML = `
        <li>
          <p>Error ao inserir o rexistro/p>
        </li>`;
    }
  };
}
