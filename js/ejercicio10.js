// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, 
// esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, 
// además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, 
// si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, 
// lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero 
// suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje
// que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", 
// crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, 
// buscar un avión y usar el método abordar.


class Avion {
    #nombre;
    #capacidad;
    #destino;
    #listaPasajeros;

    constructor(nombre,capacidad,destino){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaPasajeros = [];
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.lenght>0){
            this.#nombre = nuevoNombre;
        }
    }
    get capacidad(){
        return this.#capacidad;
    }
    set capacidad(nuevaCapacidad){
        if(nuevaCapacidad>0){
            this.#capacidad = nuevaCapacidad;
        }
    }
    get destino(){
        return this.#destino;
    }
    set destino(nuevoDestino){
        if(nuevoDestino.lenght>0){
            this.#destino = nuevoDestino;
        }
    }
    get listaPasajeros(){
        return this.#listaPasajeros;
    }
   

    abordar(pasajero){
        if(this.#listaPasajeros < this.#capacidad){
            this.#listaPasajeros.push(pasajero);
            document.write(`<br><br>El pasajero ha abordado el avion`);
        } else{
            document.write('<br>AVION LLENO');
        }
    }
}
class Aeropuerto {
    #nombreAeropuerto;
    #listaAviones;
    constructor(nombreAeropuerto){
        this.#nombreAeropuerto = nombreAeropuerto;
        this.#listaAviones = [];
    }
    get listaAviones(){
        return this.#listaAviones;
    }
    agregarAvion(nuevoAvion){
       this.#listaAviones.push(nuevoAvion);
    }
    buscarAvion(nombreAvion){
        return this.#listaAviones.find(avion => avion.nombre === nombreAvion);
    }
    mostrarLista(){
        return this.#listaAviones;
    }
}

const avion1 = new Avion('Boeing 777',100,'Tokyo');
const avion2 = new Avion('Boeing 747',100,'Berlin');
const avion3 = new Avion('Boeing 787',100,'Athenas');

const aeropuerto = new Aeropuerto('Aeropuerto Internacional');

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

const avionEncontrado = aeropuerto.buscarAvion('Boeing 777');
document.write(`${avionEncontrado === undefined ? 'Avion NO Encontrado' : 'AVION ENCONTRADO <br>' + 
                                                                   'nombre: ' +avionEncontrado.nombre + 
                                                                '<br> capacidad: ' + avionEncontrado.capacidad +
                                                                '<br> destino: ' + avionEncontrado.destino }`);
if(avionEncontrado){
    console.log(avionEncontrado.listaPasajeros);
    console.log(avionEncontrado.capacidad);
    avionEncontrado.abordar('Martin fierro');
}
