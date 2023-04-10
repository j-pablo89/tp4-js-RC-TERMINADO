// Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique 
// si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, 
// el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.
// Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e 
// indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.
let persona = {
    nombre: 'Juan Pablo',
    apellido: 'Miranda',
    edad: 33,
    estudiante: true,
    hobbies: [],
    presentacion: function(){
        document.write(`Hola!, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años, ${(this.estudiante) ? 'soy estudiante': 'no soy estudiante'}`);
    },
    agregarHobby: function(nuevoHobby){
        this.hobbies.push(nuevoHobby);
    },
    buscarHobby: function(buscar){
        return this.hobbies.includes(buscar) ? 'Existe el hobby en la lista' : 'No existe el hobby en la lista';
    },
    eliminarPrimerHobby: function(){
        this.hobbies.shift();
    }
}

persona.presentacion();
do{
    let hobbyAIngresar = prompt('Ingresar un hobby: ');
    persona.agregarHobby(hobbyAIngresar);
}while(confirm('¿Desea ingresar otro hobby?'));
document.write(`<h2>Lista de Hobbies</h2>`)
document.write(`<ul>`);
persona.hobbies.map(hobby => document.write(`<li>${hobby}</li>`));
document.write(`</ul>`)
document.write(`<br>-----------------------------------<br>`);
let hobbyABuscar = prompt('Hobbie a buscar: ');
document.write(persona.buscarHobby(hobbyABuscar));
document.write(`<br>-----------------------------------<br>`);
persona.eliminarPrimerHobby();

document.write(`<h2>Lista de Hobbies eliminando el primero de la lista</h2>`)
document.write(`<ul>`);
persona.hobbies.map(hobby => document.write(`<li>${hobby}</li>`));
document.write(`</ul>`)