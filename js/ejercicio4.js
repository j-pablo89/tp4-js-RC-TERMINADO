// 4- Escribe una clase Producto para crear objetos. 
// Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
// el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    #codigo;
    #nombre;
    #precio;
    constructor(codigo,nombre,precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    get codigo(){
        return this.#codigo;
    }
    set codigo(nuevoCodigo){
        if(nuevoCodigo>0){
            this.#codigo = nuevoCodigo;
        }
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.lenght>0){
            this.#nombre = nuevoNombre;
        }
    }
    get precio(){
        return this.#precio;
    }
    set precio(nuevoPrecio){
        if(nuevoPrecio>0){
            this.#precio = nuevoPrecio;
        }
    }

    imprimeDatos(){
        document.write(`Codigo: ${this.codigo}<br>`);
        document.write(`Nombre: ${this.#nombre}<br>`);
        document.write(`Precio: $${this.#precio}<br><br>`);
    }

}

let producto1 = new Producto(1,'Coca Cola 2.25L',550);
let producto2 = new Producto(2,'Pepsi 2.25L',480);
let producto3 = new Producto(3,'Pritty 2.25L',350);

let listaProductos =[];
listaProductos.push(producto1);
listaProductos.push(producto2);
listaProductos.push(producto3);

listaProductos.forEach(element => { element.imprimeDatos()});