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

if (isMobile) {
  const skillCards = [...document.querySelectorAll('.skills-grid .skill-group')];
  const projectCards = [...document.querySelectorAll('.projects .project')];

  function updateActiveCard(cards) {
    if (!cards.length) return;

    const focusLine = window.innerHeight * 0.48;
    let closestCard = cards[0];
    let closestDistance = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(cardCenter - focusLine);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    cards.forEach(card => {
      card.classList.toggle('is-active', card === closestCard);
    });
  }

  let ticking = false;

  function handleScroll() {
    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {
      updateActiveCard(skillCards);
      updateActiveCard(projectCards);
      ticking = false;
    });
  }

  skillCards[0]?.classList.add('is-active');
  projectCards[0]?.classList.add('is-active');

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });

  handleScroll();
}