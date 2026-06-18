
const botaoVoltarAoTopo = document.getElementById('voltarAoTopo');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    botaoVoltarAoTopo.classList.add('mostrar');
  } else {
    botaoVoltarAoTopo.classList.remove('mostrar');
  }
});

botaoVoltarAoTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const opcoesObservador = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('animar-entrada');
      observador.unobserve(entrada.target);
    }
  });
}, opcoesObservador);

document.addEventListener('DOMContentLoaded', () => {
  const artigos = document.querySelectorAll('article, #apresentacao');
  artigos.forEach(artigo => {
    observador.observe(artigo);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(ancora => {
  ancora.addEventListener('click', function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      alvo.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});



