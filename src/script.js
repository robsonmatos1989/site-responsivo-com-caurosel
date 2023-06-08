const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemWidth = carouselItems[0].offsetWidth;
let currentIndex = 0;

function slideTo(index) {
  carousel.style.transform = `translateX(-${itemWidth * index}px)`;
  currentIndex = index;
}

document.addEventListener('DOMContentLoaded', () => {
  slideTo(currentIndex);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && currentIndex < carouselItems.length - 1) {
    slideTo(currentIndex + 1);
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    slideTo(currentIndex - 1);
  }
});
