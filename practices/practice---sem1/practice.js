

//guardar_localstorage();
get_localstorage()
function get_localstorage(){
    if(localStorage.getItem('nombre')){
        let nombre = localStorage.getItem('nombre');
        let persona = JSON.parse(localStorage.getItem('persona'));
        console.log(nombre)
        console.log(persona);
    }
    else{
        console.log("No hay datos");
    }
    
}
function guardar_localstorage(){
    let persona  = {
        nombre : "Fernando",
        edad : 31,
        correo : "xyz@xyz.com",
        coords : {
            lat : 10,
            lon : -10
        }

    };
    
    let nombre = "Pedro";
    localStorage.setItem('nombre',nombre);
    localStorage.setItem('persona', JSON.stringify(persona))


}






