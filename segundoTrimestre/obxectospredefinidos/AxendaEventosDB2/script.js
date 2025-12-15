// O teu Nome e Apelidos, e o nome do equipo empregado.

// VARIABLES DO DOM
let dataEventoInput = document.getElementById('data-evento');
let nomeEventoInput = document.getElementById('nome-evento');
let listaEventosUl = document.getElementById('lista-eventos');


// -----------------------------------------------------------------------------
// CONSTANTES DE INDEXEDDB
// -----------------------------------------------------------------------------
const NOME_DB = 'AxendaDB';
const VERSION_DB = 1;
const ALMACEN = 'eventos';
const NOME_INDEX_DATA = 'dataIndex'; // Índice que usamos para ordenar/filtrar

// Variábel para a instancia da base de datos
let db;

// -----------------------------------------------------------------------------
// FUNCIÓNS DE INDEXEDDB: OPEN, UPGRADE, TRANSACTION
// -----------------------------------------------------------------------------

/**
 * Abre a base de datos IndexedDB. Xestiona onsuccess e onupgradeneeded.
 * Unha vez aberta, renderiza a vista inicial.
 */
function abrirDB() {
    // IndexedDB: open
    const solicitude = indexedDB.open(NOME_DB, VERSION_DB);

    // IndexedDB: onupgradeneeded
    solicitude.onupgradeneeded = () => {
        console.log("[IndexedDB] Actualización ou creación da DB.");
        db = solicitude.result;
        // Creamos a tenda de obxectos (objectStore)
        if (!db.objectStoreNames.contains(ALMACEN)) {
            const objectStore = db.createObjectStore(ALMACEN, { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex(NOME_INDEX_DATA, 'dataObj', { unique: false });
        }
    };

    // IndexedDB: onsuccess
    solicitude.onsuccess = () => {
        db = solicitude.result;
        console.log("[IndexedDB] Base de datos aberta con éxito.");
        // Unha vez aberta a base de datos, cargamos e mostramos todos os eventos
        filtrarEventos('todos');
    };

    // Xestión de Errores
    solicitude.onerror = () => {
        console.error("[IndexedDB] Erro ao abrir a base de datos:", solicitude.error);
        alert("Erro fatal ao abrir a base de datos. Consulte a consola.");
    };
}


// -----------------------------------------------------------------------------
// FUNCIÓNS CRUD DE INDEXEDDB
// -----------------------------------------------------------------------------

/**
 * Elimina un evento usando o seu ID.
 * @param {number} id - O ID do evento.
 */
function eliminarEvento(id) {
    if (confirm("Seguro que queres eliminar este evento?")) {
        try {
            const tx = db.transaction([ALMACEN], 'readwrite');
            const store = tx.objectStore(ALMACEN);

            // IndexedDB: delete
            const solicitude = store.delete(id);

            solicitude.onerror = () => {
                console.error("Erro ao eliminar evento:", solicitude.error);
            };

            tx.oncomplete = function () {
                // Renderizar a vista despois de completar a transacción
                filtrarEventos('todos');
            };
        } catch (error) {
            console.error("Erro na transacción ao eliminar evento:", error);
        }
    }
}

// Función para engadir un novo evento
function engadirEvento() {
    let dataStr = dataEventoInput.value;
    let nomeStr = nomeEventoInput.value.trim();

    if (!dataStr || !nomeStr) {
        alert("Data e nome son obrigatorios.");
        return;
    }

    const novoEvento = {
        data: dataStr,
        // Usamos o obxecto Date para o filtrado de IndexedDB
        dataObj: new Date(dataStr + 'T00:00:00'),
        nome: nomeStr
    };

    try {
        const tx = db.transaction([ALMACEN], 'readwrite');
        const store = tx.objectStore(ALMACEN);

        // IndexedDB: add
        const solicitude = store.add(novoEvento);

        solicitude.onerror = () => {
            console.error("Erro ao engadir evento:", solicitude.error);
            // Eliminamos a alerta de duplicidade do nome
        };

        tx.oncomplete = function () {
            filtrarEventos('todos');
        };
    } catch (error) {
        console.error("Erro na transacción ao engadir evento:", error);
    }

    // Limpar o formulario
    nomeEventoInput.value = '';
    nomeEventoInput.focus();
}

// Función para editar un evento: carga os datos no formulario (basicamente o GET)
function editarEvento(id) {
    try {
        const tx = db.transaction([ALMACEN], 'readonly');
        const store = tx.objectStore(ALMACEN);
        const solicitude = store.get(id); // IndexedDB: get

        solicitude.onsuccess = () => {
            const eventoAEditar = solicitude.result;
            if (eventoAEditar) {
                dataEventoInput.value = eventoAEditar.data;
                nomeEventoInput.value = eventoAEditar.nome;

                // Gardamos o ID no formulario usando atributo HTML5 data-edit-id
                nomeEventoInput.setAttribute('data-edit-id', eventoAEditar.id);

                // Cambiamos a función do botón Engadir a Actualizar
                const btnEngadir = document.getElementById('btn-engadir');
                btnEngadir.textContent = 'Actualizar Evento';
                btnEngadir.onclick = actualizarEventoDesdeFormulario;

                nomeEventoInput.focus();
            }
        };

        solicitude.onerror = () => {
            console.error("Erro ao obter evento para edición:", solicitude.error);
        };
    } catch (error) {
        console.error("Erro na transacción de obter evento:", error);
    }
}

// Función para xestionar a actualización (PUT) despois da edición
function actualizarEventoDesdeFormulario() {
    // Obtemos o id usando getAttribute en vez de dataset
    const id = Number(nomeEventoInput.getAttribute('data-edit-id'));
    let dataStr = dataEventoInput.value;
    let nomeStr = nomeEventoInput.value.trim();

    if (!id || !dataStr || !nomeStr) return;

    const eventoActualizado = {
        id: id,
        data: dataStr,
        dataObj: new Date(dataStr + 'T00:00:00'),
        nome: nomeStr
    };

    // IndexedDB: put
    try {
        const tx = db.transaction([ALMACEN], 'readwrite');
        const store = tx.objectStore(ALMACEN);
        const solicitude = store.put(eventoActualizado);

        solicitude.onerror = () => {
            console.error("Erro ao actualizar evento:", solicitude.error);
            // Eliminamos a alerta de duplicidade do nome
        };

        tx.oncomplete = function () {
            // Restaurar a interface
            nomeEventoInput.removeAttribute('data-edit-id');
            const btnEngadir = document.getElementById('btn-engadir');
            btnEngadir.textContent = 'Engadir Evento';
            btnEngadir.onclick = engadirEvento; // Asignamos de novo a función orixinal
            dataEventoInput.value = '';
            nomeEventoInput.value = '';
            filtrarEventos('todos');

        };
    } catch (error) {
        console.error("Erro na transacción de actualizar evento:", error);
    }
}


// -----------------------------------------------------------------------------
// FUNCIÓNS DE FILTRADO E RENDERIZADO (IndexedDB)
// -----------------------------------------------------------------------------

/**
 * Obtén e renderiza os eventos dentro dun rango de datas específico.
 * Usa o índice de data.
 * @param {string} rango - 'semana', 'mes', 'ano', 'todos'.
 */
function filtrarEventos(rango) {

    let hoxe = new Date();
    hoxe.setHours(0, 0, 0, 0);
    let dataLimite = new Date(hoxe); // Clonamos a data de hoxe

    // Calcula o límite superior
    if (rango === 'semana') {
        dataLimite.setDate(hoxe.getDate() + 7);
    } else if (rango === 'mes') {
        dataLimite.setMonth(hoxe.getMonth() + 1);
    } else if (rango === 'ano') {
        dataLimite.setFullYear(hoxe.getFullYear() + 1);
    } else if (rango === 'todos') {
        // Para "todos", establecemos un límite futuro moi afastado (100 anos)
        dataLimite.setFullYear(hoxe.getFullYear() + 100);
    }
    // IndexedDB: IDBKeyRange.bound para filtrar por data
    // Buscamos eventos que estean entre Hoxe (límite inferior inclusivo) e Data Límite (límite superior exclusivo)
    const rangoFiltro = IDBKeyRange.bound(hoxe, dataLimite, false, true);

    //let eventosFiltrados = []; // Array para gardar os eventos filtrados

    try {
        const tx = db.transaction([ALMACEN], 'readonly');
        const store = tx.objectStore(ALMACEN);
        // Obter o índice que creamos en onupgradeneeded
        const index = store.index(NOME_INDEX_DATA);

        // IndexedDB: openCursor (Permite iterar e filtrar usando o índice)
        const cursor = index.openCursor(rangoFiltro);

        // Limpar o contedor
        listaEventosUl.innerHTML = '';

        cursor.onsuccess = () => {
            const evento = cursor.result;
            if (evento) {
                // O cursor.value xa é o obxecto evento completo
                //eventosFiltrados.push(cursor.value);

                // Capturar o rexistro e o id nunha constante para os closures
                const registro = evento.value;
                const idRegistro = registro.id;

                // RENDERIZAMOS
                const dataFormatada = evento.value.dataObj.toLocaleDateString('gl-ES', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                let itemLista = document.createElement('li');
                itemLista.className = 'elemento-evento';

                let spanData = document.createElement('span');
                spanData.className = 'data';
                spanData.textContent = dataFormatada;

                let spanNome = document.createElement('span');
                spanNome.className = 'nome';
                spanNome.textContent = evento.value.nome;

                // Botóns (usan o ID de IndexedDB)
                let btnEditar = document.createElement('button');
                btnEditar.className = 'btn-editar';
                btnEditar.textContent = '✏️';
                // Función anónima (closure) para pasar o argumento
                btnEditar.addEventListener('click', () => editarEvento(idRegistro));   

                let btnEliminar = document.createElement('button');
                btnEliminar.className = 'btn-eliminar';
                btnEliminar.textContent = '✖';
                // Función anónima (closure) para pasar o argumento
                btnEliminar.addEventListener('click', () => eliminarEvento(idRegistro));

                itemLista.appendChild(spanData);
                itemLista.appendChild(spanNome);
                itemLista.appendChild(btnEditar);
                itemLista.appendChild(btnEliminar);
                listaEventosUl.appendChild(itemLista);
                
                //console.log("Evento ", idRegistro, " renderizado ")


                evento.continue();
            } 
            //else {
                // Fin da iteración, agora renderizamos
                //renderizarEventos(eventosFiltrados);
            //}
        };

        cursor.onerror = () => {
            console.error("Erro no cursor de filtrado:", cursor.error);
        };
    } catch (error) {
        console.error("Erro na transacción ao renderizar:", error);
    }
}


// -----------------------------------------------------------------------------
// INICIO DA APLICACIÓN E ASIGNACIÓN DE FILTROS
// -----------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // 1. Abrir a base de datos
    abrirDB();

    // 2. Asignar funcións aos botóns (asumo que existen no HTML)

    // Botón de Engadir
    document.getElementById('btn-engadir').onclick = engadirEvento;

    // Botóns de Filtrado
    document.getElementById('btn-semana').onclick = () => filtrarEventos('semana');
    document.getElementById('btn-mes').onclick = () => filtrarEventos('mes');
    document.getElementById('btn-ano').onclick = () => filtrarEventos('ano');
    document.getElementById('btn-todos').onclick = () => filtrarEventos('todos');
    // Xestión da tecla Enter no input do nome
    document.getElementById("nome-evento").addEventListener('keypress', (tecla) => {
        if (tecla.key === 'Enter') {
            const btnEngadir = document.getElementById('btn-engadir');
            if (btnEngadir.textContent === 'Actualizar Evento') {
                actualizarEventoDesdeFormulario();
            } else {
                engadirEvento();
            }
        }
    });
});



