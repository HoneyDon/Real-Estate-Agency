<script>
  const header = document.querySelector('.color-changing-header');
  const content = document.querySelector('.content');
  
  const colorStart = [255, 255, 255]; // Starting color (white)
  const colorEnd = [0, 0, 0]; // Ending color (black)
  const scrollHeight = content.clientHeight - window.innerHeight;

  function changeBackgroundColor() {
    const scrollPercentage = window.scrollY / scrollHeight;
    const color = colorStart.map((start, index) =>
      Math.round(start - (start - colorEnd[index]) * scrollPercentage)
    );
    header.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }

  window.addEventListener('scroll', changeBackgroundColor);
</script>
