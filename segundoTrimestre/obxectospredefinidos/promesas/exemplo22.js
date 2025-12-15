function tarefa(nome, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.1; //Simulamos que hay un 10% de fallos
      if (exito) {
        resolve(`${nome} rematou en ${tempo} segundos`);
      } else {
        reject(`Erro na tarefa: ${nome}`);
      }
    }, tempo * 1000);
  });
}

//Uso de ASYNC/AWAIT con PROMISE.ALL

async function executarTarefasEnParalelo() {
  try {
    console.log("Iniciando tarefas...");
    const [resultado1, resultado2, resultado3] = await Promise.all([
      tarefa("Tarefa 1", Math.floor(Math.random() * 6) + 3), //Tempo aleatorio entre 3 e 8 segundos
      tarefa("Tarefa 2", Math.floor(Math.random() * 6) + 3),
      tarefa("Tarefa 3", Math.floor(Math.random() * 6) + 3),
    ]);

    console.log(resultado1)
    console.log(resultado2)
    console.log(resultado3)
  } catch (erro) {
    console.error(erro);
  }
}

executarTarefasEnParalelo();
