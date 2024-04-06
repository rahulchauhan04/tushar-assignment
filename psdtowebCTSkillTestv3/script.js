document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const dotsContainer = document.querySelector('.carousel-indicators');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000); // 3 seconds per slide

  // Create carousel indicators
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      moveToSlide(idx); // Move to slide on dot click
      updateActiveDot(idx); // Update the active dot
      resetInterval(); // Reset the automatic slide interval
    });
    dotsContainer.appendChild(dot);
  });

  function moveToSlide(slideIndex) {
    const track = document.querySelector('.carousel-track');
    const amountToMove = slideIndex * -100 + '%';
    track.style.transform = `translateX(${amountToMove})`;
    currentSlide = slideIndex;
  }

  function updateActiveDot(slideIndex) {
    const dots = Array.from(dotsContainer.children);
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    moveToSlide(nextIndex);
    updateActiveDot(nextIndex);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  }

  updateActiveDot(0); // Set the first dot as active
});

document.addEventListener('DOMContentLoaded', function () {
  const mountain1Link = document.getElementById('mountain1');
  const mountain2Link = document.getElementById('mountain2');
  const datesMountain1 = document.getElementById('datesMountain1');
  const datesMountain2 = document.getElementById('datesMountain2');

  mountain1Link.addEventListener('click', function (event) {
    event.preventDefault();
    setActiveMountain('mountain1');
  });

  mountain2Link.addEventListener('click', function (event) {
    event.preventDefault();
    setActiveMountain('mountain2');
  });

  function setActiveMountain(mountain) {
    if (mountain === 'mountain1') {
      datesMountain1.style.display = 'block';
      datesMountain2.style.display = 'none';
      mountain1Link.parentElement.classList.add('active');
      mountain2Link.parentElement.classList.remove('active');
    } else {
      datesMountain1.style.display = 'none';
      datesMountain2.style.display = 'block';
      mountain1Link.parentElement.classList.remove('active');
      mountain2Link.parentElement.classList.add('active');
    }
  }
});
