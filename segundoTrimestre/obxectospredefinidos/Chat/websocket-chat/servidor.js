// servidor.js - Servidor WebSocket con Node.js

// Requirimos a libraría ws para WebSockets
const WebSocket = require('ws');

// Definimos o porto onde escoitará o servidor
const porto = 8085;

// Creamos unha instancia do servidor WebSocket
// Nota: O servidor WebSocket pode correr por si só, pero a miúdo se monta sobre
// un servidor HTTP existente (non é o caso deste exemplo simple).
const wss = new WebSocket.Server({ port: porto });

console.log(`Servidor WebSocket activo e escoitando no porto ${porto}`);
console.log(`Podes conectar o cliente abrindo o ficheiro 'chat.html' no teu navegador.`);

// Evento que se dispara cando un cliente se conecta
wss.on('connection', function connection(ws) {
    console.log('Cliente conectado.');

    // 1. Manexo do Evento 'message': Recepción dunha mensaxe do cliente
    ws.on('message', function incoming(mensaxe) {
        // As mensaxes recibidas por ws son Buffer/Blob, convertemos a String
        const mensaxeStr = mensaxe.toString();
        console.log(`[Servidor] Recibida mensaxe do cliente: ${mensaxeStr}`);

        // 2. Resposta (ECO): O servidor devolve a mensaxe coa hora
        const resposta = `[ECO dende o Servidor @${new Date().toLocaleTimeString('gl-ES')}] Recibín: "${mensaxeStr}"`;
        ws.send(resposta); // O servidor envía de volta a mensaxe
    });

    // 3. Manexo do Evento 'close': Cando o cliente pecha a conexión
    ws.on('close', function close() {
        console.log('Cliente desconectado.');
    });

    // Mensaxe de benvida
    ws.send('Conexión establecida con éxito. Envía unha mensaxe!');
});