// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    #ISBN;
    #titulo;
    #autor;
    #numeroDePaginas;

    constructor(isbn,titulo,autor,numeroDePaginas){
        this.#ISBN = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroDePaginas = numeroDePaginas;
    }
    get isbn(){
        return this.#ISBN;
    }
    set isbn(nuevoIsbn){
        if(nuevoIsbn > 0){
            this.#ISBN = nuevoIsbn;
        }
    }
    get titulo(){
        return this.#titulo;
    }
    set titulo(nuevoTitulo){
        if(nuevoTitulo > 0){
            this.#titulo = nuevoTitulo;
        }
    }
    get autor(){
        return this.#autor;
    }
    set autor(nuevoAutor){
        if(nuevoAutor > 0){
            this.#autor = nuevoAutor;
        }
    }
    get numeroDePaginas(){
        return this.#numeroDePaginas;
    }
    set numeroDePaginas(nuevoNumeroDePaginas){
        if(nuevoNumeroDePaginas > 0){
            this.#numeroDePaginas = nuevoNumeroDePaginas;
        }
    }
    
    mostrarLibro(){
        document.write(`<p>El libro ${this.#titulo} con ISBN ${this.#ISBN}
        creado por el autor ${this.#autor} tiene páginas ${this.#numeroDePaginas}</p>`);
    }

}

let libro1 = new Libro(9788437600895,'El Tunel','Ernesto Sábato',158);
let libro2 = new Libro(9789500372916,'La Metamorfosis','Franz Kafka',136);

libro1.mostrarLibro();
libro2.mostrarLibro();

if(libro1.numeroDePaginas > libro2.numeroDePaginas){
    document.write(`El libro ${libro1.titulo} tiene más paginas(${libro1.numeroDePaginas})`);
}else{
    document.write(`El libro ${libro2.titulo} tiene más paginas(${libro2.numeroDePaginas})`);
}