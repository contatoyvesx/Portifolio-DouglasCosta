document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-menu');

if (menuToggle && siteMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  siteMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}