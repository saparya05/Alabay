const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function slideCarousel(direction) {
  const totalItems = items.length;
  const visibleItems = 3; // Number of visible items (3 in this case)
  const itemsToMove = 1; // Number of items to move per slide

  if (direction === 'next') {
    currentIndex += itemsToMove;
    if (currentIndex + visibleItems > totalItems) currentIndex = 0; // Loop back to the beginning
  } else if (direction === 'prev') {
    currentIndex -= itemsToMove;
    if (currentIndex < 0) currentIndex = totalItems - visibleItems; // Loop back to the end
  }

  const translateX = -(currentIndex * 100) / visibleItems; // Calculate translateX
  track.style.transform = `translateX(${translateX}%)`;
}

// Example of sliding on button click
document.querySelector('.next-button').addEventListener('click', () => slideCarousel('next'));
document.querySelector('.prev-button').addEventListener('click', () => slideCarousel('prev'));
