document.addEventListener("DOMContentLoaded", () => {
    const esMovil = window.innerWidth <= 768;
  
    // Selecciona todos los elementos visibles, excluyendo los del carrusel
    const elementos = Array.from(document.body.querySelectorAll("*")).filter(
      (el) => {
        const tag = el.tagName.toLowerCase();
        const enCarrusel = el.closest(".carousel");
        const enmenu = el.closest(".servicios");
        return (
          !["script", "style", "meta", "link", "head"].includes(tag) &&
          !enCarrusel
        );
      }
    );
  
    if (esMovil) {
      // Fade in elegante en móvil
      elementos.forEach((el) => {
        el.style.opacity = 0;
        el.style.transition = "opacity 1s ease-out";
        setTimeout(() => {
          el.style.opacity = 1;
        }, 200);
      });
    } else {
      // Animación perrona con scroll en desktop
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("mostrar");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
  
      elementos.forEach((el) => {
        el.classList.add("oculto");
        observer.observe(el);
      });
    }
  });
  