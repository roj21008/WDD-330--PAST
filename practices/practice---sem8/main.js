var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
var image = document.getElementById("myImageElem");

/*context.fillRect(10, 10, 100, 100); 
context.strokeRect(10, 10, 100, 100);*/

//dibujando un rectangulo
/*function drawPattern() {
    var img = new Image();
    img.src = "images/bike.jpg";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 250, 200);                  
    context.strokeRect(10, 10, 250, 200);             
    };
}*/

//dibujando un circulo
/*function drawCircle() {
    
    context.beginPath();
    context.arc(100, 100, 80, 8, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}
drawCircle();*/

window.addEventListener("load", drawImageToCanvas, false);


//tener una imagen de afuera y colocarla dentro del canvas
function drawImageToCanvas() {
   
    
    //context.drawImage(image,50,50);   //con esto dibujo la imagen
    var imageData = context.getImageData(0, 0, 1, 1);
    var pixelData = imageData.data;
    console.log(pixelData.length);
};


function manipulateImage() {
       
    context.drawImage(image, 50, 50);

    var imageData = context.getImageData(0, 0, 200, 200);
    
    var red, green, blue, grayscale;
    
    for (var i = 0; i < imageData.data.length; i += 4) {
    red = imageData.data[i];
    green = imageData.data[i + 1];
    blue = imageData.data[i + 2];

    var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;

    imageData.data[i] = grayscale; 
    imageData.data[i + 1] = grayscale;  
    imageData.data[i + 2] = grayscale;
    }
    context.putImageData(imageData, 0, 0);
}
manipulateImage();