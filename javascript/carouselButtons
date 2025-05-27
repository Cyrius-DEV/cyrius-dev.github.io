<script>
  document.querySelectorAll('.carousel-container').forEach((container) => {
    const slide = container.querySelector('.carousel-slide');
    const images = slide.querySelectorAll('img');
    let currentIndex = 0;

    container.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    container.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  });
</script>
