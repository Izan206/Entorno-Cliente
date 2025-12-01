const novaBD = window.indexedDB;
let btnCrear = document.getElementById("btnCrear");
let btnInsertar = document.getElementById("btnInsertar");
let btnListar = document.getElementById("btnListar");
let btnLerRexistro = document.getElementById("btnlerRexistro");
let btnActualizar = document.getElementById("btnActualizar");
let mensaxe = document.getElementById("mensaxe");
let db;
let temporizador;

let videoxogos = [];

btnCrear.addEventListener("click", crearBase);
btnInsertar.addEventListener("click", insertarValor);
btnListar.addEventListener("click", listarVideoxogos);
btnLerRexistro.addEventListener("click", () => {
    let id = document.getElementById("id").value;
    lerRexistro(id);
});
btnActualizar.addEventListener("click", actualizarBase)

function crearBase() {
  let solicitude = novaBD.open("videoxogos_db", 1);

  solicitude.onerror = () => {
    console.error("Non se puido abrir a base de datos");
  };

  solicitude.onsuccess = (evento) => {
    db = evento.target.result;
    mensaxe.textContent = "Base de datos aberta correctamente";
    console.log("Base de datos aberta correctamente");
    iniciarTemporizadorPechado();
  };

  solicitude.onupgradeneeded = (evento) => {
    db = evento.target.result;

    if (!db.objectStoreNames.contains("videoxogos")) {
      let almacen = db.createObjectStore("videoxogos", {
        keyPath: "id",
        autoIncrement: true,
      });
      almacen.createIndex("nomeIndice", "nome", { unique: false });
      almacen.createIndex("categoriaIndice", "categoria", { unique: false });

      console.log("Almacen 'videoxogos' creado");
      mensaxe.textContent = "Almacen videoxogos creado na BD";
    } else {
      console.log("Almacen videoxogos xa existente");
      mensaxe.textContent = "Almacen videoxogos xa existente";
    }
  };
}

function insertarValor() {
  if (!db) {
    mensaxe.textContent =
      "A BD non esta aberta. Premo primeiro 'Crear/Abrir BD'";
  }

  let nome = document.getElementById("nome").value.trim();
  let categoria = document.getElementById("categoria").value.trim();

  if (!nome || !categoria) {
    alert("Debes introducir nombre y categoria");
    return;
  }

  let txLectura = db.transaction("videoxogos", "readonly");
  let almacen = txLectura.objectStore("videoxogos");
  let reqContar = almacen.count();

  reqContar.onsuccess = () => {
    let novoID = reqContar.result + 1;

    let txInsercion = db.transaction("videoxogos", "readwrite");
    let almacenInsercion = txInsercion.objectStore("videoxogos");

    let videoxogo = {
      id: novoID,
      nome: nome,
      categoria: categoria,
    };

    let reqInsercion = almacenInsercion.add(videoxogo);
    reqInsercion.onsuccess = () => {
      console.log("Videoxogo creado: ", videoxogo);
      mensaxe.textContent = `Videoxogo ${nome} inserido`;
      videoxogos.push(videoxogo);
      iniciarTemporizadorPechado();
    };

    reqInsercion.onerror = () => {
      console.log("Erro ao inserir o videoxogo");
      mensaxe.textContent = "Error ao inserir o rexistro";
    };
  };
}

function iniciarTemporizadorPechado() {
  if (temporizador) {
    clearInterval(temporizador);
  }

  let tempoRestante = 1200;

  temporizador = setInterval(() => {
    console.log(`A base de datos pecharase en ${tempoRestante} segundos...`);
    tempoRestante--;

    if (tempoRestante < 0) {
      clearInterval(temporizador);
      if (db) {
        db.close();
        db = null;
        mensaxe.textContent =
          "Base de datos pechada tras 10 segundos de inactividade";
        console.log("Base de datos pechada");
      }
    }
  }, 1000);
}

function listarVideoxogos() {
    let listaDiv = document.getElementById("lista");
    if (!db) {
        mensaxe.textContent = "A BD non esta aberta";
        return;
    }

    let tx = db.transaction("videoxogos", "readonly");
    let almacen = tx.objectStore("videoxogos");
    let cursor = almacen.openCursor();

    let elementoHTML = [];

    cursor.onsuccess = () => {
        let rexistro = cursor.result;
        if (rexistro) {
            elementoHTML.push(`<p>${rexistro.value.id} - ${rexistro.value.nome} (${rexistro.value.categoria})</p>`);
            rexistro.continue();
        } else {
            if (elementoHTML.length == 0) {
                listaDiv.textContent = "Non hai rexistros na BD";
            } else {
                listaDiv.innerHTML = elementoHTML.join("");
            }
        }
    };
}

function lerRexistro(id) {
    let rexistroLidoDiv = document.getElementById("rexistroLido");
    if (!db) {
        mensaxe.textContent = "A BD non esta aberta";
        return;
    }
    let inputID = document.getElementById("id");
    let numId = Number(inputID.value);

    let tx = db.transaction("videoxogos", "readonly");
    let almacen = tx.objectStore("videoxogos");
    let req = almacen.get(numId);

    req.onsuccess = () => {
        if (req.result) {
            rexistroLidoDiv.innerHTML = `
                <strong>ID: </strong> ${req.result.id}<br>
                <strong>Nome: </strong> ${req.result.nome}<br>
                <strong>Categoria: </strong> ${req.result.categoria}
            `;
            console.log("Rexistro lido: ", req.result);
            document.getElementById("id").value = "";
            document.getElementById("id").focus();
        } else {
            rexistroLidoDiv.textContent = "Non hai rexistro con ese ID.";
            console.log("Non hai rexistro con ese id");
            document.getElementById("id").value = "";
            document.getElementById("id").focus();
        }
    };
}

function actualizarBase() {
    let rexistroLidoDiv = document.getElementById("rexistroLido");
    if (!db) {
        mensaxe.textContent = "A BD non esta aberta";
        return;
    }
    let inputID = document.getElementById("id");
    let numId = Number(inputID.value);
    let nome = document.getElementById("nome").value.trim();
    let categoria = document.getElementById("categoria").value.trim();

    let tx = db.transaction("videoxogos", "readwrite");
    let almacen = tx.objectStore("videoxogos");
    let req = almacen.get(numId);

    req.onsuccess = () => {
        if (req.result) {
            req.result.nome = nome;
            req.result.categoria = categoria;

            let reqActualizacion = almacen.put(req.result);
            reqActualizacion.onsuccess = () => {
                mensaxe.textContent = `Se ha actualizado correctamente la base de datos`;
                console.log("Se ha actualizado correctamente la base de datos");
                rexistroLidoDiv.innerHTML = "";
            };
        }
    };
}