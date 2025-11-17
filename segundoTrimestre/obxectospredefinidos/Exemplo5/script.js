let info=document.getElementById("")
let recargar=document.getElementById("recargar")
let redirixir=document.getElementById("redirixir")
let replace=document.getElementById("replace")
let infoIntroducir=`
    hash: ${location.hash}
    host: ${location.host}
    hostname: ${location.hostname}
    href: ${location.href}
    origin: ${location.origin}
    pathname: ${location.pathname}
    port: ${localtion.port}
    protocol: ${location.protocol}
`

info.innerText=infoIntroducir