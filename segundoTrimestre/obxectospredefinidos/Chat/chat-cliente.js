// VARIABLES DE CONFIGURACIÓN
const urlServidor = 'ws://localhost:8085';
let ws = null; // Obxecto WebSocket
let codigoReconexion = null; // Código para reconexión automática setInterval

// ELEMENTOS DO DOM
const estadoDisplay = document.getElementById('estado');
const logMensaxes = document.getElementById('log-mensaxes');
const inputMensaxe = document.getElementById('input-mensaxe');
const btnEnviar = document.getElementById('btn-enviar');
const btnConexion = document.getElementById('btn-conexion');

// Listener keypress
inputMensaxe.addEventListener("keypress", (evento) => {
    if (evento.key == 'Enter' && ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        enviarMensaxe();
        this.focus();
    }

});

// FUNCIÓN DE LOG
function engadirLog(mensaxe, clase = 'normal') {
    const p = document.createElement('p');
    p.innerHTML = mensaxe;
    p.className = clase;
    logMensaxes.appendChild(p);
    logMensaxes.scrollTop = logMensaxes.scrollHeight; // Fai scroll ao final
}

// FUNCIÓN PRINCIPAL: INICIAR CONEXIÓN
function iniciarConexion() {
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        engadirLog('⚠️ Xa hai unha conexión activa ou en curso.', 'info');
        return;
    }

    // Crea o obxecto WebSocket
    ws = new WebSocket(urlServidor);
    engadirLog(`Tentando conectar a ${urlServidor}...`, 'info');

    // 1. EVENTO onopen: Conexión establecida con éxito
    ws.addEventListener("open", () => {
        estadoDisplay.innerText = 'CONECTADO';
        estadoDisplay.className = 'estado conectado';
        btnEnviar.disabled = false;
        btnConexion.disabled = false;
        if (codigoReconexion) {
            clearInterval(codigoReconexion);
            codigoReconexion = null;
        }
        engadirLog('🔌 CONEXIÓN ABERTA. Listo para enviar e recibir.', 'conectado');
    });

    // 2. EVENTO onmessage: Recepción de datos do servidor
    ws.addEventListener("message", (mensaxe) => {
        // mensaxe.data contén a mensaxe enviada polo servidor
        engadirLog(`← SERVIDOR: ${mensaxe.data}`, 'servidor');
    });

    // 3. EVENTO onclose: Conexión pechada (polo cliente ou servidor)
    ws.addEventListener("close", (evento) => {
        estadoDisplay.innerText = 'DESCONECTADO';
        estadoDisplay.className = 'estado desconectado';
        btnEnviar.disabled = true;
        //engadirLog("evento.wasClean = " + evento.wasClean);
        engadirLog('🛑 CONEXIÓN PECHADA. Código: ' + evento.code, 'desconectado');
        if (codigoReconexion && evento.code !== 1006) {
            clearInterval(codigoReconexion);
            codigoReconexion = null;
        }
        if (evento.code === 1006) {  // Desconexión inesperada
            btnConexion.disabled = true;
            codigoReconexion = setInterval(() => {
                iniciarConexion();
            }, 5000); // Tenta reconectar cada 5 segundos
        }
    });

    // 4. EVENTO onerror: Ocorreu un erro
    ws.onerror = function (erro) {
        engadirLog('⚠️ ERRO na conexión WebSocket.', 'desconectado');
        console.error("Erro WebSocket:", erro);
        if (codigoReconexion) {
            clearInterval(codigoReconexion);
            codigoReconexion = null;
        }
        // codigoReconexion = setInterval(() => { 
        //     iniciarConexion(); 
        // }, 5000); // Tenta reconectar cada 5 segundos
    };
}

// FUNCIÓN DE ENVÍO
function enviarMensaxe() {
    const mensaxe = inputMensaxe.value.trim();
    if (ws && ws.readyState === WebSocket.OPEN && mensaxe) {
        ws.send(mensaxe); // Enviar a mensaxe ao servidor
        engadirLog(`→ CLIENTE: ${mensaxe}`, 'cliente');
        inputMensaxe.value = ''; // Limpar o input
    } else if (ws.readyState !== WebSocket.OPEN) {
        engadirLog('⚠️ A conexión non está aberta. Tenta iniciar de novo.', 'desconectado');
    }
}

// FUNCIÓN PARA Xestionar a conexión
function xestionarConexion() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
        btnConexion.innerText = "Abrir conexión";
    } else {
        btnConexion.innerText = "Pechar conexión";
        iniciarConexion();
    }
}

// Iniciar a conexión automaticamente ao cargar a páxina
iniciarConexion();