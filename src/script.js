const produtosIniciais = [
  {
    id: 1,
    nome: "PC Gamer Nitro",
    preco: 4500.0,
    imagem: "src/res/pc.jpg",
    categoria: "Computadores",
  },
  {
    id: 2,
    nome: "Mouse Logitech G203",
    preco: 120.0,
    imagem: "src/res/mouse.jpg",
    categoria: "Periféricos",
  },
  {
    id: 3,
    nome: "Teclado Mecânico",
    preco: 350.0,
    imagem: "src/res/teclado.jpg",
    categoria: "Periféricos",
  },
  {
    id: 4,
    nome: 'Monitor LG 24"',
    preco: 900.0,
    imagem: "src/res/monitor.jpg",
    categoria: "Monitores",
  },
  {
    id: 5,
    nome: "Headset HyperX",
    preco: 250.0,
    imagem: "src/res/headset.jpg",
    categoria: "Áudio",
  },
  {
    id: 6,
    nome: "Placa de Vídeo RTX 3060",
    preco: 2500.0,
    imagem: "src/res/placa-video.jpg",
    categoria: "Componentes",
  },
  {
    id: 7,
    nome: "SSD Samsung 1TB",
    preco: 600.0,
    imagem: "src/res/ssd.jpg",
    categoria: "Armazenamento",
  },
  {
    id: 8,
    nome: "Fonte Corsair 650W",
    preco: 400.0,
    imagem: "src/res/fonte.jpg",
    categoria: "Componentes",
  },
  {
    id: 9,
    nome: "Notebook Dell Inspiron 15",
    preco: 4200.0,
    imagem: "src/res/notebook.jpg",
    categoria: "Computadores",
  },
  {
    id: 10,
    nome: "Smartphone Samsung Galaxy A56",
    preco: 1899.0,
    imagem: "src/res/smartphone.jpg",
    categoria: "Celulares e Tablets",
  },
  {
    id: 11,
    nome: "Tablet Lenovo Tab M11",
    preco: 1399.0,
    imagem: "src/res/tablet.jpg",
    categoria: "Celulares e Tablets",
  },
  {
    id: 12,
    nome: "Smartwatch Xiaomi Watch 2",
    preco: 799.0,
    imagem: "src/res/smartwatch.jpg",
    categoria: "Celulares e Tablets",
  },
  {
    id: 13,
    nome: "Fone Bluetooth JBL Tune 770NC",
    preco: 499.0,
    imagem: "src/res/fone-bluetooth.jpg",
    categoria: "Áudio",
  },
  {
    id: 14,
    nome: "Caixa de Som JBL Flip 6",
    preco: 699.0,
    imagem: "src/res/caixa-som.jpg",
    categoria: "Áudio",
  },
  {
    id: 15,
    nome: "Webcam Logitech C920",
    preco: 399.0,
    imagem: "src/res/webcam.jpg",
    categoria: "Periféricos",
  },
  {
    id: 16,
    nome: "Microfone HyperX SoloCast",
    preco: 329.0,
    imagem: "src/res/microfone.jpg",
    categoria: "Áudio",
  },
  {
    id: 17,
    nome: "Roteador TP-Link Archer AX23",
    preco: 499.0,
    imagem: "src/res/roteador.jpg",
    categoria: "Redes",
  },
  {
    id: 18,
    nome: "Switch Gigabit 8 Portas",
    preco: 249.0,
    imagem: "src/res/switch.jpg",
    categoria: "Redes",
  },
  {
    id: 19,
    nome: "HD Externo Seagate 2TB",
    preco: 549.0,
    imagem: "src/res/hd-externo.jpg",
    categoria: "Armazenamento",
  },
  {
    id: 20,
    nome: "Pendrive Kingston 128GB",
    preco: 89.0,
    imagem: "src/res/pendrive.jpg",
    categoria: "Armazenamento",
  },
  {
    id: 21,
    nome: "Hub USB-C 7 em 1",
    preco: 199.0,
    imagem: "src/res/hub-usbc.jpg",
    categoria: "Cabos e Adaptadores",
  },
  {
    id: 22,
    nome: "Cabo HDMI 2.1 2m",
    preco: 49.0,
    imagem: "src/res/cabo-hdmi.jpg",
    categoria: "Cabos e Adaptadores",
  },
  {
    id: 23,
    nome: "Carregador Turbo USB-C 65W",
    preco: 169.0,
    imagem: "src/res/carregador.jpg",
    categoria: "Energia",
  },
  {
    id: 24,
    nome: "Power Bank 20000mAh",
    preco: 229.0,
    imagem: "src/res/powerbank.jpg",
    categoria: "Energia",
  },
  {
    id: 25,
    nome: "Lâmpada Inteligente Wi-Fi",
    preco: 79.0,
    imagem: "src/res/lampada.jpg",
    categoria: "Casa Inteligente",
  },
  {
    id: 26,
    nome: "Câmera de Segurança Wi-Fi",
    preco: 259.0,
    imagem: "src/res/camera.jpg",
    categoria: "Casa Inteligente",
  },
  {
    id: 27,
    nome: "Drone DJI Mini 2 SE",
    preco: 2999.0,
    imagem: "src/res/drone.jpg",
    categoria: "Foto e Vídeo",
  },
  {
    id: 28,
    nome: "Impressora Epson EcoTank L3250",
    preco: 1199.0,
    imagem: "src/res/impressora.jpg",
    categoria: "Periféricos",
  },
  {
    id: 29,
    nome: "Controle Xbox Wireless",
    preco: 429.0,
    imagem: "src/res/controle.jpg",
    categoria: "Gamer",
  },
  {
    id: 30,
    nome: "Console PlayStation 5 Slim",
    preco: 3699.0,
    imagem: "src/res/ps5.jpg",
    categoria: "Gamer",
  },
  {
    id: 31,
    nome: "Memória RAM Kingston Fury 16GB DDR4",
    preco: 329.0,
    imagem: "src/res/memoria-ram.jpg",
    categoria: "Componentes",
  },
  {
    id: 32,
    nome: "Processador AMD Ryzen 5 5600",
    preco: 899.0,
    imagem: "src/res/ryzen5.jpg",
    categoria: "Componentes",
  },
  {
    id: 33,
    nome: "Cooler DeepCool AG400",
    preco: 159.0,
    imagem: "src/res/cooler.jpg",
    categoria: "Componentes",
  },
  {
    id: 34,
    nome: "Mouse Pad Gamer XXL",
    preco: 99.0,
    imagem: "src/res/mousepad.jpg",
    categoria: "Periféricos",
  },
  {
    id: 35,
    nome: 'Monitor AOC 27" 165Hz',
    preco: 1399.0,
    imagem: "src/res/monitor-aoc.jpg",
    categoria: "Monitores",
  },
  {
    id: 36,
    nome: "SSD Kingston NV2 1TB NVMe",
    preco: 449.0,
    imagem: "src/res/ssd-nvme.jpg",
    categoria: "Armazenamento",
  },
  {
    id: 37,
    nome: "Notebook Gamer Acer Nitro V15",
    preco: 5299.0,
    imagem: "src/res/notebook-gamer.jpg",
    categoria: "Computadores",
  },
  {
    id: 38,
    nome: "Cadeira Gamer ThunderX3",
    preco: 999.0,
    imagem: "src/res/cadeira-gamer.jpg",
    categoria: "Gamer",
  },
  {
    id: 39,
    nome: "Echo Dot 5ª Geração",
    preco: 349.0,
    imagem: "src/res/echo-dot.jpg",
    categoria: "Casa Inteligente",
  },
  {
    id: 40,
    nome: "Adaptador Bluetooth USB 5.3",
    preco: 59.0,
    imagem: "src/res/adaptador-bluetooth.jpg",
    categoria: "Cabos e Adaptadores",
  },
];
let todosOsProdutos =
  JSON.parse(localStorage.getItem("techstore_produtos")) || produtosIniciais;
