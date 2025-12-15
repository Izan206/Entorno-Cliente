function obterUsuarios() {

}

function mostrarUsuarios() {

}
function mostrarDetalles(usuario) {

}


//Evento para cargar usuarios a funcion executora do correspondente Promise
btnCargar.onclick = () => {
    listaUsuarios.innerHTML=''
    detallesUsuario.innerHTML=''
    btnCargar.disabled=true
    obterUsuarios()
        .then(mostrarUsuarios)
        .catch(erro => {
            mensaxe.textContent=erro.message
        })
        .finally(() => {
            btnCargar.disabled=false
        })
}