function mensaje(texto) {
    alert(texto);
}

interval_id = setInterval(mensaje, 2000, "Hola de intervalo");
timeout_id = setTimeout(mensaje, 5000, "Hola desde Timeout");

function cancelarTimeout(){
    clearTimeout(timeout_id);
}

function cancelarInterval() {
    clearInterval(interval_id);
}

function changeText(elementId) {
    var element = document.getElementById(elementId);
    element.innerHTML="12345678910";
}

function changeImage(imageId) {
    element = document.getElementById(imageId);
    if (element.src.match("daredevil")) {
        element.src = "imágenes/matt.jpg"
    }
    else{
        element.src = "imágenes/daredevil.jpg"
    }
}

function myFunction() {
    var y = document.getElementById("mess");
    y.innerHTML="";
    try {
        var x = document.getElementById("demo").value;
        if(x === "") throw "empty";
        if(isNaN(x)) throw "not a number";
        if(x>10) throw "too high";
        if(x<5) throw "too low";
    } catch(err){
        y.innerHTML="Error: " + err + ".";
    }
}

function increaseText(id){
    document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.charAt(0) + document.getElementById(id).innerHTML;
}

function upperCase(id){
    var text = document.getElementById(id);
    text.value = text.value.toUpperCase();
}

function eventMouseOver(obj) {
    obj.innerHTML = "Thank you!";
}

function eventMouseOut(obj){
    obj.innerHTML="Mouse over me";
}