function salvarProdutos() {
  localStorage.setItem("techstore_produtos", JSON.stringify(todosOsProdutos));
}
let bancoDeUsuarios = JSON.parse(
  localStorage.getItem("techstore_usuarios"),
) || [
  {
    nome: "Administrador Chefe",
    email: "admin@techstore.com.br",
    senha: "123",
    tipo: "admin",
  },
  {
    nome: "João Cliente",
    email: "joao@email.com",
    senha: "123",
    tipo: "cliente",
  },
];
function salvarUsuarios() {
  localStorage.setItem("techstore_usuarios", JSON.stringify(bancoDeUsuarios));
}
function carregarUsuario() {
  const usuarioLogadoString = localStorage.getItem("usuarioLogado");

  if (!usuarioLogadoString) return;

  const usuario = JSON.parse(usuarioLogadoString);
  const divBotoes = document.querySelector(".botoes");

  if (!divBotoes) return;

  if (usuario.tipo === "admin") {
    divBotoes.innerHTML = `
            <span>Olá, ${usuario.nome}</span>
            <button class="btn-criar-conta">
                <a href="#" id="btn-sair">Sair</a>
            </button>
            <button class="btn-entrar">
                <a href="painel-adm.html">Painel Adm</a>
            </button>
        `;
  } else {
    divBotoes.innerHTML = `
            <span>Olá, ${usuario.nome}</span>
            <button class="btn-criar-conta">
                <a href="#" id="btn-sair">Sair</a>
            </button>
        `;
  }
  const btnSair = document.getElementById("btn-sair");
  if (btnSair) {
    btnSair.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("usuarioLogado");
      window.location.href = "index.html";
    });
  }
}
function carregarProdutosHome() {
  const trackPopulares = document.getElementById("track-populares");
  if (trackPopulares) {
    trackPopulares.innerHTML = "";
    todosOsProdutos.slice(0, 5).forEach((produto) => {
      trackPopulares.innerHTML += `
              <div class="produto">
                  <img src="${produto.imagem}" alt="${produto.nome}">
                  <p>${produto.nome}</p>
                  <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                  <p>12x de R$ ${(produto.preco / 12).toFixed(2).replace(".", ",")}</p>
                  <button class="btn-buscar" onclick="adicionarAoCarrinho(${produto.id})">
                      Comprar
                  </button>
              </div>
          `;
    });
  }
  const trackRecomendacoes = document.getElementById("track-recomendacoes");
  if (trackRecomendacoes) {
    trackRecomendacoes.innerHTML = "";
    todosOsProdutos.slice(5, 10).forEach((produto) => {
      trackRecomendacoes.innerHTML += `
              <div class="produto">
                  <img src="${produto.imagem}" alt="${produto.nome}">
                  <p>${produto.nome}</p>
                  <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                  <p>12x de R$ ${(produto.preco / 12).toFixed(2).replace(".", ",")}</p>
                  <button class="btn-buscar" onclick="adicionarAoCarrinho(${produto.id})">
                      Comprar
                  </button>
              </div>
          `;
    });
  }
  const trackMaisProcurados = document.getElementById("track-mais-procurados");
  if (trackMaisProcurados) {
    trackMaisProcurados.innerHTML = "";
    todosOsProdutos.slice(10, 15).forEach((produto) => {
      trackMaisProcurados.innerHTML += `
              <div class="produto">
                  <img src="${produto.imagem}" alt="${produto.nome}">
                  <p>${produto.nome}</p>
                  <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                  <p>12x de R$ ${(produto.preco / 12).toFixed(2).replace(".", ",")}</p>
                  <button class="btn-buscar" onclick="adicionarAoCarrinho(${produto.id})">
                      Comprar
                  </button>
              </div>
          `;
    });
  }
  const trackNovidades = document.getElementById("track-novidades");
  if (trackNovidades) {
    trackNovidades.innerHTML = "";
    todosOsProdutos.slice(15, 30).forEach((produto) => {
      trackNovidades.innerHTML += `
              <div class="produto">
                  <img src="${produto.imagem}" alt="${produto.nome}">
                  <p>${produto.nome}</p>
                  <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                  <p>12x de R$ ${(produto.preco / 12).toFixed(2).replace(".", ",")}</p>
                  <button class="btn-buscar" onclick="adicionarAoCarrinho(${produto.id})">
                      Comprar
                  </button>
              </div>
          `;
    });
  }
}
function carregarBannerLancamentos() {
  const bannerContainer = document.getElementById("banner-lancamentos");
  if (!bannerContainer) return;

  const slides = bannerContainer.querySelectorAll(".slide");
  if (slides.length < 2) return;

  const grade1 = slides[0].querySelector(".grade-produtos-banner");
  if (grade1) {
    grade1.innerHTML = "";
    todosOsProdutos.slice(0, 6).forEach((produto) => {
      grade1.innerHTML += `
        <div class="produto-banner" style="background-image: url('${produto.imagem}');" onclick="adicionarAoCarrinho(${produto.id})">
          <div style="background-color: #FFF; border-radius: 10px;">
            <p>${produto.nome}</p>
            <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
          </div>
        </div>
      `;
    });
  }
  const grade2 = slides[1].querySelector(".grade-produtos-banner");
  if (grade2) {
    grade2.innerHTML = "";
    todosOsProdutos.slice(6, 12).forEach((produto) => {
      grade2.innerHTML += `
        <div class="produto-banner" style="background-image: url('${produto.imagem}');" onclick="adicionarAoCarrinho(${produto.id})">
          <div>
            <p>${produto.nome}</p>
            <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
          </div>
        </div>
      `;
    });
  }
}
let slideAtualBanner = 0;
function mudarSlideBanner(direcao) {
  const bannerContainer = document.getElementById("banner-lancamentos");
  if (!bannerContainer) return;
  const slidesBanner = bannerContainer.querySelectorAll(".slide");
  if (slidesBanner.length === 0) return;
  slidesBanner[slideAtualBanner].classList.remove("ativo");
  slideAtualBanner += direcao;
  if (slideAtualBanner >= slidesBanner.length) {
    slideAtualBanner = 0;
  } else if (slideAtualBanner < 0) {
    slideAtualBanner = slidesBanner.length - 1;
  }
  slidesBanner[slideAtualBanner].classList.add("ativo");
}
setInterval(() => {
  if (document.getElementById("banner-lancamentos")) {
    mudarSlideBanner(1);
  }
}, 6000);
const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("senha").value;

    const usuarioEncontrado = bancoDeUsuarios.find(
      (user) => user.email === emailDigitado && user.senha === senhaDigitada,
    );
    if (usuarioEncontrado) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
      alert(`Bem-vindo(a) de volta, ${usuarioEncontrado.nome}!`);
      if (usuarioEncontrado.tipo === "admin") {
        window.location.href = "painel-adm.html";
      } else {
        window.location.href = "index.html";
      }
    } else {
      alert(
        "Credenciais inválidas. Verifique seu e-mail e senha e tente novamente.",
      );
    }
  });
}
const formCriarConta = document.getElementById("form-criar-conta");
if (formCriarConta) {
  formCriarConta.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirma-senha").value;

    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    if (bancoDeUsuarios.some((u) => u.email === email)) {
      alert("Este e-mail já está cadastrado!");
      return;
    }
    const novoUsuario = { nome, email, senha, tipo: "cliente" };
    bancoDeUsuarios.push(novoUsuario);
    salvarUsuarios();

    alert("Conta criada com sucesso! Faça login para continuar.");
    window.location.href = "entrar.html";
  });
}
let carrinho = JSON.parse(localStorage.getItem("techstore_carrinho")) || [];
function salvarCarrinho() {
  localStorage.setItem("techstore_carrinho", JSON.stringify(carrinho));
}
function adicionarAoCarrinho(idProduto) {
  const produto = todosOsProdutos.find((p) => p.id === idProduto);
  if (!produto) {
    alert("Produto não encontrado!");
    return;
  }
  const itemExistente = carrinho.find((item) => item.id === idProduto);
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
  salvarCarrinho();
  atualizarContadorHeader();
  alert(`${produto.nome} foi adicionado ao seu carrinho!`);
}
function formatarPreco(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
function renderizarCarrinho() {
  const tabelaProdutos = document.querySelector(".tabela-produtos");
  const footerCarrinho = document.querySelector(".footer-carrinho");
  if (!tabelaProdutos || !footerCarrinho) return;
  tabelaProdutos.innerHTML = "";
  footerCarrinho.innerHTML = "";
  if (!carrinho || carrinho.length === 0) {
    tabelaProdutos.innerHTML =
      '<div class="carrinho-vazio" style="padding: 30px; text-align: center; font-size: 1.1rem; color: #555;">Nenhum produto adicionado ao carrinho.</div>';
    return;
  }
  carrinho.forEach((item) => {
    const precoParcelado = item.preco / 10;
    const produtoElemento = document.createElement("div");
    produtoElemento.className = "carrinho-item";
    produtoElemento.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" />
      <div class="carrinho-item-info">
        <h3>${item.nome}</h3>
        <p class="preco">${formatarPreco(item.preco)}</p>
        <p class="preco-parcelado">10x de ${formatarPreco(precoParcelado)} sem juros</p>
        <p>Quantidade: ${item.quantidade}</p>
        <button class="btn-remover-item" data-id="${item.id}">Remover 1</button>
      </div>
    `;
    tabelaProdutos.appendChild(produtoElemento);
  });
  tabelaProdutos.querySelectorAll(".btn-remover-item").forEach((botao) => {
    botao.addEventListener("click", () => {
      const idProduto = Number(botao.dataset.id);
      const itemIndex = carrinho.findIndex((item) => item.id === idProduto);
      if (itemIndex === -1) return;
      if (carrinho[itemIndex].quantidade > 1) {
        carrinho[itemIndex].quantidade -= 1;
      } else {
        carrinho.splice(itemIndex, 1);
      }
      salvarCarrinho();
      atualizarContadorHeader();
      renderizarCarrinho();
    });
  });
  const valorTotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0,
  );
  footerCarrinho.innerHTML = `
    <div class="total">Total: ${formatarPreco(valorTotal)}</div>
    <button class="btn-finalizar">Finalizar Compra</button>
  `;
  const botaoFinalizar = footerCarrinho.querySelector(".btn-finalizar");
  if (botaoFinalizar) {
    botaoFinalizar.addEventListener("click", () => {
      carrinho = [];
      salvarCarrinho();
      atualizarContadorHeader();
      renderizarCarrinho();
      alert("Compra finalizada com sucesso!");
    });
  }
}
function atualizarContadorHeader() {
  const contador = document.getElementById("contador-carrinho");
  if (contador) {
    const totalItens = carrinho.reduce(
      (total, item) => total + item.quantidade,
      0,
    );
    contador.textContent = totalItens;
  }
}
function verificarAdmin() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuarioLogado || usuarioLogado.tipo !== "admin") {
    alert(
      "Acesso restrito a administradores. Faça login com uma conta de administrador.",
    );
    window.location.href = "entrar.html";
  }
}
function renderizarProdutosAdm() {
  const tbody = document.getElementById("tabela-produtos-adm-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  todosOsProdutos.forEach((produto) => {
    tbody.innerHTML += `
      <tr>
        <td><img src="${produto.imagem}" alt="${produto.nome}"></td>
        <td>${produto.nome}</td>
        <td>R$ ${produto.preco.toFixed(2).replace(".", ",")}</td>
        <td>
          <button class="btn-remover-adm" onclick="removerProdutoAdm(${produto.id})">Excluir</button>
        </td>
      </tr>
    `;
  });
  const countEl = document.getElementById("metric-produtos-count");
  if (countEl) {
    countEl.textContent = todosOsProdutos.length;
  }
}
window.removerProdutoAdm = function (id) {
  if (confirm("Tem certeza que deseja excluir este produto?")) {
    todosOsProdutos = todosOsProdutos.filter((p) => p.id !== id);
    salvarProdutos();
    renderizarProdutosAdm();
    carregarProdutosHome();
    carregarBannerLancamentos();
    alert("Produto removido com sucesso!");
  }
};
const formCadastrarProduto = document.getElementById("form-cadastrar-produto");
if (formCadastrarProduto) {
  formCadastrarProduto.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome-produto").value;
    const preco = parseFloat(document.getElementById("preco-produto").value);
    const categoria = document.getElementById("categoria-produto").value;
    const imagem = document.getElementById("imagem-produto").value;

    const novoId =
      todosOsProdutos.length > 0
        ? Math.max(...todosOsProdutos.map((p) => p.id)) + 1
        : 1;
    const novoProduto = { id: novoId, nome, preco, imagem, categoria };

    todosOsProdutos.push(novoProduto);
    salvarProdutos();
    renderizarProdutosAdm();
    carregarProdutosHome();
    carregarBannerLancamentos();

    alert("Produto cadastrado com sucesso!");
    formCadastrarProduto.reset();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  carregarUsuario();
  carregarProdutosHome();
  carregarBannerLancamentos();
  inicializarCarrosseisProdutos();
  atualizarContadorHeader();
  renderizarCarrinho();

  if (window.location.pathname.includes("painel-adm.html")) {
    verificarAdmin();
    renderizarProdutosAdm();
  }
});
function inicializarCarrosseisProdutos() {
  document
    .querySelectorAll(".carrossel:not(#banner-lancamentos)")
    .forEach((carrossel) => {
      const track = carrossel.querySelector(".track");
      const produtos = carrossel.querySelectorAll(".produto");
      const anterior = carrossel.querySelector(".anterior");
      const proximo = carrossel.querySelector(".proximo");
      if (!track || !produtos.length) return;
      let indice = 0;
      function getLarguraCarrinho() {
        const carrinho = produtos[0];
        const style = window.getComputedStyle(carrinho);
        const marginRight = parseInt(style.marginRight) || 25;
        return carrinho.offsetWidth + marginRight;
      }
      function atualizarScroll() {
        const cardWidth = getLarguraCarrinho();
        track.style.transform = `translateX(-${indice * cardWidth}px)`;
      }
      if (proximo) {
        const novoProximo = proximo.cloneNode(true);
        proximo.parentNode.replaceChild(novoProximo, proximo);
        novoProximo.addEventListener("click", () => {
          const cardWidth = getLarguraCarrinho();
          const containerWidth = carrossel.clientWidth - 100; // subtrai padding das setas
          const visibleCards = Math.max(
            1,
            Math.floor(containerWidth / cardWidth),
          );
          const maxIndex = Math.max(0, produtos.length - visibleCards);
          if (indice < maxIndex) {
            indice++;
          } else {
            indice = 0;
          }
          atualizarScroll();
        });
      }
      if (anterior) {
        const novoAnterior = anterior.cloneNode(true);
        anterior.parentNode.replaceChild(novoAnterior, anterior);
        novoAnterior.addEventListener("click", () => {
          const cardWidth = getLarguraCarrinho();
          const containerWidth = carrossel.clientWidth - 100;
          const visibleCards = Math.max(
            1,
            Math.floor(containerWidth / cardWidth),
          );
          const maxIndex = Math.max(0, produtos.length - visibleCards);
          if (indice > 0) {
            indice--;
          } else {
            indice = maxIndex;
          }
          atualizarScroll();
        });
      }
    });
}
