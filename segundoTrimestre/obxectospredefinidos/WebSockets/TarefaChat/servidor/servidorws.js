const WebSocket = require("ws");
const PORT = 8085;

const servidorWS = new WebSocket.Server({ port: PORT });

console.log(`Servidor WEB SOCKET iniciado no porto ${PORT}`);

servidorWS.on("connection", socketServidor => {
    console.log("Conectouse un cliente.");

    socketServidor.send("SERVIDOR: Conexion establecida con exito: Envia unha mensaxe");

    socketServidor.on("message", mensaxe => {
        const texto = mensaxe.toString();
        const hora = new Date().toLocaleTimeString();

        console.log("O cliente enviou: " + texto);
        socketServidor.send(`[ECO ${hora}] Recibin: '${texto}'`);
    });

    socketServidor.on("close", () => {
        console.log("O cliente desconectou.");
    });
});