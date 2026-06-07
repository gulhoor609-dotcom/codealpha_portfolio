// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    if(pageYOffset >= secTop - 100) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if(a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

