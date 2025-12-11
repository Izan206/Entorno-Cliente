let estado=document.getElementById("estado")
let logsDiv=document.getElementById("log-mensaxes")
let inputMensaxe=document.getElementById("input-mensaxe")
let btnEnviar=document.getElementById("btn-enviar")
let btnConexion=document.getElementById("btn-conexion")

let socket=null
let PORT="ws://localhost:8085"

function conectar(){
  socket = new WebSocket(PORT);
  let pInicial=document.createElement("p")
  pInicial.textContent=`⏳ Tentando conectar a ${PORT}...`
  logsDiv.appendChild(pInicial)

  socket.addEventListener("open", () => {
    console.log("Conectado al servidor")
    estado.style.color="green"
    estado.textContent="CONECTADO"

    let pConexion=document.createElement("p")
    pConexion.style.color="green"
    pConexion.textContent="💡 CONEXION ABERTA: Listo para enviar e recibir"
    logsDiv.appendChild(pConexion)

    if (codigoReconexion) {
      clearInterval(codigoReconexion)
      codigoReconexion=null
    }

    socket.send("Ola, servidor!")
  })

  socket.addEventListener("message", (evento) => {
    console.log("Datos recibidos: "+evento.data)
    let pServidor=document.createElement("p")
    pServidor.textContent=`SERVIDOR: ${evento.data}`
    logsDiv.appendChild(pServidor)
  })

  socket.addEventListener("close", (evento) => {
    btnEnviar.disabled=true
    if (evento.wasClean) {
        console.log(`[close] Conexion cerrada limpamente, código=${evento.code} motivo=${evento.reason}`)
    } else {
        console.log(`[close] A conexion caeuse inesperadamente`)
    }

    if (codigoReconexion && evento.code!==1006) {
      clearInterval(codigoReconexion);
      codigoReconexion=null
    }

    if (evento.code===1006) {
      btnConexion.disabled=true
      codigoReconexion=setInterval(() => {
        conectar()
      }, 5000)
    }

    let pClose=document.createElement("p")
    pClose.textContent=`🔴 CONEXION PECHADA. Codigo: ${evento.code}`
    logsDiv.appendChild(pClose)
    socket=null
  })

  socket.addEventListener("error", (error) => {
    console.log("Erro de websocket: ", error)
    
    let pError=document.createElement("p")
    pError.textContent=`⚠️ Error: Fallo na conexion`
    logsDiv.appendChild(pError)
  })
}

btnEnviar.addEventListener("click", () => {
  if (evento.key == 'Enter' && ws && (ws.readyState === WebSocket.OPEN)) {
      enviarMensaxe()
    }
})

function enviarMensaxe() {
  let mensaxe=inputMensaxe.value.trim()
  if (ws && ws.readyState===WebSocket.OPEN && mensaxe) {
    ws.send(mensaxe)
    engadirLog(`-> CLIENTE ${mensaxe} `)
  }
}

function xestionarConexion() {

}


conectar()