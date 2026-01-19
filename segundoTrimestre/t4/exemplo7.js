let persoa = {
    nome: "Marcos",
    idade: 24,
    saudar : function () {
        console.log("Hola son "+this.nome+" teño "+this.idade+" anos")
    }
}

const outraPersoa={
    nome: "Adrián",
    idade: 22
}

persoa.saudar()
// outraPersoa.saudar() ERROR
persoa.saudar.call(outraPersoa)

const datos=["Lucas", 22]
persoa.saudar.apply(outraPersoa, datos)
persoa.saudar.call(outraPersoa)