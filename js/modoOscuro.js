window.onload = function () {

    const boton = document.getElementById("btn-modo");

    // Recuperar la preferencia guardada
    const modoGuardado = localStorage.getItem("modoOscuro");

    if (modoGuardado === "activado") {
        document.body.classList.add("oscuro");
    }

    // Activar o desactivar el modo oscuro
    if (boton) {
        boton.addEventListener("click", function () {

            document.body.classList.toggle("oscuro");

            if (document.body.classList.contains("oscuro")) {
                localStorage.setItem("modoOscuro", "activado");
            } else {
                localStorage.setItem("modoOscuro", "desactivado");
            }

        });
    }
};