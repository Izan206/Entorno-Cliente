let promesa=new Promise((resolve, reject) => {
    let resultado=Math.round(Math.random());
    console.log("resultado da operacion: ", resultado)
    if (resultado) {
        resolve("Operacion correcta")
    } else {
        reject("Produciuse un erro na operacion")
    }
})

promesa
    .then((mensaxe) => { //mensaxe pode ser calquera tipo de obxecto ou dato
    console.log("Éxito: ", mensaxe)
})
    .catch((erro) => { //Erro pode ser calquera tipo de obxecto ou dato, pero deberia ser un obxecto Error
    console.log("Erro: ", erro)
})