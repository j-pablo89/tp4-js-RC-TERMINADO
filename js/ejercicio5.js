// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la 
// persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;

    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }

    get dni(){
        return this.#dni;
    }
    set dni(nuevoDni){
        if(nuevoDni>0){
            this.#dni = nuevoDni;
        }
    }

    mostrarGeneracion(){
        if(this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948 ){
            document.write(`<p>Generacion: Silent Generation - Los niños de la postguerra</p>`);
            document.write(`Austeridad 😐<br>`) 
        }
        if(this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968 ){
            document.write(`<p>Generacion: Baby Boom</p>`);
            document.write(`Ambición 🤑<br>`) 
        }
        if(this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980 ){
            document.write(`<p>Generacion: X</p>`);
            document.write(`Obsesión por el éxito 😎<br>`) 
        }
        if(this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993 ){
            document.write(`<p>Generacion: Y</p>`);
            document.write(`Frustración 😧<br>`) 
        }
        if(this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010 ){
            document.write(`<p>Generacion: Z</p>`);
            document.write(`Irreverencia 😋<br>`) 
        }
    }
    esMayorDeEdad(){
        if(this.#edad > 18){
            document.write(`<p>Es mayor de Edad</p>`);
        }else{
            document.write(`<p>No es mayor de Edad</p>`);
        }
    }
    mostrarDatos(){
        document.write(`Nombre: ${this.#nombre}<br>`);
        document.write(`Edad: ${this.#edad}<br>`);
        document.write(`DNI: ${this.#dni}<br>`);
        document.write(`Sexo: ${this.#sexo}<br>`);
        document.write(`Peso: ${this.#peso}<br>`);
        document.write(`Altura: ${this.#altura}<br>`);
        document.write(`Año Nacimiento: ${this.#anioNacimiento}<br><br>`);
    }
    generaDni(){
        this.#dni = Math.floor(Math.random() *(99999999-10000000)+1);
    }
}

let persona1 = new Persona('Juan',15,34185542,'H',80,1.67,1989);

persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
persona1.generaDni();
persona1.mostrarDatos();
