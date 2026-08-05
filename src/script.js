const todosOsProdutos = [
  { id: 1, nome: "PC Gamer Nitro", preco: 4500.0, imagem: "src/res/pc.jpg" },
  { id: 2, nome: "Mouse Logitech G203", preco: 120.0, imagem: "src/res/mouse.jpg" },
  { id: 3, nome: "Teclado Mecânico", preco: 350.0, imagem: "src/res/teclado.jpg" },
  { id: 4, nome: 'Monitor LG 24"', preco: 900.0, imagem: "src/res/monitor.jpg" },
  { id: 5, nome: "Headset HyperX", preco: 250.0, imagem: "src/res/headset.jpg" },
  {
    id: 6,
    nome: "Placa de Vídeo RTX 3060",
    preco: 2500.0,
    imagem: "src/res/placa-video.jpg",
  },
  { id: 7, nome: "SSD Samsung 1TB", preco: 600.0, imagem: "src/res/ssd.jpg" },
  { id: 8, nome: "Fonte Corsair 650W", preco: 400.0, imagem: "src/res/fonte.jpg" },
  {
    id: 9,
    nome: "Notebook Dell Inspiron 15",
    preco: 4200.0,
    imagem: "src/res/notebook.jpg",
  },
  {
    id: 10,
    nome: "Smartphone Samsung Galaxy A56",
    preco: 1899.0,
    imagem: "src/res/smartphone.jpg",
  },
  {
    id: 11,
    nome: "Tablet Lenovo Tab M11",
    preco: 1399.0,
    imagem: "src/res/tablet.jpg",
  },
  {
    id: 12,
    nome: "Smartwatch Xiaomi Watch 2",
    preco: 799.0,
    imagem: "src/res/smartwatch.jpg",
  },
  {
    id: 13,
    nome: "Fone Bluetooth JBL Tune 770NC",
    preco: 499.0,
    imagem: "src/res/fone-bluetooth.jpg",
  },
  {
    id: 14,
    nome: "Caixa de Som JBL Flip 6",
    preco: 699.0,
    imagem: "src/res/caixa-som.jpg",
  },
  {
    id: 15,
    nome: "Webcam Logitech C920",
    preco: 399.0,
    imagem: "src/res/webcam.jpg",
  },
  {
    id: 16,
    nome: "Microfone HyperX SoloCast",
    preco: 329.0,
    imagem: "src/res/microfone.jpg",
  },
  {
    id: 17,
    nome: "Roteador TP-Link Archer AX23",
    preco: 499.0,
    imagem: "src/res/roteador.jpg",
  },
  {
    id: 18,
    nome: "Switch Gigabit 8 Portas",
    preco: 249.0,
    imagem: "src/res/switch.jpg",
  },
  {
    id: 19,
    nome: "HD Externo Seagate 2TB",
    preco: 549.0,
    imagem: "src/res/hd-externo.jpg",
  },
  {
    id: 20,
    nome: "Pendrive Kingston 128GB",
    preco: 89.0,
    imagem: "src/res/pendrive.jpg",
  },
  {
    id: 21,
    nome: "Hub USB-C 7 em 1",
    preco: 199.0,
    imagem: "src/res/hub-usbc.jpg",
  },
  { id: 22, nome: "Cabo HDMI 2.1 2m", preco: 49.0, imagem: "src/hdmi.jpg" },
  {
    id: 23,
    nome: "Carregador Turbo USB-C 65W",
    preco: 169.0,
    imagem: "src/res/carregador.jpg",
  },
  {
    id: 24,
    nome: "Power Bank 20000mAh",
    preco: 229.0,
    imagem: "src/res/powerbank.jpg",
  },
  {
    id: 25,
    nome: "Lâmpada Inteligente Wi-Fi",
    preco: 79.0,
    imagem: "src/res/lampada.jpg",
  },
  {
    id: 26,
    nome: "Câmera de Segurança Wi-Fi",
    preco: 259.0,
    imagem: "src/res/camera.jpg",
  },
  {
    id: 27,
    nome: "Drone DJI Mini 2 SE",
    preco: 2999.0,
    imagem: "src/res/drone.jpg",
  },
  {
    id: 28,
    nome: "Impressora Epson EcoTank L3250",
    preco: 1199.0,
    imagem: "src/res/impressora.jpg",
  },
  {
    id: 29,
    nome: "Controle Xbox Wireless",
    preco: 429.0,
    imagem: "src/res/controle.jpg",
  },
  {
    id: 30,
    nome: "Console PlayStation 5 Slim",
    preco: 3699.0,
    imagem: "src/res/ps5.jpg",
  },
];
const bancoDeUsuarios = [
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

    document.getElementById("btn-sair").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuarioLogado");
        window.location.reload();
    });
}
function carregarProdutos() {
    const trackPopulares = document.getElementById("track-populares");
    trackPopulares.innerHTML = "";
    todosOsProdutos.slice(0,5).forEach(produto => {
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

    const trackRecomendacoes = document.getElementById("track-recomendacoes");
    trackRecomendacoes.innerHTML = "";
    todosOsProdutos.slice(5,10).forEach(produto => {
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
    const trackMaisProcurados = document.getElementById("track-mais-procurados");
    trackMaisProcurados.innerHTML = "";
    todosOsProdutos.slice(10,15).forEach(produto => {
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
    const trackNovidades = document.getElementById("track-novidades");
    trackNovidades.innerHTML = "";
    todosOsProdutos.slice(15,20).forEach(produto => {
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
document.addEventListener("DOMContentLoaded", () => {
    carregarUsuario();
    carregarProdutos();
});
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
document
  .querySelectorAll(".carrossel:not(#banner-lancamentos)")
  .forEach((carrossel) => {
    const track = carrossel.querySelector(".track");
    const produtos = carrossel.querySelectorAll(".produto");
    const anterior = carrossel.querySelector(".anterior");
    const proximo = carrossel.querySelector(".proximo");
    if (!track || !produtos.length) return;
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
let slideAtualBanner = 0;
const slidesBanner = document.querySelectorAll("#banner-lancamentos .slide");
function mudarSlideBanner(direcao) {
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
    tabelaProdutos.innerHTML = '<div class="carrinho-vazio">Nenhum produto adicionado ao carrinho.</div>';
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
      alert("Compra finalizada.");
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
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorHeader();
  renderizarCarrinho();
});
