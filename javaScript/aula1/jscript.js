
function criarParagrafo() {
  let para = document.createElement('p');
  para.textContent = 'Você clicou no botão!';
  document.body.appendChild(para);
}

const botao = document.getElementById('bot');

botao.addEventListener('click', criarParagrafo);
