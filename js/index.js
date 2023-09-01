document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".color-transition");

  function updateSectionBackground() {
    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      const scrollPercentage = Math.abs(rect.top / window.innerHeight);
      const backgroundColor = isVisible ? `rgba(0, 0, 0 ${scrollPercentage})` : "";

      section.style.backgroundColor = backgroundColor;
    });
  }

  window.addEventListener("scroll", updateSectionBackground);
});
