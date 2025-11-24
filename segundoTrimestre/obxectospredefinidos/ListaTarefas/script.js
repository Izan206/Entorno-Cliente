let entradaInput = document.getElementById("entrada-tarefa");
let tarefasHTML = document.getElementById("lista-tarefas");

function engadirTarefa() {
  let entradaStr = entradaInput.value;
  let valor = false;

  if (entradaStr == "") {
    return;
  }

  if (localStorage(entradaStr.value)) {
    return alert("A tarefa xa existe!") //Comprueba si existe la tarea en el local storage
  }
  localStorage.setItem(entradaStr, valor);
  entradaInput.value = "";
  renderizarTarefa();
}

function renderizarTarefa() {
  let listaDesordenada = [];

  for (let i = 0; i < localStorage.length; i++) {
    let nomeGuardado = localStorage.key(i);
    let valorGuardado = localStorage.getItem(nomeGuardado);
    
    let tarefa = {
        nome: nomeGuardado,
        completada: (valorGuardado==="true")
    };

    listaDesordenada.push(tarefa);
  }

  let listaOrdenada=listaDesordenada.sort((a, b) => a.nome.localeCompare(b.nome))

  let elementoHTML = listaOrdenada.map((elemento) => {
    let clase = elemento.completada
      ? "elemento-tarefa completada"
      : "elemento-tarefa";
      
    return `
            <li class="${clase}">
                <span>${elemento.nome}</span>
                <div class="contedor-btns">
                    <button class="btn-completar" onclick="completarTarefa('${elemento.nome}')">✔</button>
                    <button class="btn-eliminar" onclick="eliminarTarefa('${elemento.nome}')">✖</button>
                </div>
            </li>
        `;
  });

  tarefasHTML.innerHTML = elementoHTML.join("");
}

function eliminarTarefa(nome) {
  localStorage.removeItem(nome);
  renderizarTarefa();
}

function completarTarefa(nome) {
  let estadoActual = localStorage.getItem(nome) === "true"
  localStorage.setItem(nome, !estadoActual)
  renderizarTarefa();
}

//IMPORTANTES
document.addEventListener('DOMContentLoaded', () => {
  renderizarTarefa();
})

document.getElementById("entrada-tarefa").addEventListener('keypress', (tecla) => {
  if (tecla.key==="Enter") {
    engadirTarefa()
  }
})

// RESTRICCIONES DE USO
