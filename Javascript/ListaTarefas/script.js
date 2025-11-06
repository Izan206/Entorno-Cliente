let entradaInput = document.getElementById("entrada-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");

let tarefas = [];

function engadirTarefa() {
  let entradaStr = entradaInput.value;
  let data = new Date();
  let dataStr = data.toDateString();
  let tarefa = {
    id: dataStr,
    entrada: entradaStr,
    completada: false,
  };

  tarefas.push(tarefa);
  renderizarTarefa();
}

function renderizarTarefa() {
  listaTarefas.innerHTML = "";
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.className = "elemento-tarefa";
    if (tarefa.completada == true) {
      li.classList.add("completada");
    }

    li.innerHTML = ` 
                <span>${tarefa.entrada}</span>
                <div class="contedor-btns">
                    <button class="btn-completar" onclick="completarTarefa(${index})">✔</button>
                    <button class="btn-eliminar" onclick="eliminarTarefa(${index})">✖</button>
                </div>
    `;
    listaTarefas.appendChild(li);
  });
}

function eliminarTarefa(index) {
  tarefas.splice(index);
  renderizarTarefa();
}

function completarTarefa(index) {
  for (let tarefa of tarefas) {
    if (tarefas[index] == tarefa) {
      tarefa.completada = true;
    }
  }
  renderizarTarefa();
}
