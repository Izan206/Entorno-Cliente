// Créase unha nova conexión ao servidor a través dun WebSocket
const socketCliente = new WebSocket("ws://localhost:8082");
// Esta liña execútase cada vez que se produce o evento de conexión a un servidor.
socketCliente.addEventListener("open", () => {
  console.log("Conectado ao servidor.");
  alert("[open] Conexion establecida")
  // Enviamos unha mensaxe ao servidor.
  socketCliente.send("Ola, Servidor!");
});
// Nesta función recibimos mensaxes do servidor.
socketCliente.addEventListener("message", (mensaxe) => {
  console.log("O servidor enviou a seguinte mensaxe: " + mensaxe.data);
});

//Xestion de peche da conexion
socketCliente.addEventListener("close", (evento) => {
    if (evento.wasClean) {
        alert(`[close] Conexion cerrada limpamente, código=${evento.code} motivo=${evento.reason}`)
    } else {
        alert(`[close] A conexion caeuse inesperadamente`)
    }
})

socketCliente.onerror = function() {
    alert(`[error] Erro na conexion`)
}
