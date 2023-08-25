document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    function changeBackgroundColor() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          document.body.style.backgroundColor = section.style.backgroundColor;
        }
      });
    }
  
    window.addEventListener("scroll", changeBackgroundColor);
  });
  