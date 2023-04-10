// Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de 
// suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método

let calculadora = {
    numero1: 0,
    numero2: 0,
    suma: function(){
        this.numero1 = Math.floor(Math.random()*1000);
        this.numero2 = Math.floor(Math.random()*1000);
        document.write(`${this.numero1} + ${this.numero2} = ${this.numero1 + this.numero2}<br>`);
    },
    resta: function(){
        this.numero1 = Math.floor(Math.random()*1000);
        this.numero2 = Math.floor(Math.random()*1000);
        document.write(`${this.numero1} - ${this.numero2} = ${this.numero1 - this.numero2}<br>`);
    },
    multiplicacion: function(){
        this.numero1 = Math.floor(Math.random()*1000);
        this.numero2 = Math.floor(Math.random()*1000);
        document.write(`${this.numero1} * ${this.numero2} = ${this.numero1 * this.numero2}<br>`);
    },
    division: function(){
        this.numero1 = Math.floor(Math.random()*1000);
        this.numero2 = Math.floor(Math.random()*1000);
        if(this.numero2 == 0){
            document.write(`ERROR: No es posible division por CERO`);
        }else{
            document.write(`${this.numero1} / ${this.numero2} = ${this.numero1 / this.numero2}<br>`);
        }
        
    }
}

calculadora.suma();
calculadora.suma();
calculadora.resta();
calculadora.resta();
calculadora.multiplicacion();
calculadora.multiplicacion();
calculadora.division();
calculadora.division();