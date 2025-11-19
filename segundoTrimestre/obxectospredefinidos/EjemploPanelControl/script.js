let navegador=document.getElementById("info-navegador")
let sistema_operativo=document.getElementById("info-so")
let urlActualDisplay=document.getElementById("url-actual")
let xeolocalizacion=document.getElementById("info-xeoloc")
let imaxePrincipal=document.getElementById("imaxe-principal")

let alto=innerHeight
let ancho=innerWidth

window.addEventListener("resize", () => escribirLocation())

function escribirLocation() {
    navegador.textContent = navigator.userAgent;
    sistema_operativo.textContent = navigator.platform;
    urlActualDisplay.textContent = location.pathname;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (posicion) => {
                const latitud = posicion.coords.latitude;
                const longitud = posicion.coords.longitude;
                xeolocalizacion.textContent = `${latitud}, ${longitud}`;
            },
            (error) => {
                console.error("Error de xeolocalización:", error);
            }
        );
    }
}

function navegarHistorial(direccion) {
    if (direccion === "atras") {
        history.back();
    } else if (direccion === "adiante") {
        history.forward();
    }
}

function mudarImaxe(idImaxe) {
    const urlNova = `imaxes/${idImaxe}`;
    imaxePrincipal.src = urlNova;

    history.pushState({imaxe: idImaxe, url: urlNova}, `Imaxe ${idImaxe}`, `?imaxe=${idImaxe}`);

    urlActualDisplay.textContent = location.href;
    console.log(`[HISTORY] Estado gardado: imaxe ${idImaxe}`);
}


window.addEventListener('popstate', (evento) => {
    if (evento.state && evento.state.imaxe) {
        imaxePrincipal.src = evento.state.url;
        urlActualDisplay.textContent = location.href;
        console.log(`[HISTORY] Restaurando estado a imaxe: ${evento.state.imaxe}`);
    } else if (location.search === "") {
        mudarImaxe('i1.png');
    }
});

function abrirFiestraAviso() {
    const fiestra = window.open("", "aviso", "width=300,height=200");
    fiestra.document.write("<h2>Aviso</h2><p>Esta fiestra pechará en 5 segundos</p>");
    setTimeout(() => fiestra.close(), 5000);
}

function actualizarTituloPestana() {
    const inputTitulo = document.getElementById("input-titulo");
    if (inputTitulo.value.trim() !== "") {
        document.title = inputTitulo.value;
    }
}