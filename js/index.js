document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const backgroundTransition = document.getElementById("background-transition"); // Get the background transition element

  function changeBackgroundColor() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        const backgroundColor = window.getComputedStyle(section).backgroundColor;
        backgroundTransition.style.transition = "background-color 0.5s ease"; // Add this line
        backgroundTransition.style.backgroundColor = backgroundColor;
      }
    });
  }

  window.addEventListener("scroll", changeBackgroundColor);
});
