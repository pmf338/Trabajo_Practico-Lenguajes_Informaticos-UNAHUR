window.onload = function() {
    const boton = document.getElementById("btn-modo");

    if (boton) {
        boton.addEventListener("click", function() {
            document.body.classList.toggle("oscuro");
        });
    }
};