window.onload = function() {
    function generaMensaje() {
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("Apellidos").value;
        var generoSeleccionado = document.querySelector('input[name="genero"]:checked');

        var mensajeElemento = document.getElementById("mensaje");

        // Si falta algún dato, mostramos el mensaje por defecto
        if (!nombre || !apellidos || !generoSeleccionado) {
            mensajeElemento.textContent = " por interesarse en nuestros seguros.";
            return;
        }

        var titulo = (generoSeleccionado.value === "Masculino") ? "Sr." : "Sra.";
        var mensaje = "Hola " + titulo + " " + nombre + " " + apellidos;

        mensajeElemento.textContent = mensaje + " por interesarse en nuestros seguros.";
    }

    // Agregar eventos para actualizar el mensaje en tiempo real
    document.getElementById("nombre").addEventListener("input", generaMensaje);
    document.getElementById("Apellidos").addEventListener("input", generaMensaje);
    
    document.querySelectorAll('input[name="genero"]').forEach(function(radio) {
        radio.addEventListener("change", generaMensaje);
    });
};
