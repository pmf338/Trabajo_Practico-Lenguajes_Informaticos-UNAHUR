const form = document.getElementById('form-contacto');
const msgAdhesion = document.getElementById('msg-adhesion');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato válido para email

const validarEmail = (email) => {
    return emailRegex.test(email);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const camposVacios = [nombre, email, mensaje].filter(campo => campo === "").length;

    if (camposVacios > 1) {
        msgAdhesion.textContent = "Hay campos que faltan completar";
        msgAdhesion.className = "error";
        return;
    }

    if (!nombre) {
        msgAdhesion.textContent = "Ingresá tu nombre";
        msgAdhesion.className = "error";
        return;
    }

    if (!email) {
        msgAdhesion.textContent = "Ingresá tu dirección de correo electrónico";
        msgAdhesion.className = "error";
        return;
    }

    if (!validarEmail(email)) {
        msgAdhesion.textContent = "Ingresá un formato de correo electrónico válido";
        msgAdhesion.className = "error";
        return;
    }

    if (!mensaje) {
        msgAdhesion.textContent = "Escribí tu mensaje";
        msgAdhesion.className = "error";
        return;
    }

    msgAdhesion.textContent = `¡Gracias ${nombre} por mandarnos tu mensaje!`;
    msgAdhesion.className = "exito";
    form.reset();
});