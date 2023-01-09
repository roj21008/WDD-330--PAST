//console.log('Hello world!');

/*const btn = document.getElementById("link");
btn.addEventListener('click', function(){
    alert("Hello World");
});*/
/*
const btn2 = document.getElementById('button');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change(){
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn2.addEventListener('click', change);

//PRACTICA  NUMEROS Y VARIABLES

let points  = 100 

++points

console.log(points);

//ARRAYS (MATRICES)

const a = [1,"A","B",[11,12,13]]

console.log(a[3][2])

const b = Array.of("a","b","vg")
console.log(b)

const bishops = ["Gary","Carlos","Carlos","Jhecson","Ivan","Roger","Marcos","Hugo","Victor","Gilmer","Robert"]
console.log(bishops);

const noDuplicate = [...new Set(bishops)]
const noDuplicate1 = new Set(bishops)
console.log(noDuplicate)
console.log(noDuplicate1)
//bishops.pop()
/*
bishops.forEach(function(name,a,b){
    console.log(`<li>id=${a+1} ${b} ${name}</li>`)
})*/
/*
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');

console.log(shoppingSet)

const a1 = [...shoppingSet]
console.log(a1)
*/
/*
const action = "res";

switch(action){
    case "sum": 
    console.log("se suma")
    break;
    case "rest":
    console.log("se resta")
    break;
    case "mul":
    console.log("se multiplica")
    break;
    case "div":
    console.log("se divide")
    break;
    default :
    console.log("no se realiza ninguna operacion")

}


const hola = document.getElementById("hola")
const pais = document.getElementById("pais")
const boton = document.getElementById("button");
const link = document.getElementById("link");
//boton.onclick = evento;



function first(){
    hola.innerHTML = "HOLA, SOY VALE"
    hola.style.color = "red"
    pais.innerHTML = "Soy de Colombia"   
    }
function back() {
   
    hola.style.color = "blue"
    hola.innerHTML = "HOLA, SOY LUIS"
    pais.innerHTML = "Soy de Perú"
    }


link.addEventListener('click',first)
boton.addEventListener('click',back )


const title = document.getElementById("title-1");
const text = document.getElementById("text-1");
const showBtn = document.getElementById("show");

function show(){
    title.textContent = "Natalia Valetina"
    text.innerHTML = "Rojas Cabrera"
}
showBtn.addEventListener('click',show);

console.log("HOLA")


const btnGenerate = document.getElementById("generate");

function showList(){

    const ul = document.getElementById('list');    
    const li = document.createElement('li');

    
    const genAleat= (min,max) => {
    const newNumber = Math.floor(Math.random()*(max-min) + min)
    return newNumber
       
    }
    for (let i = 1; i < 101; i++) {
        `<ul>
        <li>${i}. ${genAleat(100,200)} </li>
        </ul>`
    }
   
   
}



btnGenerate.addEventListener('click',showList())


    const genAleat= (min,max) => {
    const newNumber = Math.floor(Math.random()*(max-min) + min)
    return newNumber
       
    }

    
let x = 12;
const p = new Promise((resolve,reject)=>{
    if (x == 10) {
        resolve ("X  es igual a 10")
    }else{
        reject ("X no es igual a 10")
    }
})

p
.then( res =>{
    console.table("succes:"+ res)
}

)
.catch( error =>{
    console.table("error:"+ error)
}

)


/*
function showList(){

}

showList()*/
//aleatBtn.addEventListener('click',genAleat(300,800))
//random.innerHTML = genAleat(100,200)
/*
function saludo(a,b,callback){
    return callback(a,b)
}

saludo("Buenos dias","Luis", (c,d) =>{console.log(c+d)})

function anyFunction(num1, num2, callback){
 return callback(num1, num2)
}

anyFunction(3,5,(c,d) =>{console.log(c+d)})


const namePromise = "Joaquin"
function data(){
    return new Promise((resolve,reject) => {
        if (namePromise == "Luis") {
            resolve("Hola LUis")
        }
        reject(new Error("No eres Luis"))
    })
}

data()
    .then((datos) => console.log(datos) )
    .catch((err) => console.log(err.message) )*/


function sayHello(){
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I am from ${this.city}`
}

const luis={
    name:"Luis",
    age: 38,
    city:"Trujillo"
}
const sandra={
    name:"Sandra",
    age: 34,
    city:"La Esperanza"
}

    let luar = sayHello.call(luis)
    let san = sayHello.call(sandra)

    console.log(luar),
    console.log(san)




/*  CACHE, GUARDANDO DATOS DE LA FUNCION

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

*/
function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}


const sequence = fibonacci(1,1);
sequence.next();


sequence.next();


sequence.next();
for (n of sequence) {
    // stop the sequence after it reaches 100
    if (n > 10) break;
    console.log(n);
}


console.log(this)

