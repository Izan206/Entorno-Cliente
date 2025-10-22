let dataEventoInput=document.getElementById("data");
let nomeEventoInput=document.getElementById("nome-evento");
let mensajeInput=document.getElementById("mensaje");
let listaEventos=document.getElementById("listaEventos")

let agendaEventos=[];

function gardarEvento() {
    //Obtengo los valores del formulario
    let dataEventoStr=dataEventoInput.value;
    let nomeEventoStr=nomeEventoInput.value.trim();

    //COnvierto la fecha a tipo Date
    let dataEvento=new Date(dataEventoStr);
    dataEvento.setHours(0,0,0,0) //Para no guardar ni horas ni minutos ni segundos
    let dataActual=new Date();
    dataActual.setHours(0,0,0,0)

    if (dataEventoStr === ""|| dataEvento<dataActual) {
        mensajeInput.textContent="Debes introducir una fecha valida y no anterior a la actual"
        return;
    }

    if (nomeEventoStr==="") {
        mensajeInput.textContent="El evento debe tener un nombre"
        return;
    }

    agendaEventos.push({
        data: dataEventoStr,
        nome: nomeEventoStr
    })
}

function renderizarEventos() {
    listaEventos.innerHTML="";
    for (const evento of agendaEventos) {
        const li=document.createElement("li");
        li.textContent=`${evento.data} - ${evento.nome}`
        listaEventos.appendChild(li)
    }
}

function filtrarEventos(filtro) {
    let hoxe=new Date();
    if (filtro==="todo") {
        renderizarEventos();
    }

    if (filtro==="anhoSiguiente") {
        for (const evento of agendaEventos) {
            let fechaEvento=new Date(evento.data).getFullYear();
            let fechaLimite=fechaEvento+1;
            if (hoxe<fechaLimite) {
                renderizarEventos();
            }
            
        }
    }
}