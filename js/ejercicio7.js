// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. 
// Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. 
// Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, 
// las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

class Contacto {
    #nombre;
    #telefono;
    constructor(nombre,telefono){
        this.#nombre = nombre;
        this.#telefono = telefono;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.lenght > 0){
            this.#nombre = nuevoNombre;
        }
    }
    get telefono(){
        return this.#telefono;
    }
    set telefono(nuevoTelefono){
        if(nuevoTelefono > 0){
            this.#telefono = nuevoTelefono;
        }
    }
}

class Agenda {
    #nombreAgenda
    #listaContactos;
    #tamanioAgenda;
    constructor(agendaContactos,tamanioAgenda = 10){
        this.#nombreAgenda = agendaContactos;
        this.#listaContactos = [];
        this.#tamanioAgenda = tamanioAgenda;
    }

    aniadirContacto(contacto){
        if(this.existeContacto(contacto.nombre)){
            console.log('El contacto ya existe');
        }else{
            this.#listaContactos.push(contacto);
        } 
    }
    existeContacto(nombreExiste){
        return this.#listaContactos.find(contacto => contacto.nombre === nombreExiste);
    }
    listarContactos(){
        this.#listaContactos.map(contacto => console.log(contacto));
    }
    buscarContacto(nombre){
        let contactoEncontrado = this.existeContacto(nombre);
        console.log(`${contactoEncontrado === undefined ? 'Contacto No Encontrado' : contactoEncontrado.telefono}`);
    }
    eliminarContacto(contacto){
        let indexContacto = this.#listaContactos.findIndex(posicion => posicion.nombre === contacto);
        console.log(this.#listaContactos.splice(indexContacto,1) ? 'Contacto Eliminado' : 'Error al eliminar el contacto');
    }
    agendaLlena(){
        console.log(this.#listaContactos.lenght === this.#tamanioAgenda ? 'La agenda está llena' : 'La agenda NO está llena');
    }
    huecosLibres(){
        console.log(this.#tamanioAgenda);
        console.log(this.#listaContactos.length);
        console.log(`Cantidad de huecos libres: ${this.#tamanioAgenda - this.#listaContactos.length}`);
    }
}


let agenda = new Agenda('AGENDA 1');
let opcion;
do{
    opcion = parseInt(prompt('☼☼ AGENDA VIRTUAL ☼☼\n'+
            '1 - Añadir un contacto\n'+
            '2 - Existe contacto\n'+
            '3 - Listar contactos\n'+
            '4 - Buscar contacto\n'+
            '5 - Eliminar contacto\n'+
            '6 - Estado agenda\n'+
            '7 - Disponibilidad agenda\n'+
            '8 - Salir')); 
    switch(opcion){
        case 1: let nombre = prompt('Nombre contacto: ');
                let numero = prompt('Teléfono: ');
                let contacto = new Contacto(nombre,numero);
                agenda.aniadirContacto(contacto);
                break;
        case 2: let existe = agenda.existeContacto(prompt('Ingrese el nombre del contacto: '));
                console.log(existe ? 'El contacto existe' : 'El contacto NO existe');
                break;
        case 3: agenda.listarContactos();
                break;
        case 4: agenda.buscarContacto(prompt('Ingrese el nombre del contacto a buscar: '));
                break;
        case 5: let contactoAEliminar = prompt('Ingrese el nombre del contacto a eliminar: ');
                agenda.eliminarContacto(contactoAEliminar);
                break;
        case 6: agenda.agendaLlena();
                break;
        case 7: agenda.huecosLibres();
                break;
    }

}while(opcion != 8);