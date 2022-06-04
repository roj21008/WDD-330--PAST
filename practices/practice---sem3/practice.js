/*const superman = {
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



for(const key in superman) {
    console.log(key + ": " + superman[key]);
}
console.log(`----------------------------`);
for(const key in superman) {
    if(superman.hasOwnProperty(key)){
        console.log(key + ": " + superman[key]);
    }
}
console.log(`----------------------------`);

for(const a of Object.keys(superman)){
    console.log(a);
}
console.log(`----------------------------`);

for(const a of Object.values(superman)){
   console.log(a);
}

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")


for(const [key,value] of Object.entries(superman)){
    console.log(`${key} : ${value}`);
    document.write(`${key} : ${value}<br><hr> `)
}

superman['real name'] = 'Kal-El';

superman['weight'] =999999000;
delete superman.hero;


console.log('aaaaaaaaaaaaaaaaaaaaaa')

for(const [key,value] of Object.entries(superman)){//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    console.log(`${key} : ${value}`);
}

//OBJETOS ANIDADOS

console.log(`----------------------------`);
console.log('OBEJTOS ANIDADOS')
const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}

console.log(jla.batman.realName)

function saludo({nombresiño,años, ciudad}){
        return `Hola mi nombre es ${nombresiño}, tengo ${años} años y soy de ${ciudad}.`;
};
function greet({greeting,name,age}) {
        return `${greeting}! My name is ${name} and I am ${age} years old.`;
};


console.log(saludo({ nombresiño: 'Luis', años: 37, ciudad: 'Trujillo'}));


console.log(greet({ greeting: `What's up dude`, age: 10, name: `Bart` }));


console.log(`----------------------------`);
console.log(`----------------------------`);
console.log(`----------------------------`);
console.log('THIS PROPIEDAD')

const dice = {
    sides : 6,
    roll(){
        return Math.floor(this.sides * Math.random()) +1;
    }
}

console.log(dice.roll())

console.log(`----------------------------`);
console.log(`----------------------------`);
console.log(`----------------------------`);
console.log('--------JSON---------')
const batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}'

console.log(Math.floor(6 * Math.random())+1);
console.log("con esta formula obtenemos un lance de dado al azar")


console.log(`----------------------------`);
console.log(`----------------------------`);
console.log(`----------------------------`);
console.log('--------El objeto de fecha---------')

*/
/*
const game = {
    start(quiz){
        this.question = [...quiz];
        this.score = 0

        for (const question of this.question){
            this.question = question;
            this.ask();
        }
        this.gameOver()
    }


}

*/
function suma(a,b,c,d,e,f,g){
    return a+b+c+d+e+f+g
}
const numbers = [2,5,6,4,7,8,9]
console.log(suma(...numbers))

let copia = numbers.slice()
console.log(...copia)