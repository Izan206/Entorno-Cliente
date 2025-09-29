console.log("Combinando arrays")
let compra1 = ["Pan", "Leche", "Fruta", "Cereales"] //array recomendable usar const
let compra2 = ["Agua", "Zumo"]
let compraTotal=[...compra1,...compra2]
console.table(compraTotal)

//Copia de Compra Total
let compraCombinada=[...compraTotal]

compraCombinada.push("Vegetales")
console.table(compraCombinada)

let persona1={ //obxeto
    id1: 1,
    nombre1: "Izan",
    apelido1: "Alvarez",
} 
let persona2={ //obxeto
    id2: 2,
    nombre2: "Axel",
    apelido2: "Cartaya",
} 
let persona3={ //obxeto
    id3: 3,
    nombre3: "Hugo",
    apelido3: "Rey",
} 

let personasCombinadas={
    ...persona1,...persona2,...persona3
}

console.table(personasCombinadas);

const persona4={
    ...persona1
}
persona4.id1=4
console.table(persona4)
