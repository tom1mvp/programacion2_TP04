// Script para calificar cada publicación

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".fa-star");

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      const rating = index + 1;

      stars.forEach((s, i) => {
        if (i < rating) {
          s.classList.add("checked");
        } else {
          s.classList.remove("checked");
        }
      });
    });
  });
});