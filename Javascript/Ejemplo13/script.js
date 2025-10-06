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

for (let persona of personas) {
    console.log(`${persona.nome} ten ${persona.edad} anos e vive en ${persona.cidade}`)
}

let texto="Hola mundo soy Izan"

for (let c of texto) {
    console.log(c)
}

let colores = new Set(["Azul", "Rojo", "Amarillo"]);

for (let color of colores) {
    console.log(color)
}

let edades = new Map([
    ["Ana", 21],
    ["Pepe", 32],
    ["Juan", 16]
])

for (let [nombre, edad] of edades) {
    console.log(nombre, edad)
}