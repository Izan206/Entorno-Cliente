let texto=document.getElementById("texto")
let contador=0

texto.setAttribute("data-contador", contador)

function aumentar() {
    contador++
    console.log("Click numero: ", contador);
    texto.setAttribute("data-contador", contador)
    if (contador%5==0) {
        alert(`Llevas ${contador} clicks`)
    }
}

texto.addEventListener("click", aumentar)

