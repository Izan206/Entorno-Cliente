let dia=new Date().getDay();
let nomeDia;
switch(dia) {
    case 0:
        nomeDia="Domingo";
        break;
    case 1:
        nomeDia="Lunes";
        break;
    case 2:
        nomeDia="Martes";
        break;
    case 3:
        nomeDia="Miercoles";
        break;
    case 4:
        nomeDia="Jueves";
        break;
    case 5:
        nomeDia="Viernes";
        break;
    case 6:
        nomeDia="Sabado";
        break;
}

console.log("Hoy es", nomeDia)