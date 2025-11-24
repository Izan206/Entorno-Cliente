const novaBD = window.indexedDB;
let btn = document.getElementById("btn");
let mensaxe = document.getElementById("mensaxe");
let db;

btn.addEventListener("click", crearBase);

function crearBase() {
    let solicitude = novaBD.open("videoxogos_db", 1);

    solicitude.onerror = () => {
        console.error("Non se puido abrir a base de datos");
    }

    solicitude.onsuccess = (evento) => {
        db = evento.target.result;
        mensaxe.textContent = "Base de datos aberta correctamente";
        console.log("Base de datos aberta correctamente");
    };

    solicitude.onupgradeneeded = (evento) => {
        db = evento.target.result;

        if (!db.objectStoreNames.contains("videoxogos")) {
            let almacen = db.createObjectStore("videoxogos", { keyPath: "id" });
            almacen.createIndex("nomeIndice", "nome", { unique: false });

            console.log("Almacen 'videoxogos' creado");
            mensaxe.textContent = "Almacen videoxogos creado na BD";
        } else {
            console.log("Almacen videoxogos xa existente");
            mensaxe.textContent = "Almacen videoxogos xa existente";
        }
    };
}