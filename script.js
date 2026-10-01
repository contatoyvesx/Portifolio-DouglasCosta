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

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px' });

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

const isMobile = window.matchMedia('(max-width: 800px)').matches;

if (isMobile && 'IntersectionObserver' in window) {
  const activeGroups = [
    ...document.querySelectorAll('.skills-grid .skill-group'),
    ...document.querySelectorAll('.projects .project')
  ];

  const activeObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visible.length) return;

    const group = visible[0].target.parentElement;
    const siblings = group ? [...group.children] : [];
    siblings.forEach(item => item.classList.remove('is-active'));
    visible[0].target.classList.add('is-active');
  }, {
    threshold: [0.15, 0.35, 0.55, 0.75],
    rootMargin: '-25% 0px -45% 0px'
  });

  activeGroups.forEach((item, index) => {
    activeObserver.observe(item);
    if (index === 0) item.classList.add('is-active');
  });
}