
const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText,oldText);





const heroes = document.getElementById('roster');
const superman = heroes.children[0];

superman.style.color = 'red';
superman.style.border = 'solid 2px red';