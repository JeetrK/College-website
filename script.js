// ===== Smooth Scroll for Nav Links =====
// Source: MDN docs on scrollIntoView
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Toggle Extra Info in Hero =====
const learnMoreBtn = document.getElementById('learnMoreBtn');
const extraInfo = document.getElementById('extraInfo');

learnMoreBtn.addEventListener('click', () => {
  extraInfo.classList.toggle('d-none');
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (contactForm.checkValidity()) {
    formMessage.classList.remove('d-none');
    contactForm.reset();
  }
});

// ===== Fade-in on Scroll =====
const fadeSections = document.querySelectorAll('.fade-section');

function handleScroll() {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
