// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", 
// y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" 
// que hereden de "Animal" y tengan su propio método "emitirSonido". 
// Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", 
// y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal {
    #nombre;
    #edad;
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    emitirSonido(){
        document.write('<p>......</p>');
    }
}

class Perro extends Animal {
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        document.write('<p>El perro dice: Guau!</p>');
    }
}
class Gato extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        document.write('<p>El gato dice: Miau!</p>');
    }
}

let perro1 = new Perro();
perro1.emitirSonido();

let gato1 = new Gato();
gato1.emitirSonido();