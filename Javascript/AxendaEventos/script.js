let dataEventoInput=document.getElementById("data");
let nomeEventoInput=document.getElementById("nome-evento");
let mensajeInput=document.getElementById("mensaje");

let agendaEventos=[];

function gardarEvento() {
    let dataEvento=new Date(dataEventoInput.value);
    let nomeEventoStr=nomeEventoInput.value;
    let dataActual=new Date();

    let listaEventos=document.getElementById("listaEventos")
    

    if (dataEvento=="" || nomeEventoStr=="") {
        alert("No puedes dejar ningun campo vacío")
    }

    else if (dataEvento<dataActual) {
        mensajeInput.textContent="La fecha debe ser posterior a la actual"
    }

    else {
        agendaEventos.append(listaEventos)
        listaEventos.textContent="hola"
    }

}