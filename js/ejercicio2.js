// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la
// descripción del estado de la cuenta.

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(sumarDinero){
        this.saldo =+sumarDinero;
    },
    extraer: function(restarDinero){
        console.log(this.saldo)
        if(this.saldo < restarDinero){
            alert('No hay suficiente dinero');
        }else{
            this.saldo = this.saldo - restarDinero;
        }
    },
    informar: function(){
        document.write(`<h2>Cuenta Bancaria</h2>`);
        document.write(`Titular: ${this.titular}<br>`);
        document.write(`Saldo: $${this.saldo}`);
    }
}

cuenta.informar();
let ingreso = parseFloat(prompt('Ingrese una cantidad de dinero a la cuenta: '));
cuenta.ingresar(ingreso);
let extraccion = parseFloat(prompt('Ingrese una cantidad de dinero a extraer de la cuenta: '));
cuenta.extraer(extraccion);
cuenta.informar();