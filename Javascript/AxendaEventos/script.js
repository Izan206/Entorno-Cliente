let dataEventoInput=document.getElementById("data");
let nomeEventoInput=document.getElementById("nome-evento");
let mensajeInput=document.getElementById("mensaje");

let agendaEventos=[];

function gardarEvento() {
    dataEventoStr=dataEventoInput.value;
    nomeEventoStr=nomeEventoInput.value;
    mensajeStr=mensajeInput.value;
    dataActual=new Date();

    if (dataEventoStr=="" || nomeEventoStr=="") {
        console.alert("No puedes dejar ningun campo vacío")
    }

    else if (dataEventoStr<dataActual) {
        mensajeStr.textContent="La fecha debe ser posterior a la actual"
    }

    


}