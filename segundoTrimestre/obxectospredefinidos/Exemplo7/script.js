let btnCrear=document.getElementById("btnCrear")
let btnAmosar=document.getElementById("btnAmosar")
let btnBorrar=document.getElementById("btnBorrar")
let mensaxe=document.getElementById("mensaxe")

btnCrear.addEventListener("click", crear)
btnAmosar.addEventListener("click", amosar)
btnBorrar.addEventListener("click", eliminar)

function crear() {
    let dataHoy=new Date()
    dataHoy.setHours(dataHoy.getHours()+2);
    let dataExpiracion=dataHoy.toUTCString()
    document.cookie="username=Izan; expires="+dataExpiracion+"; path=/"
}

function amosar() {
    let obtenerCookie=document.cookie
    mensaxe.textContent=obtenerCookie
    //usar replace o split
}

function eliminar() {
    document.cookie="username=; max-age=0; path=/";
    amosar()
}
