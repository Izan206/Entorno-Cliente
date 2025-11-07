// Extraemos as referencias aos campos de input do formulario e ao propio formulario
// "document" sempre fai referencia á árbore DOM do documento HTML
// Mediante getElementById obtemos unha referencia ao elemento DOM correspondente con ese id
var nome = document.getElementById('nome');
var apelidos = document.getElementById('apelidos');
var idade = document.getElementById('idade');
var formulario = document.getElementById('formulario');

// Esta función outorga funcionalidade ao botón GARDAR
function gardar() {
    // Extraemos os valores dos tres inputs
    let valorNome = nome.value;
    let valorApelidos = apelidos.value;
    let valorIdade = idade.value;

    // Construímos un obxecto de tipo persoa empregando os valores extraídos do formulario
    persoa = {
        nome: valorNome,
        apelidos: valorApelidos,
        idade: valorIdade
    }

    console.log(persoa);
}

// Esta función outorga funcionalidade ao botón BORRAR
function borrar() {
    formulario.reset();
}

// Esta función outorga funcionalidade ao botón ENCHER
function encher() {
    nome.value = "Pepiño";
    apelidos.value = "Leirachá Pereira";
    idade.value = 32;
}