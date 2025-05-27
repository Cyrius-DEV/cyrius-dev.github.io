document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.carousel-container').forEach(container => {
    const slide = container.querySelector('.carousel-slide');
    const images = slide.querySelectorAll('img');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    let currentIndex = 0;

    function updateSlide() {
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    });
  });
});

