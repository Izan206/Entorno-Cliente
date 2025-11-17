let info=document.getElementById("info")
let boton=document.getElementById("localizacion")
let infoIntroducir=`
    User-Agent: ${navigator.userAgent}
    Nome do navegador: ${navigator.appName}
    Version do navegador: ${navigator.appVersion}
    Linguaxe do navegador: ${navigator.language}
    Plataformas: ${navigator.platform}
    Cookies habilitadas: ${navigator.cookieEnabled}
    Java habilitado: ${navigator.javaEnabled}
    Conexion disponible: ${navigator.onLine}
    `

info.append(infoIntroducir)

boton.addEventListener("click", () => {
    if (!navigator.geolocation) {
        alert("tu navegador no soporta geolocalizacion")
    }
})

navigator.geolocation.getCurrentPosition(
    (posicion) => {
        let (latitud, longitud)=posicion.coords;
        info.innerHTML+=`\nLocalizacion actual: \nLatitud: ${latitude}\nLonxitude: ${lonxitude}`
    }
)