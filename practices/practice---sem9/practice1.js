 x = 6;
 console.log(x);

 console.log(window.x);


 if (x) { 
    console.log("Hola aqui estoy")
    };
let a = prompt("Hola como estas")
if (a == "Bien"){
alert("Genial")
}
confirm('Do you wish to continue?');

const popup = window.open('https://sitepoint.com',
'SitePoint','width=400,height=400,resizable=yes');

console.log(popup);

document.write('<h1>Hello, world!</h1>');
document.write('Hello, world!');

document.cookie = 'name=Superman';
window.setTimeout( () => alert("Time's Up!"), 3000);

window.setTimeout( () => alert("¡¡Hola, se acabó el tiempo!!"),6000)

function hola(){
    console.log("que hacen hijos");
}
hola()
const summon = window.setInterval(hola,6000);
console.log(summon)

const person = {
    name: 'Superman',
    introduce() { 
        console.log(`Hi, I'm ${this.name}`);
    }
};
                
setTimeout(person.introduce, 50);
    
