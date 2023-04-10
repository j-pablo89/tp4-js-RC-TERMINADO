// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, 
// calcular el perímetro y el área

class Rectangulo {
    #alto;
    #ancho;
    constructor(alto,ancho){
        this.#alto = alto;
        this.#ancho = ancho;
    }
    get alto(){
        return this.#alto;
    }
    set alto(nuevoAlto){
        if(nuevoAlto > 0){
            this.#alto = nuevoAlto;
        }
    }
    get ancho(){
        return this.#ancho;
    }
    set ancho(nuevoAncho){
        if(nuevoAncho > 0){
            this.#ancho = nuevoAncho;
        }
    }
    calculoPerimetro(){
        return document.write(`El perimetro es: ${(this.#alto *2) + (this.#ancho *2)}<br>`);
    }
    calculoArea(){
        return document.write(`El area es: ${this.#alto * this.#ancho}<br>`);
    }
}

let rectangulo1 = new Rectangulo(4,5);
let rectangulo2 = new Rectangulo(10,15);
let rectangulo3 = new Rectangulo(2,3);

console.log(rectangulo1);
rectangulo1.calculoArea();
rectangulo1.calculoPerimetro();


rectangulo1.alto = 9;

console.log(rectangulo1);
rectangulo1.calculoArea();
rectangulo1.calculoPerimetro();

