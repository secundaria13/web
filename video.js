// Seleccionar todos los elementos con la clase "animado" y almacenarlos en la variable "animado"
let animado = document.querySelectorAll(".animado");

// Definir una función llamada "mostrarScroll" que se ejecutará cuando se haga scroll en la página
function mostrarScroll() {
    // Obtener la posición actual del scroll vertical de la página
    let scrolltop = document.documentElement.scrollTop;

    // Iterar sobre todos los elementos con la clase "animado"
    for (var i = 0; i < animado.length; i++) {
        // Obtener la posición vertical del elemento actual con respecto al borde superior del documento
        let alturaAnimado = animado[i].offsetTop;

        // Verificar si el elemento está dentro del rango de visualización (700 píxeles antes de que el elemento entre en la pantalla)
        if (alturaAnimado - 700 < scrolltop) {
            // Si el elemento está dentro del rango de visualización, cambiar su opacidad a 1 (hacerlo visible)
            animado[i].style.opacity = 1;
            
            // Agregar una clase "mostrarArriba" al elemento, que probablemente tenga estilos de animación CSS asociados para mostrarlo de manera específica
            animado[i].classList.add("mostrarArriba");
        }
    }
}

// Escuchar el evento de scroll en la ventana y llamar a la función "mostrarScroll" cuando ocurra
window.addEventListener('scroll', mostrarScroll);