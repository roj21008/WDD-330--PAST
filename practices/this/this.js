/*let user = {
    name: "John",
    age: 30,
    sayHi(){
        alert(this.name);
        alert(this.age);
      }
};
 

  user.sayHi(); // Hello!

function sayHi(){
    alert("Hello 2");
};

user.sayHi = sayHi;

user.sayHi(); // Hello 2  

 // console.log(user);

user = {
    sayHi(){
        alert("Hello 3");
        console.log("Holaaaaaaaaaaaade nuevo estoy en la consola")
    },
    name :"aqui nuevamente"
}
user.sayHi();
console.log(user.name);

let calculator = {
    read(){
        this.a = +prompt("First number")
        this.b = +prompt("second number")
        },
    sum(){
        return this.a + this.b
        },
    mul(){
        return this.a * this.b
        }
  };
  
  calculator.read();
  alert(`The sum is ${ calculator.sum()}` );
  alert(` the product is ${ calculator.mul() }`);*/

 function person (age){
    this.age = age
 };
 const luis = new person(22)
 const sandra = new person(44)

 console.log(luis);
 console.log(sandra);

 function Human (name) {
    return {
      name,
      getName () {
        return this.name
      }
    }
  }
  
  const zell = new Human('Zell')
  const vincy = new Human('Vincy')
  
  console.log(zell.getName()) // Zell


  const o = {
    doSomethingLater (){
        setTimeout(function(){
            this.speakLeet()},1000)
        },


  speakLeet () {
    console.log(`1337 15 4W350M3`)
  }  
};



let button = document.querySelector('button')

button.addEventListener('click', function () {
  console.log(this) // button
})