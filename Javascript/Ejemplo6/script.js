//Tambien pueden caer preguntas de aqui


//Uso de type of
console.log("typeof 'Diego' -> ", typeof "Diego"); //String
console.log("typeof 3.14 -> ", typeof 3.14); //number
console.log("typeof NaN -> ", typeof NaN); //number IMPORTANTE
console.log("typeof true ->", typeof true); //bolean
console.log("typeof [1, 2, 3] -> ", typeof [1, 2, 3]); //object
console.log("typeof {nome: 'Diego'} -> ", typeof {nome: 'Diego'}); //object
console.log("typeof new date -> ", typeof {nome: 'Diego'})

//Conversion automatica de tipos

console.log("3+'4'->", 3 + '4'); //34 (string)
console.log("3+ 4 + '5' ->", 3+4 +'5'); //"75"


console.log("(3+4).toString()->", (3+4).toString()); //"7"
console.log("new Date().toString()->", new Date().toString());
console.log("true.toString()->", true.toString());
console.log("new String(3+4) ->", new String(3+4)); //"7"
console.log("new String(true) ->")

console.log("Number('3.14') ->", Number('3.14')) //3.14
console.log("Number(true)-> ", Number(true)); //1
console.log("Number(false)-> ", Number(false)); //0
console.log("Number(' ')-> ", Number(' ')); //0
console.log("Number(null) ->", Number(null)); //0

console.log("Number(undefined) ->", Number(undefined)); //MaM
console.log("parseInt()->", parseInt('3.14'));
console.log("parseInt('3.14')->", parseInt('3.14')); //3
console.log("parseFloat('3.14 xyz')->", parseFloat('3.14 xyz')); //3

console.log("Boolean(3.14) -> ", Boolean(3.14)) //true
console.log("Boolean(' ') -> ", Boolean(' ')) //false
console.log("Boolean(0) -> ", Boolean(0)) //false