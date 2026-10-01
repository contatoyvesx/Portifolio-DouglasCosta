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

const translations = {
  pt: {
    'nav.about':'Sobre','nav.projects':'Projetos','nav.experience':'Experiências','nav.skills':'Competências','nav.contact':'Contato',
    'hero.availability':'Disponível para oportunidades','hero.eyebrow':'TECNOLOGIA • DADOS • DESENVOLVIMENTO',
    'hero.locationLabel':'local','hero.courseLabel':'curso','hero.course':'Ciência da Computação, 7º semestre','hero.collegeLabel':'faculdade',
    'hero.projectsButton':'Ver projetos','hero.contactButton':'Entrar em contato',
    'terminal.tech':'Tecnologia & Desenvolvimento','terminal.web':'Desenvolvimento web','terminal.api':'APIs & automação','terminal.data':'Projetos de dados','terminal.status':'construindo soluções',
    'sections.about':'SOBRE','sections.projects':'PROJETOS','sections.experience':'EXPERIÊNCIAS','sections.skills':'COMPETÊNCIAS','sections.contact':'CONTATO',
    'about.title':'Da resolução de problemas ao desenvolvimento.',
    'about.p1':'Minha trajetória em tecnologia começou próxima do usuário e da infraestrutura, resolvendo problemas do dia a dia. Essa experiência me levou a buscar cada vez mais automação, desenvolvimento e análise de dados.',
    'about.p2':'Hoje construo projetos próprios e soluções para negócios, unindo visão prática, programação e entendimento do problema de negócio.',
    'about.stat1':'Experiência corporativa','about.stat2':'Projetos publicados','about.stat3':'Projetos em Python e SQL',
    'projects.title':'Projetos que mostram o que eu sei fazer.',
    'experience.title':'Experiência que conecta suporte, tecnologia e negócio.','experience.bradesco':'Atuação no time de indicadores, com extração de dados da camada Bronze, realização de pequenos tratamentos e preparação das informações para análise e geração de indicadores. Experiência também em TI, com foco em suporte corporativo, gestão de acessos, atendimento de demandas internas e resolução de incidentes.','experience.sptrans':'Atuação em suporte técnico N2 em ambiente corporativo, realizando manutenção e configuração de equipamentos, diagnóstico e resolução de falhas de hardware e software, instalação de sistemas, atendimento aos usuários, troubleshooting e acompanhamento de chamados técnicos.','experience.fini':'Atuação em suporte técnico, manutenção de equipamentos, diagnóstico de falhas, instalação de sistemas e atendimento aos usuários, contribuindo para o funcionamento eficiente dos recursos de TI da operação.',
    'projects.creditRisk':'Pipeline de ciência de dados aplicado a risco de crédito: tratamento, análise exploratória, engenharia de atributos, modelagem e estimativa de probabilidade de inadimplência.',
    'projects.crypto':'Pipeline ETL que coleta dados de uma API de criptomoedas, transforma e estrutura informações como preço, market cap, volume e variação, preparando os dados para análise.',
    'projects.whatsapp':'Automação desenvolvida para a Ilha do Paraíso, conectando WhatsApp, n8n e Inteligência Artificial para criar um agente capaz de atender e automatizar conversas.',
    'projects.servicenow':'Aplicação desenvolvida no ServiceNow para conectar alunos, professores e TI. Professores lançam notas e solicitam suporte, enquanto o TI recebe, acompanha e resolve as demandas.',

    'sections.education':'FORMAÇÃO & CURSOS','education.title':'Formação acadêmica e aprendizado contínuo.','education.kicker':'FORMAÇÃO ACADÊMICA','education.degree':'Ciência da Computação','education.institution':'São Judas Tadeu','education.status':'EM ANDAMENTO','education.ongoing':'Em andamento','education.completed':'Concluídos','education.certification':'CERTIFICAÇÃO',
    'courses.dataPython':'Ciência de Dados e Python','courses.sql':'SQL para Análise de Dados','courses.llm':'Fundamentos de Modelo de Linguagem de Grande Escala','courses.agility':'Agilidade','courses.scrum':'Scrum','courses.po':'Product Owner','courses.servicenow':'ServiceNow','courses.powerbi':'Fundamentos de Power BI','courses.informatica':'Informática','courses.admin':'Administração',    'skills.title':'Stack que uso para construir soluções.','skills.devTitle':'Desenvolvimento','skills.devDesc':'Construção de aplicações e integrações web, do frontend às APIs.',
    'skills.dataTitle':'Dados','skills.dataDesc':'Tratamento, análise e preparação de dados para apoiar decisões e modelos.','skills.dataTag':'Análise de dados',
    'skills.toolsTitle':'Ferramentas','skills.toolsDesc':'Ferramentas para publicar, integrar e manter projetos funcionando.',
    'contact.title':'Tem um projeto ou oportunidade?','contact.intro':'Estou aberto a conversar sobre oportunidades em tecnologia, desenvolvimento, dados e projetos digitais.',
    'contact.label':'FALE COMIGO','contact.email':'E-mail','contact.button':'Entrar em contato','footer.location':'São Paulo, Brasil'
  },
  en: {
    'nav.about':'About','nav.projects':'Projects','nav.experience':'Experience','nav.skills':'Skills','nav.contact':'Contact',
    'hero.availability':'Open to opportunities','hero.eyebrow':'TECHNOLOGY • DATA • DEVELOPMENT',
    'hero.locationLabel':'location','hero.courseLabel':'degree','hero.course':'Computer Science, 7th semester','hero.collegeLabel':'university',
    'hero.projectsButton':'View projects','hero.contactButton':'Get in touch',
    'terminal.tech':'Technology & Development','terminal.web':'Web development','terminal.api':'APIs & automation','terminal.data':'Data projects','terminal.status':'building solutions',
    'sections.about':'ABOUT','sections.projects':'PROJECTS','sections.experience':'EXPERIENCE','sections.skills':'SKILLS','sections.contact':'CONTACT',
    'about.title':'From solving problems to building solutions.',
    'about.p1':'My journey in technology started close to users and infrastructure, solving day-to-day problems. That experience led me toward automation, development and data analysis.',
    'about.p2':'Today I build personal projects and business solutions, combining practical thinking, programming and an understanding of business needs.',
    'about.stat1':'Corporate experience','about.stat2':'Published projects','about.stat3':'Python & SQL projects',
    'projects.title':'Projects that show what I can build.',
    'experience.title':'Experience connecting support, technology and business.','sections.education':'EDUCATION & COURSES','education.title':'Academic background and continuous learning.','education.kicker':'ACADEMIC BACKGROUND','education.degree':'Computer Science','education.institution':'São Judas Tadeu','education.status':'IN PROGRESS','education.ongoing':'In progress','education.completed':'Completed','education.certification':'CERTIFICATION','courses.dataPython':'Data Science and Python','courses.sql':'SQL for Data Analysis','courses.llm':'Large Language Model Fundamentals','courses.agility':'Agility','courses.scrum':'Scrum','courses.po':'Product Owner','courses.servicenow':'ServiceNow','courses.powerbi':'Power BI Fundamentals','courses.informatica':'Computer Skills','courses.admin':'Administration',
    'experience.bradesco':'Worked with the indicators team, extracting data from the Bronze layer, performing small data treatments and preparing information for analysis and indicator generation. Also experienced in IT, focusing on corporate support, access management, internal requests and incident resolution.','experience.sptrans':'N2 technical support in a corporate environment, including equipment maintenance and configuration, hardware and software troubleshooting, system installation, user support and technical ticket follow-up.','experience.fini':'Technical support, equipment maintenance, issue diagnosis, system installation and user support, contributing to the efficient operation of IT resources.',
    'projects.creditRisk':'Data science pipeline for credit risk: data treatment, exploratory analysis, feature engineering, modeling and probability of default estimation.',
    'projects.crypto':'ETL pipeline that collects cryptocurrency data from an API, transforms and structures metrics such as price, market cap, volume and change for analysis.',
    'projects.whatsapp':'Automation developed for Ilha do Paraíso, connecting WhatsApp, n8n and AI to create an agent capable of handling and automating conversations.',
    'projects.servicenow':'ServiceNow application connecting students, professors and IT. Professors can manage grades and request support, while IT receives, tracks and resolves requests.',
    'skills.title':'The stack I use to build solutions.','skills.devTitle':'Development','skills.devDesc':'Building web applications and integrations, from frontend interfaces to APIs.',
    'skills.dataTitle':'Data','skills.dataDesc':'Data processing, analysis and preparation to support decisions and models.','skills.dataTag':'Data analysis',
    'skills.toolsTitle':'Tools','skills.toolsDesc':'Tools used to deploy, integrate and keep projects running.',
    'contact.title':'Have a project or opportunity?','contact.intro':'I am open to conversations about opportunities in technology, development, data and digital projects.',
    'contact.label':'GET IN TOUCH','contact.email':'E-mail','contact.button':'Get in touch','footer.location':'São Paulo, Brazil'
  },
  es: {
    'nav.about':'Sobre mí','nav.projects':'Proyectos','nav.experience':'Experiencia','nav.skills':'Habilidades','nav.contact':'Contacto',
    'hero.availability':'Disponible para oportunidades','hero.eyebrow':'TECNOLOGÍA • DATOS • DESARROLLO',
    'hero.locationLabel':'ubicación','hero.courseLabel':'carrera','hero.course':'Ciencias de la Computación, 7.º semestre','hero.collegeLabel':'universidad',
    'hero.projectsButton':'Ver proyectos','hero.contactButton':'Contactarme',
    'terminal.tech':'Tecnología y Desarrollo','terminal.web':'Desarrollo web','terminal.api':'APIs y automatización','terminal.data':'Proyectos de datos','terminal.status':'construyendo soluciones',
    'sections.about':'SOBRE MÍ','sections.projects':'PROYECTOS','sections.experience':'EXPERIENCIA','sections.skills':'HABILIDADES','sections.contact':'CONTACTO',
    'about.title':'De resolver problemas a desarrollar soluciones.',
    'about.p1':'Mi trayectoria en tecnología comenzó cerca de usuarios e infraestructura, resolviendo problemas del día a día. Esa experiencia me llevó hacia la automatización, el desarrollo y el análisis de datos.',
    'about.p2':'Hoy construyo proyectos propios y soluciones para negocios, combinando visión práctica, programación y comprensión de las necesidades del negocio.',
    'about.stat1':'Experiencia corporativa','about.stat2':'Proyectos publicados','about.stat3':'Proyectos en Python y SQL',
    'projects.title':'Proyectos que muestran lo que sé hacer.',
    'experience.title':'Experiencia que conecta soporte, tecnología y negocio.','sections.education':'FORMACIÓN Y CURSOS','education.title':'Formación académica y aprendizaje continuo.','education.kicker':'FORMACIÓN ACADÉMICA','education.degree':'Ciencia de la Computación','education.institution':'São Judas Tadeu','education.status':'EN CURSO','education.ongoing':'En curso','education.completed':'Completados','education.certification':'CERTIFICACIÓN','courses.dataPython':'Ciencia de Datos y Python','courses.sql':'SQL para Análisis de Datos','courses.llm':'Fundamentos de Modelos de Lenguaje de Gran Escala','courses.agility':'Agilidad','courses.scrum':'Scrum','courses.po':'Product Owner','courses.servicenow':'ServiceNow','courses.powerbi':'Fundamentos de Power BI','courses.informatica':'Informática','courses.admin':'Administración',
    'experience.bradesco':'Actuación en el equipo de indicadores, con extracción de datos de la capa Bronze, pequeños tratamientos y preparación de la información para análisis y generación de indicadores. Experiencia también en TI, con foco en soporte corporativo, gestión de accesos, atención de demandas internas y resolución de incidentes.','experience.sptrans':'Soporte técnico N2 en un entorno corporativo, con mantenimiento y configuración de equipos, diagnóstico de fallos de hardware y software, instalación de sistemas, atención a usuarios y seguimiento de incidencias.','experience.fini':'Soporte técnico, mantenimiento de equipos, diagnóstico de fallos, instalación de sistemas y atención a usuarios, contribuyendo al funcionamiento eficiente de los recursos de TI.',
    'projects.creditRisk':'Pipeline de ciencia de datos aplicado al riesgo crediticio: tratamiento, análisis exploratorio, ingeniería de variables, modelado y estimación de probabilidad de impago.',
    'projects.crypto':'Pipeline ETL que recopila datos de criptomonedas mediante una API, transforma y estructura métricas como precio, capitalización, volumen y variación para su análisis.',
    'projects.whatsapp':'Automatización desarrollada para Ilha do Paraíso, conectando WhatsApp, n8n e IA para crear un agente capaz de atender y automatizar conversaciones.',
    'projects.servicenow':'Aplicación desarrollada en ServiceNow para conectar estudiantes, profesores y TI. Los profesores gestionan las notas y solicitan soporte, mientras TI recibe, sigue y resuelve las solicitudes.',
    'skills.title':'El stack que uso para construir soluciones.','skills.devTitle':'Desarrollo','skills.devDesc':'Construcción de aplicaciones e integraciones web, desde el frontend hasta las APIs.',
    'skills.dataTitle':'Datos','skills.dataDesc':'Tratamiento, análisis y preparación de datos para apoyar decisiones y modelos.','skills.dataTag':'Análisis de datos',
    'skills.toolsTitle':'Herramientas','skills.toolsDesc':'Herramientas para publicar, integrar y mantener los proyectos funcionando.',
    'contact.title':'¿Tienes un proyecto u oportunidad?','contact.intro':'Estoy abierto a conversar sobre oportunidades en tecnología, desarrollo, datos y proyectos digitales.',
    'contact.label':'HABLEMOS','contact.email':'E-mail','contact.button':'Contactarme','footer.location':'São Paulo, Brasil'
  }
};

const languageButtons = document.querySelectorAll('.language-button');

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.pt;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en' : 'es';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  languageButtons.forEach(button => button.classList.toggle('is-active', button.dataset.lang === lang));
  localStorage.setItem('portfolio-language', lang);
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem('portfolio-language') || 'pt';
applyLanguage(savedLanguage);

const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  if (themeIcon) themeIcon.textContent = isLight ? '☀' : '☾';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
  }
  localStorage.setItem('portfolio-theme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light');
  });
}

applyTheme(localStorage.getItem('portfolio-theme') || 'dark');

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

    cards.forEach(card => card.classList.toggle('is-active', card === closestCard));
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

/* Copiar dados de contato */
document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    const originalText = button.textContent;

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'Copiado!';
      button.classList.add('is-copied');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      textArea.remove();

      button.textContent = 'Copiado!';
      button.classList.add('is-copied');
    }

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('is-copied');
    }, 1600);
  });
});
