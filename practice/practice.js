/*const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);*/
//const avengers = ['Captain America', 'Iron Man', 'Scarlet Witch', 'Quicksilver', 'Hawkeye', 'Black Widow'];
//const romanNumerals = new Map();
//romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');


/*
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
let score = 0;

for (const[question,answer] of quiz){
    const response = prompt(question);
    if(response == answer){
        alert('correct');
        score++;
    }else{
        alert(`Wrong, The correct answer is${answer}`)
    }

}

alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);*/

/*function sing(song,callback) {
    console.log(`I'm singing along to ${song}.`);
    callback();
}*/
/*
function person(age){
    this.age = age;
}
const greg = new person(22)
const thomas = new person(25)

console.log(greg)
console.log(thomas)


const arr=[1,2,3,4];
arr.forEach(function(a,index,array){
    b = a + 1
    
    console.log(b)
    console.log(index)
    console.log(array)
})*/
/*
function callback(){
    console.log('Hola Yo soy un callback')
};
function saludo(fn){
    fn()
};
saludo(callback)//este ES EL CALLBACK

function function1(fn){
    setTimeout(function(){
        document.write('mensaje 1');
        document.write('<br>');
        fn();
    },2000);
};
function function2()  {
    document.write('mensaje 2');
};
function1(function2)
*/

/*
function Temple (a,b,c,d){
    this.country = a;
    this.city = b;
    this.year1 = c;
    this.year2 = d;
};
var temple1 = new Temple("Peru","Trujillo",2015,"current");
var temple2 = new Temple("Colombia","Bogota",2001,"current");
console.log(temple1);
const Temples = [temple1,temple2]
console.log(Temples)
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
delete superman.fly
for(const key in superman) {
    if(superman.hasOwnProperty(key)){
        console.log(key + ": " + superman[key]);
    }
}
superman['real name'] = 'Kal-El';
delete superman.fly*/

const today = new Date;
today.toString();

console.log(today);