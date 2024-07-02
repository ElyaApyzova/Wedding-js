//menu

const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__open");
});



// accordion

const items = document.querySelectorAll(".questions__item-btn");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// Slider

const testimonials = document.querySelectorAll('.testimonials__items');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials[currentIndex].classList.remove('active');
  testimonials[index].classList.add('active');
  currentIndex = index;
}

document
  .querySelector('.testimonials__icons')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('prev')) {
      let index = currentIndex - 1;
      if (index < 0) {
        index = testimonials.length - 1;
      }
      showTestimonial(index);
    } else if (event.target.classList.contains('next')) {
      let index = currentIndex + 1;
      if (index >= testimonials.length) {
        index = 0;
      }
      showTestimonial(index);
    }
  });

showTestimonial(currentIndex);