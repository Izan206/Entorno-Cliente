let saudar1=(nome1, nome2) => {return `Ola, ${nome1} e ${nome2}! Benvidos`}
console.log(saudar1("Izan", "Hugo"))

let saudar2=(nome1, nome2) => `Ola, ${nome1} e ${nome2}! Benvidos`
console.log(saudar2("Izan", "Hugo"))

let cadrada=(num) => num**2
console.log(cadrada(4))

let numeros=[1, 2, 3, 4, 5]
let triple=numeros.map((num) => num*3) 
console.log(triple)

let pares = numeros.filter((num) => num%2==0)
console.log(pares)

let sumaTotalConReduce=numeros.reduce((final, num) => final+num)
console.log(sumaTotalConReduce)


let primerPar=numeros.find((num) => num%2==0)
console.log(primerPar)

numeros.forEach((n)=>console.log("Numero: "+n));

//Cando devolvemos un obxecto necesitamos parenteses para evitar ambiguedad
const crearPersoa=(nome, idade) => ({nome, idade});
console.log("Nova persoa: ", crearPersoa("Carlos", 30));

function ContadorFunction() {
    this.valor=0
    setInterval(function(){
        this.valor++; //this NON fai referencia a ContadorFunction
        console.log("Valor(function): "+this.valor);
    }, 1000);
}


function ContadorArrow() {
    this.valor=0;
    setInterval(()=> {
        this.valor++; //this SI fai referencia a ContadorArrow grazas a frecha
        console.log("Valor (arrow): "+this.valor);
    })
}

let cont1=new ContadorFunction();
let cont2=new ContadorArrow();


//Descomenta para probar no navegador ou Node.js