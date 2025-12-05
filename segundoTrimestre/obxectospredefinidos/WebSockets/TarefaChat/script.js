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

    socket.send("Ola, servidor!")
  })

  socket.addEventListener("message", (evento) => {
    console.log("Datos recibidos: "+evento.data)
    let pServidor=document.createElement("p")
    pServidor.textContent=`SERVIDOR: ${evento.data}`
    logsDiv.appendChild(pServidor)
  })

  socket.addEventListener("close", (evento) => {
    if (evento.wasClean) {
        console.log(`[close] Conexion cerrada limpamente, código=${evento.code} motivo=${evento.reason}`)
    } else {
        console.log(`[close] A conexion caeuse inesperadamente`)
    }

    let pClose=document.createElement("p")
    pClose.textContent=`🔴 CONEXION PECHADA. Codigo: ${evento.code}`
    logsDiv.appendChild(pClose)
    socket=null
  })
}

conectar()