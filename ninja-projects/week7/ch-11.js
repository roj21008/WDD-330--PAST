const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(name){
        console.log('ask() invoked');
        if(this.questions.length > 0) {
        shuffle(this.questions);
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
    }},
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        alert('Correct!');
        this.score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}
game.start(quiz);