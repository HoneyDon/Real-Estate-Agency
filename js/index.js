document.addEventListener('DOMContentLoaded', function () {
  const transitionSection = document.querySelector('.transition-section');
  const triggerScroll = 300; // Adjust this value based on when you want the transition to start

  function handleScroll() {
    if (window.scrollY >= triggerScroll) {
      transitionSection.classList.add('active');
    } else {
      transitionSection.classList.remove('active');
    }
  }

  window.addEventListener('scroll', handleScroll);
});
