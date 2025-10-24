let entradaInput = document.getElementById("entrada-tarefa");
let listaTarefasInput = document.getElementById("lista-tarefas");

let tarefas = [];

function engadirTarefa() {
  let entradaStr = entradaInput.value;
  let data = new Date();
  let dataStr = data.toDateString();
  let tarefa = {
    entradaStr: entradaObj,
    dataStr: dataObk,
  };

  tarefas.push(tarefa);
  renderizarTarefa();
}

function renderizarTarefa() {}
