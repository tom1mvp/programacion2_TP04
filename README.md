# READ ME 
Lee atentamente este archivo ya que contiene las instrucciones sobre cómo usar el script script01, el cual posee la información necesaria para tu sistema de calificación.
"document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".fa-star"); // "fa-star" es la clase de mi icono estrella

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      const rating = index + 1; // Detectamos si se hizo click en alguna estrella y obtenemos el total de estrellas seleccionadas

      stars.forEach((s, i) => {
        if (i < rating) {
          s.classList.add("checked");
        } else {
          s.classList.remove("checked");
        }
      });
    });
  });
});"

Explicación del código:

    Evento DOMContentLoaded: 
        Espera a que todo el contenido del DOM esté completamente cargado y procesado antes de ejecutar el script.

    Selección de estrellas: 
        const stars = document.querySelectorAll(".fa-star");: Selecciona todos los elementos con la clase fa-star, que son los íconos de estrellas.

    Manejo de click en estrellas:
        stars.forEach((star, index) => { ... });: Recorre cada estrella y añade un evento click.
        star.addEventListener("click", function () { ... });: Cuando se hace clic en una estrella, se ejecuta una función que:
            Calcula la calificación (rating) como el índice de la estrella clickeada más uno.
            Recorre nuevamente todas las estrellas para:
                Añadir la clase checked a las estrellas con índice menor que la calificación.
                Remover la clase checked de las estrellas con índice mayor o igual a la calificación.

Con este código, puedes detectar la cantidad de estrellas seleccionadas y actualizar visualmente la cantidad de estrellas que están marcadas.
