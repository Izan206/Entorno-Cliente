const WebSocket = require("ws");
const PORT=8082
const servidorWS = new WebSocket.Server({
 port: PORT
});
console.log(`Servidor WEB SOCKET iniciado no porto ${PORT}`)
// Nesta liña "ws" fai referencia a cada conexión particular
servidorWS.on("connection", socketServidor => {
 console.log("Conectouse un cliente.")
 // Nesta función realízase un intercambio de mensaxes entre cliente e servidor.
 socketServidor.on("message", mensaxe => {
 // Recibimos a mensaxe do cliente.
 console.log("O cliente enviou a seguinte mensaxe: "+mensaxe)
 // Enviamos unha mensaxe ao cliente.
 socketServidor.send("Ola, Cliente!");
 });
 // Nesta liña indicamos o código a executar cando a conexión pecha dende o lado do cliente.
 socketServidor.on("close", () => {
 console.log("O cliente desconectou.")
 });
});