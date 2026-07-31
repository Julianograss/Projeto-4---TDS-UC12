document.querySelectorAll(".carrossel").forEach((carrossel) => {
  const track = carrossel.querySelector(".track");
  const produtos = carrossel.querySelectorAll(".produto");
  const anterior = carrossel.querySelector(".anterior");
  const proximo = carrossel.querySelector(".proximo");
  let indice = 0;
  function produtosVisiveis() {

    const larguraCarrossel = carrossel.clientWidth;
    const larguraProduto = produtos[0].offsetWidth + 20; // gap

    return Math.floor(larguraCarrossel / larguraProduto);

}
  function atualizar() {
    const largura = produtos[0].offsetWidth + 20;

    track.style.transform = `translateX(-${indice * largura}px)`;
  }
  proximo.addEventListener("click", () => {
    const visiveis = produtosVisiveis();
    if (indice >= produtos.length - visiveis) {
      indice = 0; 
    } else {
      indice++;
    }
    atualizar();
  });

  anterior.addEventListener("click", () => {
    const visiveis = produtosVisiveis();
    if (indice <= 0) {
      indice = produtos.length - visiveis;
    } else {
      indice--;
    }
    atualizar();
  });

  window.addEventListener("resize", atualizar());
});
