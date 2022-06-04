/*function a(){
    console.log("Hello Luis aqui estoy")
};
a();
(function (){
    console.log("Hello Luis aqui estoy")
})();

{
    console.log("Hello Luis aqui estoy")
}




function sayHello(){
    //return `Hello, my name is ${ this.name }`;
    return this.a + 1
}

const clark = { a : 5 };
const bruce = { a : 10 };

console.log(sayHello.call(clark));
console.log(sayHello.call(bruce));


function Temples(){
return `The Temple of ${this.city} is ${this.open}`
}
const trujillo = { city : "Trujillo", open : 'open'};
const bogota = { city : "Bogota", open : 'close'};

console.log(Temples.call(trujillo));
console.log(Temples.call(bogota));

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}
square(9);
square(11);
square(25);
console.log(square.cache);

(function h( ){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();

(function() {
    const name = 'Luis';
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}, today is ${today}`);
    document.write(`Welcome back ${name}, today is ${today}`)
})();

{
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}


 {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }
 {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
};



function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
party()
party();

function saludito(){
    console.log('Hola como estas, te estuve llamando');
    saludito = function(){
        console.log('Pero  seria buebno me devuelvas la llamada');
    }
}
const joaquin = saludito;
saludito()

joaquin()
saludito()

joaquin()
saludito()

console.log('----------------------------------');

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(1));

function wait(message, callback, time){
    setTimeout( callback, time * 1000);
    console.log(message);
}

function selfDestruct(){
    console.log('BOOM');
}
wait('This tape will self-destruct in five seconds ... ', selfDestruct,5)
console.log('Hmmm, should I accept this mission or not ... ?');


const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});
console.log(promise);


promise.then( result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`) );

function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}
const hello = returnHello();

console.log(hello);


const outside = 'In the global scope';
function fn() {
    const inside = 'In the function scope';
    console.log(inside);
}



function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
   //console.log(outside);
   inner();
}
*/
function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}

const toFahrenheit = closure();
toFahrenheit(30);



function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}
const conteo = counter(1)


for (n of sequence) {
    // stop the sequence after it reaches 100
    if (n > 10) break;
    console.log(n);
}


function square(x){
    return x*x;
}
function hypotenuse(a,b) {
    return Math.sqrt(square(a) + square(b));
}

hypotenuse(3,4);

function sum(array, callback){
    if(callback){
        array = array.map(callback);
    }
    return array.reduce((a,b)=>a+b)
}

console.log(sum([1,2,3,4]))