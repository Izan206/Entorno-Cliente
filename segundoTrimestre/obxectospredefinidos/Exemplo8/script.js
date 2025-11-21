let gardarBtn=document.getElementById("gardarNome")
let lerBtn=document.getElementById("lerNome")
let borrarBtn=document.getElementById("borrarNome")
let mensaxe=document.getElementById("mensaxe")
let input=document.getElementById("nome")

gardarBtn.addEventListener("click", gardar)
lerBtn.addEventListener("click", ler)
borrarBtn.addEventListener("click", borrar)

function gardar() {
    localStorage.setItem("username", input.value)
}

function ler() {
    mensaxe.textContent=`Nome gardado: ${localStorage.getItem("username")}`
}

function borrar() {
    localStorage.clear()
}