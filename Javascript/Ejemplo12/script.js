const persona = {
    nome: 'Izan',
    edad: 19,
    cidade: 'A Coruña'
};

for (const propiedade in persona) {
    console.log(`Propiedade: ${propiedade}, Valor: ${persona[propiedade]}`)
}

const personas = [
    {
        nome: 'Pedro',
        edad: 20,
        cidade: 'Barcelona'
    },
    {
        nome: 'Nico',
        edad: 23,
        cidade: 'Ferrol'
    }
]

for (let i in personas) {
    console.log(`${personas[i].nome} ten ${personas[i].edad} anos e vive en ${personas[i].cidade}`)
}