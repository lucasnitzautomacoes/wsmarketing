// WS Marketing - script.js
document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Marca link ativo
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Ano no rodapé
  var y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();

  // Formulário de contato (apenas feedback visual - site estático)
  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-msg');
      if (msg) {
        msg.classList.add('ok');
        msg.textContent = 'Mensagem registrada! Entraremos em contato pelo e-mail informado em breve. Para atendimento imediato, utilize o WhatsApp ou e-mail no rodapé.';
      }
      form.reset();
    });
  }
});
