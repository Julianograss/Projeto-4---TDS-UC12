/* ================= LÓGICA DO CARROSSEL PADRÃO (Arrastar para o lado) ================= */
document.querySelectorAll(".carrossel:not(#banner-lancamentos)").forEach((carrossel) => {
  // Mantenha aqui a sua lógica antiga de deslizar (translateX) para os carrosseis de baixo
  const track = carrossel.querySelector(".track");
  const produtos = carrossel.querySelectorAll(".produto");
  const anterior = carrossel.querySelector(".anterior");
  const proximo = carrossel.querySelector(".proximo");
  
  if(!track || !produtos.length) return;

  let indice = 0;

  function colunasVisiveis() {
    const larguraCarrossel = carrossel.clientWidth;
    const larguraProduto = produtos[0].offsetWidth + 20; 
    return Math.max(1, Math.floor(larguraCarrossel / larguraProduto));
  }

  function atualizar() {
    const largura = produtos[0].offsetWidth + 20;
    track.style.transform = `translateX(-${indice * largura}px)`;
  }

  proximo.addEventListener("click", () => {
    const visiveis = colunasVisiveis();
    if (indice >= produtos.length - visiveis) {
      indice = 0; 
    } else {
      indice++;
    }
    atualizar();
  });

  anterior.addEventListener("click", () => {
    const visiveis = colunasVisiveis();
    if (indice <= 0) {
      indice = produtos.length - visiveis;
    } else {
      indice--;
    }
    atualizar();
  });

  window.addEventListener("resize", atualizar);
});

/* ================= LÓGICA DO BANNER DE LANÇAMENTOS (Crossfade) ================= */
let slideAtualBanner = 0;
const slidesBanner = document.querySelectorAll('#banner-lancamentos .slide');

function mudarSlideBanner(direcao) {
    if (slidesBanner.length === 0) return;
    
    // Remove a classe 'ativo' do slide atual
    slidesBanner[slideAtualBanner].classList.remove('ativo');
    
    // Atualiza o índice
    slideAtualBanner += direcao;
    
    // Faz o loop infinito
    if (slideAtualBanner >= slidesBanner.length) {
        slideAtualBanner = 0;
    } else if (slideAtualBanner < 0) {
        slideAtualBanner = slidesBanner.length - 1;
    }
    
    // Adiciona a classe 'ativo' no novo slide
    slidesBanner[slideAtualBanner].classList.add('ativo');
}