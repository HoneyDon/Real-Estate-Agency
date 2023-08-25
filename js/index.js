document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let isScrolling = false;

  function changeBackgroundColor() {
    if (!isScrolling) {
      isScrolling = true;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          document.body.style.backgroundColor = section.style.backgroundColor;
        }
      });
      isScrolling = false;
    }
    requestAnimationFrame(changeBackgroundColor);
  }

  window.addEventListener("scroll", changeBackgroundColor);
});
