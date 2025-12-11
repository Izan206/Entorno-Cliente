let promesa=new Promise((resolve, reject) => {
    let resultado=Math.round(Math.random());

    if (resultado) {
        resolve("Operacion correcta")
    } else {
        reject("Produciuse un erro na operacion")
    }
})