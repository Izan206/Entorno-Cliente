const novaBD = window.indexedDB;
let btnCrear = document.getElementById("btnCrear");
let btnInsertar=document.getElementById("btnInsertar");
let mensaxe = document.getElementById("mensaxe");
let db;
let temporizador;
btnCrear.addEventListener("click", crearBase);
btnInsertar.addEventListener("click", insertarValor);

function crearBase() {
    let solicitude = novaBD.open("videoxogos_db", 1);

    solicitude.onerror = () => {
        console.error("Non se puido abrir a base de datos");
    }

    solicitude.onsuccess = (evento) => {
        db = evento.target.result;
        mensaxe.textContent = "Base de datos aberta correctamente";
        console.log("Base de datos aberta correctamente");
        iniciarTemporizadorPechado()
    };

    solicitude.onupgradeneeded = (evento) => {
        db = evento.target.result;

        if (!db.objectStoreNames.contains("videoxogos")) {
            let almacen = db.createObjectStore("videoxogos", { keyPath: "id" });
            almacen.createIndex("nomeIndice", "nome", { unique: false });
            almacen.createIndex("categoriaIndice", "categoria", {unique: false})

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
        mensaxe.textContent="A BD non esta aberta. Premo primeiro 'Crear/Abrir BD'"
    }

    let nome=document.getElementById("nome").value.trim()
    let categoria=document.getElementById("categoria").value.trim()

    if (!nome || !categoria) {
        alert("Debes introducir nombre y categoria")
        return;
    }

    let txLectura=db.transaction("videoxogos", "readonly")
    let almacen=txLectura.objectStore("videoxogos")
    let reqContar=almacen.count()
    
    reqContar.onsuccess = () => {
        let novoID=reqContar.result+1

        let txInsercion=db.transaction("videoxogos", "readwrite")
        let almacenInsercion=txInsercion.objectStore("videoxogos")

        let videoxogo = {
            id: novoID,
            nome: nome,
            categoria: categoria
        }

        let reqInsercion=almacenInsercion.add(videoxogo)
        reqInsercion.onsuccess = () => {
            console.log("Videoxogo creado: ",videoxogo)
            mensaxe.textContent=`Videoxogo ${nome} inserido`
            iniciarTemporizadorPechado()
        }

        reqInsercion.onerror=()=> {
            console.log("Erro ao inserir o videoxogo")
            mensaxe.textContent="Error ao inserir o rexistro"
        }

    }
}

function iniciarTemporizadorPechado() {
    if (temporizador) {
        clearInterval(temporizador)
    }

    let tempoRestante=10

    temporizador = setInterval(() => {
        console.log(`A base de datos pecharase en ${tempoRestante} segundos...`)
        tempoRestante--;

        if (tempoRestante<0) {
            clearInterval(temporizador);
            if(db) {
                db.close()
                db=null
                mensaxe.textContent="Base de datos pechada tras 10 segundos de inactividade"
                console.log("Base de datos pechada")
            }
        }
    }, 1000)
}
