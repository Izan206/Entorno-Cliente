function facerTarefa(nome) {
    return new Promise((resolve, reject) => {
        let resultado=Math.floor(Math.random()*8);
        let tempoEspera=resultado*1000;
        console.log("Nome vai durar ",tempoEspera,"milisegundos")
        setTimeout(() => {
            if (resultado===0 || resultado ===7) {
                reject("Error")
            } else {
                resolve("Operacion correcta na tarefa ",nome)
            }
        }, tempoEspera)
        console.log("resultado da operacion: ", resultado)

        // if (resultado) {
        //     resolve("Operacion correcta na tarefa ",nome)
        // } else {
        //     reject("Error na tarefa ",nome)
        // }
    })
}

facerTarefa("Tarefa1")
    .then((resultado1) => {
        console.log(resultado1);
        return facerTarefa("Tarefa2")
    })
    .then((resultado2) => {
        console.log(resultado2)
        return facerTarefa("Tarefa3")
    })
    .then((resultado3) => {
        console.log(resultado3)
    })
    .catch((erro) => {
        console.error("Error: ", erro)
    })