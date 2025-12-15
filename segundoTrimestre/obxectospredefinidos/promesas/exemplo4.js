function facerTarefa(nome) {
    return new Promise((resolve, reject) => {
        const tempoEspera=Math.floor
    })
}
//Competencia entre 3 tarefas paralelas
Promise.race([
    facerTarefa("Tarefa A"),
    facerTarefa("Tarefa B"),
    facerTarefa("Tarefa C")
])
    .then((resultado) => {
        console.log("Gañadora: "+resultado) //Mostra a primeira
    })
    .catch((erro) => {
        console.log("Fallo capturado")
        console.error(erro) //Mostra o primeiro erro (se a tarefa máis rapida)
    })