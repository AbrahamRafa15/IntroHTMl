function generaMensaje(){
    var nombre = document.forms["myForm"]["nombre"].value;
    var apellidos = document.forms["myForm"]["Apellidos"].value;
    var genero = document.forms["myForm"]["genero"].value;
    if (genero === "Masculino"){
        return "Gracias Sr. " + nombre + " " + apellidos + " por el interés en nuestros seguros";
    }
    else{
        return "Gracias Sra. " + nombre + " " + apellidos + " por el interés en nuestros seguros";
    }
    
}