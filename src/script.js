document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogadoString = localStorage.getItem('usuarioLogado');
  if (usuarioLogadoString) {
    const usuario = JSON.parse(usuarioLogadoString);
    const divBotoes = document.querySelector('.botoes');
    if (divBotoes) {
      if (usuario.tipo === 'admin') {
        divBotoes.innerHTML = `
          <span style="font-weight: bold; margin-right: 15px;">Olá, ${usuario.nome}</span>
          <button class="btn-criar-conta" style="background-color: var(--danger); border-color: var(--danger);"><a href="#" id="btn-sair" style="color: white;">Sair</a></button>
          <button class="btn-entrar"><a href="painel-adm.html">Painel Adm</a></button>
        `;
      } else {
        divBotoes.innerHTML = `
          <span style="font-weight: bold; margin-right: 15px;">Olá, ${usuario.nome}</span>
          <button class="btn-criar-conta" style="background-color: var(--danger); border-color: var(--danger);"><a href="#" id="btn-sair" style="color: white;">Sair</a></button>
        `;
      }
      document.getElementById('btn-sair').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('usuarioLogado');
        window.location.reload(); 
      });
    }
  }
});

const todosOsProdutos = [
  { id: 1, nome: 'PC Gamer Nitro', preco: 4500.00, imagem: 'src/pc.jpg' },
  { id: 2, nome: 'Mouse Logitech G203', preco: 120.00, imagem: 'src/mouse.jpg' },
  { id: 3, nome: 'Teclado Mecânico', preco: 350.00, imagem: 'src/teclado.jpg' },
  { id: 4, nome: 'Monitor LG 24"', preco: 900.00, imagem: 'src/monitor.jpg' },
  { id: 5, nome: 'Headset HyperX', preco: 250.00, imagem: 'src/headset.jpg' },
  { id: 6, nome: 'Placa de Vídeo RTX 3060', preco: 2500.00, imagem: 'src/placa-video.jpg' },
  { id: 7, nome: 'SSD Samsung 1TB', preco: 600.00, imagem: 'src/ssd.jpg' },
  { id: 8, nome: 'Fonte Corsair 650W', preco: 400.00, imagem: 'src/fonte.jpg' }

];

const bancoDeUsuarios = [
  {
    nome: "Administrador Chefe",
    email: "admin@techstore.com.br",
    senha: "123",
    tipo: "admin"
  },
  {
    nome: "João Cliente",
    email: "joao@email.com",
    senha: "123",
    tipo: "cliente"
  }
];

const formLogin = document.getElementById('form-login');
if (formLogin) {
  formLogin.addEventListener('submit', function (evento) {
    evento.preventDefault(); 
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;
    const usuarioEncontrado = bancoDeUsuarios.find(
      (user) => user.email === emailDigitado && user.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
      alert(`Bem-vindo(a) de volta, ${usuarioEncontrado.nome}!`);
      if (usuarioEncontrado.tipo === 'admin') {
        window.location.href = 'painel-adm.html';
      } else {
        window.location.href = 'index.html';
      }
    } else {
      alert("Credenciais inválidas. Verifique seu e-mail e senha e tente novamente.");
    }
  });
}

document.querySelectorAll(".carrossel:not(#banner-lancamentos)").forEach((carrossel) => {
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
let slideAtualBanner = 0;
const slidesBanner = document.querySelectorAll('#banner-lancamentos .slide');
function mudarSlideBanner(direcao) {
    if (slidesBanner.length === 0) return;
    slidesBanner[slideAtualBanner].classList.remove('ativo');
    slideAtualBanner += direcao;
    if (slideAtualBanner >= slidesBanner.length) {
        slideAtualBanner = 0;
    } else if (slideAtualBanner < 0) {
        slideAtualBanner = slidesBanner.length - 1;
    }
    slidesBanner[slideAtualBanner].classList.add('ativo');
}