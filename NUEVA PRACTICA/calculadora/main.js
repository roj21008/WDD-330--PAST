window.addEventListener("load",() =>{//escuchamos cuanod se carga el documento
    
    //creamos 2 constantes y guardaos el elemento que necesitamos
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName("keypad-button");
    
    //convertimos el html conecction a un array
    const keypadButtonsArray = Array.from(keypadButtons);
    
    //Iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach((button) =>{
        //a cada boton le agrega un listener
        button.addEventListener("click", ()=>{
            //calculadora(button.display);
            console.log(button.innerHTML)
            calculadora(button,display)
            
        })
        })

})

function calculadora(button, display){
    switch (button.innerHTML) {
        case "C":
            borrar(display);
            break;
        
        case "=":
            calcular(display);
            break;
            
        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML) /*Tomar el string y resolverlo*/

}

function actualizar(display,button){
    if (display.innerHTML == 0) {
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML   ;
}

function borrar(display){
    display.innerHTML = 0
}
