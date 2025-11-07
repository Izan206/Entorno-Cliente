var persoa = {
    nome: "Uxía",
    apelidos: "Pereira Seivane",
    idade: 30,
    altura: 165,
    peso: 60,  
    cidade: "Santiago de Compostela",
  };
  
  // Acceso mediante o operador .
  console.log(persoa.nome+" "+persoa.apelidos);
  
  // Acesso mediante o operador asociativo []
  console.log("Idade: "+persoa['idade']+" anos");
  
  // Extraemos as claves do obxecto persoa
  var clavesPersoa = Object.keys(persoa);
  console.log(clavesPersoa);
  
  // Percorremos todos os campos do obxecto de xeito asociativo usando o array de claves
  for(var clave of clavesPersoa) {
    console.log(clave+": "+persoa[clave]);
  }
  
  
  
  
  
  
  