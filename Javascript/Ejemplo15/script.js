var fraseOrixinal="O obxecto String é fundamental en JavaScript";
console.log("Frase original: ", fraseOrixinal)

let longitud=fraseOrixinal.length;
console.log("Longitud: ",longitud);

//Las dos formas de hacerlo son validas
let primeraLetra=fraseOrixinal.charAt(0);
let quintaLetra=fraseOrixinal[5];
console.log("Caracter en la primera posicion con charAt(): ",primeraLetra)
console.log("Caracter en la posicion 5 tratandolo como array: ",quintaLetra)

let posicionPalabra=fraseOrixinal.indexOf("JavaScript");
console.log("Estaba en la posicion ",posicionPalabra)

let apareceEnPalabra=fraseOrixinal.includes("fundamental")
console.log("Aparece en la palabra? ", apareceEnPalabra)

let subCadena=fraseOrixinal.slice(2, 10)
console.log("Subcadena: ", subCadena.toUpperCase())

let cadenaConEspazos="   \n Hola   "
let cadenaLimpia=cadenaConEspazos.trim();
console.log(cadenaLimpia)

let fraseSubstituida=fraseOrixinal.replace("obxecto", "tipo de dato");
console.log("La frase substituida queda: "+fraseSubstituida)

let palabras=fraseOrixinal.split(" ");
console.log("Frase orixinal ten ",palabras.length," palabras")
