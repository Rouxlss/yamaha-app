
var btnRegister = document.getElementById("botonModal");
var btnSesion = document.getElementById("botonModal2");

var modalRegistro = document.getElementById("ventanaRegistro");
var modalSesion = document.getElementById("ventanaSesion");

var back1 = document.getElementById("back-register");
var back2 = document.getElementById("back-sesion");

var letrasTitulo = document.getElementById("title-login");

function subir() {
    modalRegistro.classList.add("animation-modal");
    letrasTitulo.classList.add("animation-letter");
}

function bajar() {
    modalRegistro.classList.remove("animation-modal");
    letrasTitulo.classList.remove("animation-letter");
}

btnRegister.addEventListener('click', function() {
    subir();
});

back1.addEventListener('click', function() {
    bajar()
});

btnSesion.addEventListener('click', function() {
    subir();
});

back2.addEventListener('click', function() {
    bajar()
});

