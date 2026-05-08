document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menuMobile = document.getElementById('menuMobile');
  const header = document.getElementById('header');

  // Menu Mobile
  menuToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('ativo');
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
      if (menuMobile.classList.contains('ativo')) {
        if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (index === 1) span.style.opacity = '0';
        if (index === 2) span.style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        span.style.transform = 'none';
        span.style.opacity = '1';
      }
    });
  });

  // Fechar menu mobile ao clicar em link
  document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.classList.remove('ativo');
      menuToggle.querySelectorAll('span').forEach(span => {
        span.style.transform = 'none';
        span.style.opacity = '1';
      });
    });
  });

  // Header Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Scroll de Serviços
  const grid = document.querySelector('.servicos-grid');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');

  if (grid && btnPrev && btnNext) {
    btnNext.addEventListener('click', () => {
      grid.scrollBy({ left: 350, behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
      grid.scrollBy({ left: -350, behavior: 'smooth' });
    });

    grid.addEventListener('scroll', () => {
      btnPrev.classList.toggle('hidden', grid.scrollLeft <= 10);
      btnNext.classList.toggle('hidden', grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10);
    });
  }

  // Intersection Observer para Reveal
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});
