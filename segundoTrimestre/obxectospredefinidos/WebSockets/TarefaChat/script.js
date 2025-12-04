let estado=document.getElementById("estado")
let logs=document.getElementById("log-mensaxes")
let input=document.getElementById("input-mensaxe")

const socketCliente = new WebSocket("ws://localhost:8085");
socketCliente.addEventListener("open", () => {
  console.log("Conectado ao servidor.");
  alert("[open] Conexion establecida")
  socketCliente.send("Ola, Servidor!");
});

function enviarMensaxe() {
  socketCliente.addEventListener("message", (mensaxe) => {
  console.log("O servidor enviou a seguinte mensaxe: " + mensaxe.data);
});
}

function xestionarConexion() {
    socketCliente.onclick=function(evento) {
    if (evento.wasClean) {
        alert(`[close] Conexion cerrada limpamente, código=${evento.code} motivo=${evento.reason}`)
    } else {
        alert(`[close] A conexion caeuse inesperadamente`)
    }
}
}