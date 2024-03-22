let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlide, 5000); // Change slide every 5 seconds
}

showSlide();