// Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : (este ej. debe formar parte del tp4)
// crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera)
// la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, 
// luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 
// (se puede realizar con los conceptos vistos hasta hoy)
let contadorUsuario = 0;
let contadorPC = 0;
function resultado(opcion){
    let opcionEnLetras='';
    switch(opcion){
        case 1: opcionEnLetras = 'Piedra';
        break;
        case 2: opcionEnLetras = 'Papel';
        break;
        case 3: opcionEnLetras = 'Tijeras';
        break;
        default: 'Numero Erroneo';
        break;
    }
    return opcionEnLetras;
}
function mensajeGanador(opcionUsuario, opcionPC){
    if((opcionPC == 1 && opcionUsuario == 1) || (opcionPC == 2 && opcionUsuario == 2) || (opcionPC == 3 && opcionUsuario == 3)){
        return 'EMPATE';
    }
    if((opcionPC > opcionUsuario) || (opcionPC == 1 && opcionUsuario == 3)){
        return 'GANADOR PC';
    }
    if((opcionPC < opcionUsuario) || (opcionUsuario == 1 && opcionPC == 3)){
        return 'GANADOR USUARIO';
    }
}


do{
    let opcionUsuario = parseInt(prompt(`Seleccione una opcion: 1-Piedra // 2-Papel // 3-Tijeras`));
    if(opcionUsuario >=  1 && opcionUsuario <= 3){
        let opcionPC = Math.floor(Math.random()*3)+1;
        document.write(`Usuario: ${resultado(opcionUsuario)}    -   `);
        document.write(`PC: ${resultado(opcionPC)}   ------> <strong>${mensajeGanador(opcionUsuario,opcionPC)}</strong><br><br>`);
        if(mensajeGanador(opcionUsuario,opcionPC) === 'GANADOR PC'){
            contadorPC++;
        }
        if(mensajeGanador(opcionUsuario,opcionPC) === 'GANADOR USUARIO'){
            contadorUsuario++;
        }
        alert(mensajeGanador(opcionUsuario,opcionPC));
    }
}while(confirm('¿Desea jugar otra vez?'))

alert(`USUARIO  ${contadorUsuario} - ${contadorPC}  PC`);

