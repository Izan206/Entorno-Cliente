const numero = Math.floor(Math.random() * 100) + 1;
let intentos=0;


function comprobarSuposicion() {
    const xogada=Number(document.getElementById("xogada").value);
    const mensaxe=document.getElementById("mensaxe");

    intentos++;
    mensaxe.className=""
    if (xogada<1 || xogada>100) {
        mensaxe.textContent="O numero ten que estar entre 1 e 100";
        mensaxe.classList.add("error");
    } else if (xogada==numero) {
        mensaxe.textContent=`Felicidades! O numero era ${numero} e has acertado en ${intentos} intento(s)`
        mensaxe.classList.add("acierto");
    } else if (xogada>numero) {
        mensaxe.textContent=`O numero e maior, levas ${intentos} intento(s)`
        mensaxe.classList.add("fallo");
    } else {
        mensaxe.textContent=`O numero e menor, levas ${intentos} intento(s)`
        mensaxe.classList.add("fallo");
    }
}
