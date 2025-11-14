let titulo=document.getElementById("titulo")
console.log("Texto de titulo: ", titulo.textContent)

let claseParagrafos=document.getElementsByClassName("parrafo")

for (pr of claseParagrafos) {
    console.log("Texto do paragrafo: ", pr.textContent)
}

let primerParrafo=document.querySelector(".parrafo")
console.log("Primer parrafo:", primerParrafo.textContent)

let totalParrafos=document.querySelectorAll(".parrafo")
totalParrafos.forEach((p, index) => {
    console.log("Parrafo: ", index, " Texto: ",p.textContent)
})

primerParrafo.style.color="green"
primerParrafo.style.fontSize="1.5rem"

titulo.textContent="Hola mundo"

let p=document.createElement("p");
p.classList.add("parrafo")
p.textContent="Parrafo inyectado desde HTML"
document.body.appendChild(p)

let boton=document.getElementById("boton");
boton.addEventListener("click", () => {
    alert("Has pulsado el boton")
})