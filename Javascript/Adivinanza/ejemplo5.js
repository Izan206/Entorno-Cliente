const numero=Math.floor(Math.random()*100)+1
let intentos=0


function comprobarSuposicion() {
    const xogada=Number(document.getElementById("xogada").value)
    let mensaxe=document.getElementById("mensaxe")
    let mensaxeIntentos=document.getElementById("intentos")
    intentos++
    if(xogada<1 || xogada>100 || isNaN(xogada)) {
        mensaxe.textContent=`Error: Caracter invalido o error numero`
        return;
    }
    else if (xogada<numero){
        mensaxe.textContent=`El numero que buscas es mayor`
        mensaxeIntentos.textContent=`Llevas ${intentos} intentos`
        
    } 
    else if (xogada>numero) {
        mensaxe.textContent=`El numero que buscas es menor`
        mensaxeIntentos.textContent=`Llevas ${intentos} intentos`
        
    }

    else if(xogada==numero) {
        mensaxe.textContent=`Has acertado`
        mensaxe.style.color=`#28a745`
        mensaxeIntentos.textContent=`Tardaste ${intentos} intentos`
        
    }

    xogada.valueOf=``;
    xogada.focus();
}
