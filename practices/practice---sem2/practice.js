/*const message = 'Hello World!';

alert(message);

const uniqueID = Symbol('this is a unique ID');
console.log(uniqueID);



const pregunta = '¿como te llamas?';
const respuesta = prompt(pregunta);
alert(`Hola ${respuesta}`)*/
  
//ARRAYS
/*const avengers = ['Captain America', 'Iron Man', 'Thor'];

avengers = avengers.concat(['Hulk','Hawkeye', 'Black Widow']);
console.log(avengers);
document.write(avengers)

//CONJUNTOS

const list = new Set();
list.add(2,3)
const numbers = new Set([1,2,3]);
const moreNumbers = new Set([7,7,7,7,7,8,8,8,9,9]);

console.log(numbers);
console.log(moreNumbers);
const n = 50;
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');

const myName = "Luis"
myName.length == 4 ? console.log("Yes") : console.log("Try again");
if(myName.length == 15){
    console.log("Yes")
}else{
    console.log("Try again")
}



for(let i = 1; i < 13; i++){
    for(let j = 1; j<13; j++){
    console.log(`${i} x ${j} = ${i*j}` )
    document.write(`${i} x ${j} = ${i*j}<br>` )
}
}
const romanNumerals = new Map();
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V').set(100,'C');
console.log(romanNumerals)

for(const data of romanNumerals){
console.log(data)

}

for (const [arabic,roman] of romanNumerals.entries()){
    console.log(`${arabic} in roman is ${roman}`)
}*/

/* FUNCIONES
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
let score = 0 // initialize score
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response == answer){
        alert('Nice !!')
        score++
    }else{
        alert(`The correct answer is ${answer   }`)}
}
alert(`Game Over, yourn score is ${score} point${score!==1 ? 's':''}`)
*/


/*

function discount(price, amount=10) {
    return price*(100-amount)/100;
}

console.log(discount(20,20))

const suma = (x,y) =>{
    return x + y
}
console.log(suma(30,20));


const paises = ["Colombia", 'Peru',"Bolivia","Paraguay","Venezxuela"]

//const a = paises.filter(b => b.length < 8 )           //EJEMPLO DE FILTER
const a = paises.filter(function(pais){
    return pais.length < 8
})

console.log(a);

const mapeo = paises.map( x => x.length-2);   //EJEMPLO DE MAP
console.log(mapeo);

const animals = ["cat","dog","fish"];           //EJEMPLO DE REDUCE
const total = animals.reduce(add,0);function add(sum,word){
    return sum + word.length;
}
const sum = animals.reduce((add,word)=> add + word.length,0)


console.log(sum);

console.log(total)*/


const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
function star(quiz){
    let score = 0;

    for( const[question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    gameOver(); 

    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        if(response === answer){
            alert("Correct!!");
            score++
        }else{
            alert(`Wrong!!, The correct answer is ${answer}`)
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
star(quiz);