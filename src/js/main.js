
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

