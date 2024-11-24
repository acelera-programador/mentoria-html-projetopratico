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

fetchRepositorios();

function fetchRepositorios() {
  const url = 'https://api.github.com/users/joaovdscostal/repos';

  fetch(url)
    .then((response) => response.json())
    .then(function (repositorios) {
      const repoList = document.getElementById('repositorio-list');

      repositorios.forEach((repositorio) => {
        const elementoMontado = `<div class="projeto-git">
          <div><b>${repositorio.name}</b><br />${
          repositorio.description ?? 'Sem descrição'
        }</div>
          <div class="botao-acesso"><a href="${
            repositorio.html_url
          }" target="_blank" class="button">Acessar</a></div>
        </div>`;

        repoList.innerHTML += elementoMontado;
      });
    })
    .catch((err) => console.error(err));
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('active');
});
