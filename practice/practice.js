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

function sing(song,callback) {
    console.log(`I'm singing along to ${song}.`);
    callback();
}