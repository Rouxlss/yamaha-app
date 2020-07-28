
var btnRegister = document.getElementById("botonModal");
var btnSesion = document.getElementById("botonModal2");

var modalRegistro = document.getElementById("ventanaRegistro");
var modalSesion = document.getElementById("ventanaSesion");

var back1 = document.getElementById("back-register");
var back2 = document.getElementById("back-sesion");

var letrasTitulo = document.getElementById("title-login");

function bajar1 () {
    modalRegistro.classList.remove("animation-modal");
    letrasTitulo.classList.remove("animation-letter");
}

function bajar2 () {
    modalSesion.classList.remove("animation-modal");
    letrasTitulo.classList.remove("animation-letter");
}

btnRegister.addEventListener('click', function() {
    modalRegistro.classList.add("animation-modal");
    letrasTitulo.classList.add("animation-letter");
});

back1.addEventListener('click', function() {
    bajar1();
});

btnSesion.addEventListener('click', function() {
    modalSesion.classList.add("animation-modal");
    letrasTitulo.classList.add("animation-letter");
});

back2.addEventListener('click', function() {
    bajar2();
});

