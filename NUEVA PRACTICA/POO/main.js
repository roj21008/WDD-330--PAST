/*class Turtle {
    constructor(name){
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi(){
        return `Hi dude, my name is ${this.name}`

    }
    attack(){
        return `Feel the power of my ${this.weapon}`
    }
}





const leo = new Turtle('Leonardo');
const raph = new Turtle('Raphael');
const don = new Turtle('Donatello');
console.log(leo.attack())
console.log(raph.attack())
console.log(don.attack())

console.log('-------------------');


Turtle.prototype.name = 'Feet';
console.log(leo.attack())
console.log(raph.attack())
console.log(don.attack())


console.log('****************************');



Turtle.prototype.edad = 22;
Turtle.prototype.age = function() {
    return `Hi, my name is ${this.name} and I am ${this.edad} years old`;
}
console.log(leo.edad)
console.log(raph.edad)
console.log(don.edad)
console.log(leo.age())
console.log(raph.age())
console.log(don.age())


Turtle.prototype.food = 'Pizza';

Turtle.prototype.eat = function() {
    return `Mmm, this ${this.food} tastes great!`;
}

const mike = new Turtle('Michelangelo');
console.log(mike.eat())*/



// GETTER AND SETTER
/*class Turtle {
    constructor (name, color){
        this.name = name;
        let _color = color;
        this.setColor = (color) =>{
            if (typeof color === 'string') {
                return _color = color; 
            } else{
            throw new Error ('Color must be a string');
            }
    
        this.getColor = () => _color;
    }
}
}
raph = new Turtle('Raphael','Red');*/



// HERENCIA
/*class Turtle {
    constructor(name) {
        this.name = name;
        }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swim() {
        return `${this.name} paddles in the water`;
    }
}

class ninjaTurtle extends Turtle{
    constructor (name){
        super(name);
        this.weapon = 'hands'
    }
    attack (){return `Feel the power of my ${this.weapon}!`}
}

const raph = new Turtle('Raphael');

*/

//GET Y SET

/*
class Dice{
    constructor(sides = 6){
        Object.defineProperty(this,'sides',{
            get(){
                return `This dice has ${sides} sides`;
            },
            set(value){
                if (value > 0) {
                    sides = value;
                    return sides
                }    else{
                    throw new Error('The nmber of sides must be positive');
                }
            }
        });

    this.roll = function(){
        return Math.floor(sides*Math.random()+1)
    }
    }
}

const yellowDice = new Dice;
console.log(yellowDice.sides)
console.log(yellowDice.sides = 0)
console.log(yellowDice.sides)*/



//CREANDO OBJETOS A PARTIR D EOTROS OBJETOS---->  Object.create()

const Human = {
arms: 2,
legs: 2,
walk() { console.log('Walking'); }
}

const Superhuman = Object.create(Human)

//Usando una funcion init metodo para abreviar la asignacion d epropiedades
Superhuman.init = function (name,realName) {
    this.name = name;
    this.realName = realName;
    this.init = undefined;
    return this
}
Superhuman.change = function(){
    return `${this.realName} goes into a phone box and comes out as ${this.name}`
}


const superman = Object.create(Superhuman);
const batman = Object.create(Superhuman);
const ironman = Object.create(Superhuman);



superman.init('Superman', 'Clark Kent')
batman.init('Batman','Bruce Wayne');
ironman.init('Ironman','Tony Stark');
/*
console.log('.----------------')
console.log(superman.change());
console.log(batman.change());
console.log(ironman.change());*/


//MIXIN, Object.assign()
/*const a = {age:40};
const b = {age: 34};

Object.assign(a,b);
console.log(a)
console.log(b);*/

// LA MIXIN PROPIEDAD para mezclar atributos d eobjetos

function mixin(target,...objects) {
    for (const object of objects) {   
    if(typeof object === 'object') {
        for (const key of Object.keys(object)) {
            if (typeof object[key] === 'object') {
            target[key] = Array.isArray(object[key]) ? [] : {};
            mixin(target[key],object[key]);
            } else {
            Object.assign(target,object);  
            }
        }
        }
    }
    return target;
};


const wonderWoman = Object.create(Superhuman);

wonderWoman.name = 'Wonder Woman';


wonderWoman.realName = 'Diana Prince';
console.log(wonderWoman.realName )
console.log(wonderWoman.name )


//FUNCION PARA COPIAR CARACTERISTICAS DE OTROS OBJETOS
function copy (target) {
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object,target);
    return object;
}

const bizarro = copy(Superhuman)
bizarro.init('Bizarro','Subject B-0')
console.log(bizarro.change())


//fruncion para crear objetos a partir de MIXIN,
//le podemos cmabiar d enombre a la funcion dependiendo de loq ue queremos cerar
// el parametro de copy depende del objetoq ue estamos copiando

function createSuperhuman(...mixins) {
    const object = copy(Superhuman);
    return mixin(object,...mixins);
}

const hulk = createSuperhuman({name: 'Hulk', realName: 'Bruce Banner'});

console.log(hulk)
console.log(hulk.change())



//ahora agregamos mas objetos con  funciones  para tener
// poderes en cada superheroe

const flight = {
    fly() {
        console.log(`Up, up and away! ${this.name} soars through the air!`);
        return this;
    }
}

const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet!`);
        return this;
    }  
}

const xRayVision = {
    xray() {
        console.log(`${this.name} can see right through you!`);
        return this;
    }  
}



mixin(superman,flight,superSpeed,xRayVision);

mixin(wonderWoman,flight,superSpeed);


const flash = createSuperhuman({ name: 'Flash', realName: 'Barry Allen' }, superSpeed);
console.log('---------------------------------------------')
console.log(flash.change())
console.log(superman.change())
console.log(wonderWoman.change())
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

console.log(flash.move())
console.log(wonderWoman.move())

console.log(wonderWoman.fly())

console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-')

document.write(superman.fly().move().xray());
document.write(flash.move())

console.log('55555555555555555555555555555555555555')
//array de amigos de superman
superman.friends = [batman,wonderWoman,ironman]

superman.findFriends = function(){
    const that = this;
    this.friends.forEach(function(friend) {
        console.log(`${friend.name} is friends with ${that.name}`);
        document.write(`${friend.name} is friends with ${that.name}`);
    }
    );
}

console.log('.........................................')
superman.findFriends()
console.log('.........................................')