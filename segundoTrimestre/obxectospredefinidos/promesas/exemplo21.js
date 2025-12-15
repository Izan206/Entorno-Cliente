//FUncion auxiliar para simular obtencion de datos con demora aleatoria
function obterDatos(tempoEspera) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Tarefa completada en ${tempoEspera} segundos`);
    }, tempoEspera * 1000);
  });
}

//Funcion que establece un limite de tempo para a promesa
function limitarTempo(promesa, limiteSegundos) {
  let timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(`A tarefa superou o límite de ${limiteSegundos}`);
    }, limiteSegundos * 1000);
  });

  return Promise.race([promesa, timeout]);
}

//Funcion principal con async/await e control do tempo
async function executarTarefas() {
  try {
    console.log("Iniciando tarefas...");

    const resultado1 = await limitarTempo(obterDatos(3), 5);
    console.log("Paso1: ", resultado1);

    const resultado2 = await limitarTempo(obterDatos(4), 5);
    console.log("Paso 2: ", resultado2);

    const resultado3 = await limitarTempo(obterDatos(6), 5); //Esta tarefa vai fallar por exceso de tempo
    console.log("Paso 3: ", resultado3);

    console.log("Todas as tarefas rematadas");
  } catch (erro) {
    console.error(erro);
  }
}

executarTarefas()
