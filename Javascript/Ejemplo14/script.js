let matriz = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];

for (let i=0; i<matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Eemento en (${i}, ${j}): ${matriz[i][j]}`)
    }
}


for (let k in matriz) {
    for (let l in matriz[k]) {
        console.log("Elemento ["+k+"]["+l+"] = "+matriz[k][l])
    }
}

for (let m of matriz) {
    for (let n of m) {
        console.log(n);
    }
}


console.log("\n\nbreak, saida do bucle: \n");
let i=1
while (i<10) {
    break;
}
console.log(i*2);
i++;

console.log("\n\Bucle anidado: taboa de multiplicar dos primeiros nove numeros naturais: \n")
for(let i=1; i<=9; i++) {
    let fila=""
    for (let j=1; j<=10; j++) {
        fila+=i*j+"\t"
    }
    console.log(fila+"\n")
}