// 8- Crea una clase llamada "Persona" que tenga las propiedades 
// "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
// Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades 
// y llama a sus métodos "saludar" y "despedirse".

class Persona {
    #nombre;
    #edad;
    #profesion;

    constructor(nombre,edad,profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }

    saludar(){
        document.write(`<p>Hola! soy ${this.#nombre} tengo ${this.#edad} años soy ${this.#profesion}</p>`);
    }
    despedirse(){
        document.write(`<p>Adios!</p>`);
    }
}

let persona1 = new Persona('Juan',28,'Psicólogo');
let persona2 = new Persona('Mariana',29,'Bioquímica');

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();