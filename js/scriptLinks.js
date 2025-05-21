const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // evita o reload da página (se quiser manter a navegação, pode tirar essa linha)
    navLinks.forEach(l => l.classList.remove('active')); // remove de todos
    this.classList.add('active'); // adiciona só no clicado
  });
});
