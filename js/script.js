const mostrarMaisBtn = document.getElementById('mostrarMais');
const textoAdicional = document.getElementById('textoAdicional');

mostrarMaisBtn.addEventListener('click', function () {
  if (textoAdicional.style.display == 'none') {
    textoAdicional.style.display = 'block';
    mostrarMaisBtn.textContent = 'Mostar Menos';
  } else {
    textoAdicional.style.display = 'none';
    mostrarMaisBtn.textContent = 'Mostar Mais';
  }
});

const botoesDeDetalhes = document.querySelectorAll('.detalhes');
botoesDeDetalhes.forEach(function (btn) {
  btn.addEventListener('click', function () {
    alert('Detalhes do projeto em breve!');
  });
});

const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', function (event) {
  event.preventDefault();

  alert(
    'Obrigado por entrar em contato! Entraremo em breve em contato com voce!'
  );

  formContato.reset();
});
