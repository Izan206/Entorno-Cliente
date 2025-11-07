// Definimos un array de obxectos de tipo persoa
var persoas = [
    { nome: 'Pepe', idade: 45},
    { nome: 'Lucía', idade: 23},
    { nome: 'Xosé', idade: 18},
    { nome: 'Xoana', idade: 66},
    { nome: 'Xián', idade: 32},
    { nome: 'Antía', idade: 27},
    { nome: 'Alfonso', idade: 26},
    { nome: 'Marta', idade: 41},
    { nome: 'Marcos', idade: 21}  
  ];
  
  // Chamamos a sort e pasámoslle como parámetro unha función que determina como se ordenan obxectos polo campo nome
  persoas.sort(function(a,b) {
    if (a.nome < b.nome) {
      return -1; // Se a é alfabeticamente anterior a b
    }
    
    if (a.nome > b.nome) {
      return 1; // Se b é alfabeticamente anterior a a
    }
    
    return 0; // Se son iguais
  });
  
  console.log(persoas);
  
  // Chamamos a sort e pasámoslle como parámetro unha función que determina como se ordenan obxectos polo campo nome
  persoas.sort(function(a,b) {
    return a.idade-b.idade;
  });
  
  console.log(persoas);
  