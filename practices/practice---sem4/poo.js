class crearHijo {
    constructor(nombre, apellido, dia, mes, year, hobby) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dia = dia;
        this.mes = mes;
        this.year = year;
        this.hobby = hobby;
        this.edad = 6
    }
    saludo() {
        return`Hi my name is ${this.nombre} and my surname is ${this.apellido} and I am ${this.edad} years old`
    }
}

const Joaquin = new crearHijo("Joaquin Camilo",'Rojas Cabrera',12,'Dic',2015,'Minecraft');
const Valentina = new crearHijo("Natalia Valentina",'Rojas Cabrera',11,'Nov',2009,'Shorts');
console.log(Joaquin);
console.log(Valentina);
