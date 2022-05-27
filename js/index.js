document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-contacto").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("contact-name").value;
    if (nombre.length == 0) {
        document.getElementById("contact-name").style.borderColor = "red";
        document.getElementById("contact-name").focus();
        alert("Por favor ingrese su nombre");
        return;
    } else {
        document.getElementById("contact-name").style.borderColor = "#1ab188";
    }

    var email = document.getElementById("email").value;
    if (email.length == 0) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").focus();
        alert("Por favor ingrese su email");
        return;
    }
    if (email.includes("@")) {
        document.getElementById("email").style.borderColor = "#1ab188";
    } else {
        document.getElementById("email").focus();
        document.getElementById("email").style.borderColor = "red";
        alert("Por favor ingrese un email válido");
        return;
    }
    var asunto = document.getElementById("asunto").value;
    if (asunto.length == 0) {
        document.getElementById("asunto").style.borderColor = "red";
        document.getElementById("asunto").focus();
        alert("Por favor ingrese un asunto");
        return;
    } else {
        document.getElementById("asunto").style.borderColor = "#1ab188";
    }

    var mensaje = document.getElementById("mensaje").value;
    if (mensaje.length == 0) {
        document.getElementById("mensaje").style.borderColor = "red";
        alert("Por favor ingrese su consulta");
        document.getElementById("mensaje").focus();
        return;
    } else {
        document.getElementById("mensaje").style.borderColor = "#1ab188";
    }
    this.submit();

    alert("Tu mensaje ha sido enviado. Gracias por contactarte con Vinoteca Mediterraneo!");


}
