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
const boton = document.getElementById("button");
const link = document.getElementById("link");
//boton.onclick = evento;
link.onclick = back;

function evento() {
   
hola.style.color = "red"
hola.innerHTML = "NUEVO TITULO"
}

function back() {
   
    hola.style.color = "black"
    hola.innerHTML = "HOLA, SOY LUIS"
    }

    boton.addEventListener('click', function(){
        hola.innerHTML = "JOAQUIN ROJAS"   
    })

    const parrSuma = document.getElementById("parrafo_suma");
/*function suma (num1,num2){
    return num1 + num2
}*/

const suma = (num1,num2)=>{return num1 + num2}
parrSuma.innerHTML = parrSuma.innerHTML + suma(5,10)