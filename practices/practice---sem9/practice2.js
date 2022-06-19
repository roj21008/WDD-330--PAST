/*const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
cancelAnimationFrame(id);
*/


localStorage.setItem('name', 'Walter White');
console.table('name');
localStorage.removeItem('name');

navigator.geolocation.getCurrentPosition(youAreHere);
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`); 

}
const id = navigator.geolocation.watchPosition(youAreHere);