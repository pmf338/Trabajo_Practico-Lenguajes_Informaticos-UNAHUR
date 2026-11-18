// Mostrar/ocultar contenido: botones "Ver más" de lugares.html

const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

botonesVerMas.forEach((boton) => {
    boton.addEventListener("click", () => {
        // El contenido a desplegar es el div que indica aria-controls
        const infoExtra = document.getElementById(boton.getAttribute("aria-controls"));

        infoExtra.classList.toggle("oculto");

        const estaOculto = infoExtra.classList.contains("oculto");

        // Cambiamos el texto del botón según el estado
        boton.textContent = estaOculto ? "Ver más" : "Ver menos";
        boton.setAttribute("aria-expanded", String(!estaOculto));
    });
});
