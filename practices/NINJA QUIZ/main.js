
/*const quiz = [  //  esto es un array, una matriz
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];*/
/*const quiz = [ // esto es un objeto
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
];*/

  /*   
  const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),//boton d einicio del quiz, mas abajo se le hace un addeventlistener click
    response: document.querySelector('#response'),//formulario, event submit para enviar informaicon y comparar respuestas
    timer: document.querySelector('#timer strong'),
    render(target,content,attributes) {
        for(const key in attributes) {
          target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
      element.style.display = 'block';
    },
    hide(element){
      element.style.display = 'none';
    },
    setup(){
      this.show(this.question);
      this.show(this.response);
      this.show(this.result);
      this.hide(this.start);
      this.render(this.score,game.score);
      this.render(this.result,'');
      this.render(this.info,'');
    
        //this.resetForm();//elimindado para POO
    },
   //resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },//eliminado para la programacion orientada a objetos
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
      },
      buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
      }
}

const game = {

    start(quiz){
        console.log('start() invoked');
        this.score = 0;
        this.questions =[...quiz];
        view.setup();
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown,1000);//inicia el conteo en reversa
        this.ask();// comienza el juego haciendo la pregunta
                
    },

    countdown() {
        game.secondsRemaining--;
        view.render(view.timer,game.secondsRemaining);
        if(game.secondsRemaining < 0) {
            game.gameOver();
        }   
    },
    // function declarations
    ask(name){
        console.log('ask() invoked');
        if(this.questions.length > 0) {
        shuffle(this.questions);
        this.question = this.questions.pop();
        const options = [this.question[0].realName,this.question[1].realName,this.question.realName]
        shuffle(options);
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        view.render(view.response,view.buttons(options));
        }else {
            this.gameOver();
        }

    },
    
    check(event){
        console.log('check(event) invoked');
        //event.preventDefault();eliminado en POO
        const response = event.target.textContent;
        //const response = view.response.answer.value; // eliminado en POO
        const answer = this.question.realName
        if(response === answer){
            view.render(view.result,'Correct!',{'class' : 'correct'})    
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        //view.resetForm(); eliminado en POO
        this.ask();
    },

    gameOver(){
        console.log('gameOver() invoked');
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
        clearInterval(this.timer); //detiene el conteo en reversa
    }
}*/

// View Object

const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/questions.json';

fetch(url)
  .then(res => res.json())
  .then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});

// Utility functions
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

// View Object
const view = {
  score: document.querySelector('#score strong'),
  question: document.querySelector('#question'),
  result: document.querySelector('#result'),
  info: document.querySelector('#info'),
  start: document.querySelector('#start'),
  response: document.querySelector('#response'),
  timer: document.querySelector('#timer strong'),
  hiScore: document.querySelector('#hiScore strong'),
  render(target,content,attributes) {
      for(const key in attributes) {
        target.setAttribute(key, attributes[key]);
      }
      target.innerHTML = content;
  },
  show(element){
    element.style.display = 'block';
  },
  hide(element){
    element.style.display = 'none';
  },
  setup(){
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
    this.render(this.hiScore, game.hiScore());
  },
  teardown(){
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
    this.render(this.hiScore, game.hiScore());
  },
  buttons(array){
    return array.map(value => `<button>${value}</button>`).join('');
  }
};

const game = {
  start(quiz){
    console.log('start() invoked');
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.secondsRemaining = 20;
    this.timer = setInterval( this.countdown , 1000 );
    this.ask();
  },
  countdown() {
    game.secondsRemaining--;
    view.render(view.timer,game.secondsRemaining);
      if(game.secondsRemaining <= 0) {
        game.gameOver();
      }
  },
  ask(name){
    console.log('ask() invoked');
    if(this.questions.length > 2) {
      shuffle(this.questions);
      this.question = this.questions.pop();
      const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
      shuffle(options);
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question,question);
      view.render(view.response,view.buttons(options));
    }
    else {
      this.gameOver();
    }
  },
  check(event){
    console.log('check(event) invoked');
    const response = event.target.textContent;
    const answer = this.question.realName;
    if(response === answer){
      console.log('correct');
      view.render(view.result,'Correct!',{'class':'correct'});
      this.score++;
      view.render(view.score,this.score);
    } else {
      console.log('wrong');
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    this.ask();
  },
  gameOver(){
    console.log('gameOver() invoked');
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
    clearInterval(this.timer);
  },
  hiScore(){
    const hi = localStorage.getItem('highScore') || 0;
    if(this.score > hi || hi === 0) {
      localStorage.setItem('highScore',this.score);
      view.render(view.info,'** NEW HIGH SCORE! **');
    }
    return localStorage.getItem('highScore');
  }
}
    
  

/*view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);*/
//view.response.addEventListener('submit',(event)=>game.check(event),false);
//view.hide(view.response); //eliminado Para POO, sirve para ocultar el formulario




