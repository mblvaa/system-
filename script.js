const links = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('section[id]');
const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-button');
const toTop = document.querySelector('.to-top');

menuButton?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

function updateActiveLink() {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });

  toTop?.classList.toggle('show', window.scrollY > 500);
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('load', updateActiveLink);

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
