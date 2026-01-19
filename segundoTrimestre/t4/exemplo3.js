"use strict";
try {
  const User = {
    nome: "Brais",
    idade: 24,
    enderezo: {
      rua: "Rúa Caballeros",
      numero: 123,
      piso: 2,
      cidade: "A Coruña",
    },
    nacionalidade: "Española",
  };
  const usuario = Object.freeze(User); //Sella o obxecto para evitar modificaciones
  // usuario.idade=25 //Erro: Non se pode modificar unha propiedade dun obxecto conxelado
  usuario.enderezo.cidade = "Oleiros"; //o OBXECTO ANIDADO ENDEREZO SI se pode modificar, a no ser que ponga el "use strict" tambien al principio del enderezo
  // usuario.novaPropiedade="Valor" //Error: non se poden engadir novas propiedades
  console.log(usuario, usuario.enderezo);
} catch (e) {
  console.error("Erro capturado: " + e.message);
}


// IMPORTANTISIMO PAGINA 20/24
