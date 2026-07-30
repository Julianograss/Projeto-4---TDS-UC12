let produtoAtual = 0;

// Pegamos todos os elementos HTML que têm a classe 'slide'
const produtos = document.querySelectorAll(".produto");

function mudarSlide(direcao) {
  // 1. Removemos a classe 'ativo' do slide atual, fazendo ele sumir (fade out)
  produtos[produtoAtual].classList.remove("ativo");

  // 2. Atualizamos o número do slide somando a direção (-1 ou +1)
  produtoAtual += direcao;

  // 3. Regras para criar o "Loop Infinito"
  if (produtoAtual >= produtos.length) {
    // Se passou do último, volta pro primeiro
    produtoAtual = 0;
  } else if (produtoAtual < 0) {
    // Se voltou do primeiro, vai pro último
    produtoAtual = produtos.length - 1;
  }

  // 4. Adicionamos a classe 'ativo' no novo slide, fazendo ele aparecer (fade in)
  produtos[produtoAtual].classList.add("ativo");
}
