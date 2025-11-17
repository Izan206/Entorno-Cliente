let temporizador = document.getElementById("temporizador");
let ventana = document.getElementById("ventana");

let info = document.getElementById("info");
info.innerHTML += window.innerWidth + "x" + window.innerHeight + "px ";
info.innerHTML += window.outerWidth + "x" + window.outerHeight + "px";
info.innerHTML += window.screenX + "x" + window.screenY + "px";

temporizador.addEventListener("click", () => {
  let segundos = prompt("Introdue un numero de segundos: ");

  if (segundos == "") {
    alert("operacion cancelada");
    return;
  } else if (parseInt(segundos) < 0) {
    alert("introduce un numero positivo");
    return "";
  }
  let p = document.createElement("p");
  p.textContent = segundos;
  info.appendChild(p);

  let interval = setInterval(() => {
    p.textContent = segundos;
    segundos--;
    if (segundos == -1) {
      clearInterval(interval);
      alert("Rematou a conta")
      p.textContent="rematou a conta atras"
    }
    if (segundos % 2 == 0) {
      p.style.color = "blue";
    } else {
      p.style.color = "green";
    }
  }, 1000);
});

ventana.addEventListener("click", () => {
    let venta=window.open("", "_blank", "width=400, height=400")  
    venta.removeAttributeNode(0,0)
    venta.resizeTo(screen.width/2, screen.height/2)
})
