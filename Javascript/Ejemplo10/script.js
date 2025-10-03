let opcion=0
const opcionFin=4
const menu=`
Menu
1. Novo xogo
2. Configuracion
3. Axuda
4. Sair
`;

let continuar=true;
do {
    console.log(menu)
    opcion=Math.round(Math.random()*5); //pode ser 0, 1, 2, 3, 4, 5
    console.log(`Opcion elegida: ${opcion}`);
    switch(opcion) {
        case 1:
            console.log("Iniciando novo xogo...");
            break;
        case 2:
            console.log("Entrando a la configuracion...");
            break;
        case 3:
            console.log("Entrando o apartado de axuda...");
            break;
        case 4:
            console.log("saindo...")
            continuar=false;
            break;
    }


} while (continuar==true);