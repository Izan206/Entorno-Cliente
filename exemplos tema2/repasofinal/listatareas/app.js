let entradaInput = document.getElementById("entrada-tarefa");
let listaTarefasHTML = document.getElementById("lista-tarefas");

let tarefas = [];

function limpiarFormulario() {
  entradaInput.value = "";
}

function engadirTarefa() {
  let entrada = entradaInput.value;

  if (entrada === "") {
    return;
  }

  let tarefa = {
    nome: entrada,
    completada: false,
  };

  tarefas.push(tarefa);
  limpiarFormulario();
  renderizarTarefa();
}

function renderizarTarefa() {
  let elementoHTML = tarefas.map((elemento, index) => {
    let clase = elemento.completada
      ? "elemento-tarefa completada"
      : "elemento-tarefa";
    return ` 
            <li class="${clase}">
                <p>${elemento.nome}</p>
                <div class="contedor-btns">
                    <button class="btn-completar" onclick="completarTarefa(${index})">✔</button>
                    <button class="btn-eliminar" onclick="eliminarTarefa(${index})">✖</button>
                </div>
            </li>
        `;
  });

  listaTarefasHTML.innerHTML = elementoHTML.join("");
}

function completarTarefa(index) {
  let tarefa = tarefas[index];
  tarefa.completada = !tarefa.completada;
  renderizarTarefa();
}

function eliminarTarefa(index) {
  tarefas.splice(index, 1);
  renderizarTarefa();
}
