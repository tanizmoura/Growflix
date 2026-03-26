// Array de filmes
const filmes = [
  {
    img: "https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg",
    titulo: "Growcast #00 | Conheça a Growdev",
    link: "https://www.youtube.com/embed/aJ-HZuLcKeA?si=SI-9MVYS_cMDmGdW",
    categoria: "growcast",
    destaque: false,
    id: 0,
  },
  {
    img: "https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg",
    titulo: "Growcast #01 | As profissões do futuro",
    link: "https://www.youtube.com/embed/7OWT3lfHYvE?si=2su4NuY2Umaz_Xtp",
    categoria: "growcast",
    destaque: true,
    id: 1,
  },
  {
    img: "https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg",
    titulo: "Growcast #02 | Como seguir a carreira internacional?",
    link: "https://www.youtube.com/embed/ci1eQGPK89o?si=2j3lIY_7W9W6mbtb",
    categoria: "growcast",
    destaque: false,
    id: 2,
  },
  {
    img: "https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg",
    titulo: "Growcast #03 | Superando os desafios da carreira de Dev!",
    link: "https://www.youtube.com/embed/WM7pGG7OicQ?si=M3o30yV2v_9YMHrj",
    categoria: "growcast",
    destaque: false,
    id: 3,
  },
  {
    img: "https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg",
    titulo: "Growcast #04 | Agile Master: tudo sobre a profissão!",
    link: "https://www.youtube.com/embed/2c8VOBZ160Y?si=tij12tt90ki2HkVP",
    categoria: "growcast",
    destaque: false,
    id: 4,
  },
  {
    img: "https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg",
    titulo:
      "Growcast #05 | Como iniciar na carreira em Desenvolvimento de Softwares?",
    link: "https://www.youtube.com/embed/mxnEm03cYPc?si=CPILzfbDTP1P-iF7",
    categoria: "growcast",
    destaque: false,
    id: 5,
  },
  {
    img: "https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg",
    titulo: "Growcast #06 | Mulheres e inclusão na tecnologia",
    link: "https://www.youtube.com/embed/m7DyR07KrOE?si=a0l826wHZMiNey-n",
    categoria: "growcast",
    destaque: false,
    id: 6,
  },
  {
    img: "https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg",
    titulo: "Growcast #07 | Desenvolvendo profissionais na área de ",
    link: "https://www.youtube.com/embed/vW8G9KPwRL0?si=XSCCXcZg1pnK5-Ih",
    categoria: "growcast",
    destaque: false,
    id: 7,
  },
  {
    img: "https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg",
    titulo:
      "Growcast #08 | A solução que está transformando o mercado de TI no Brasil",
    link: "https://www.youtube.com/embed/_Ut2KqAqPyk?si=TYnnoRK-GExFygGG",
    categoria: "growcast",
    destaque: false,
    id: 8,
  },
  {
    img: "https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg",
    titulo:
      "Growcast #09 | Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI.",
    link: "https://www.youtube.com/embed/dfDgs0Ive2Q?si=w6q3tvWsU8UTmPrj",
    categoria: "growcast",
    destaque: false,
    id: 9,
  },
  {
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg",
    titulo: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "https://www.youtube.com/embed/WKbLXuP9S-c?si=nzBmTo_kwbA5Cgzr",
    categoria: "webinar",
    destaque: false,
    id: 10,
  },
  {
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg",
    titulo: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "https://www.youtube.com/embed/dJ6y1zMjVXU?si=PWTnb5gcJOsVgiC3",
    categoria: "webinar",
    destaque: false,
    id: 11,
  },
  {
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg",
    titulo: "Webinar - Recriando a interface do iFood com Flutter",
    link: "https://www.youtube.com/embed/8rdJsqUjsGg?si=XEGy41iNrjIVYQQO",
    categoria: "webinar",
    destaque: false,
    id: 12,
  },
  {
    img: "https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg",
    titulo: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "https://www.youtube.com/embed/C4p_7qBsECw?si=WdXrhZALfsS8bvqa",
    categoria: "webinar",
    destaque: false,
    id: 13,
  },
  {
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg",
    titulo: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "https://www.youtube.com/embed/L1pKoMC6hWk?si=BrBDMBo7fGDSDQJq",
    categoria: "webinar",
    destaque: false,
    id: 14,
  },
  {
    img: "https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg",
    titulo: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    link: "https://www.youtube.com/embed/FiZMowbaiJA?si=5-4rk7hi-weOATmq",
    categoria: "jornadaux",
    destaque: false,
    id: 15,
  },
  {
    img: "https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg",
    titulo:
      "Live #4 Jornada UX/UI: Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
    link: "https://www.youtube.com/embed/cwqDu0ZzbYE?si=sOSRPMENnhds5zTt",
    categoria: "jornadaux",
    destaque: false,
    id: 16,
  },
  {
    img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg",
    titulo:
      "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
    link: "https://www.youtube.com/embed/ZMZjQ9aRuIY?si=SqEgUa_HsM5qlABx",
    categoria: "jornadaux",
    destaque: false,
    id: 17,
  },
  {
    img: "https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg",
    titulo:
      "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
    link: "https://www.youtube.com/embed/8sd3wuKTZMA?si=MaMwCVpPfDVvmOZQ",
    categoria: "jornadaux",
    destaque: false,
    id: 18,
  },
  {
    img: "https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg",
    titulo:
      "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    link: "https://www.youtube.com/embed/-26aqPtgoEY?si=ydEdeiW9aVu7_fLu",
    categoria: "jornadaux",
    destaque: false,
    id: 19,
  },
  {
    img: "https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg",
    titulo: "Célula de talentos - Uma solução Growdev",
    link: "https://www.youtube.com/embed/QsuhYgsSYQo?si=mQ4xy08pUDVqxy_v",
    categoria: "diversos",
    destaque: false,
    id: 20,
  },
  {
    img: "https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg",
    titulo: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    link: "https://www.youtube.com/embed/ouDn8z3PSqs?si=PRHWyHGquxBaeINS",
    categoria: "diversos",
    destaque: false,
    id: 21,
  },
  {
    img: "https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg",
    titulo:
      "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    link: "https://www.youtube.com/embed/cQDQNX6NXYo?si=xMfEmnUu7WSrHQf4",
    categoria: "diversos",
    destaque: false,
    id: 22,
  },
  {
    img: "https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg",
    titulo: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
    link: "https://www.youtube.com/embed/nKGbolkirBM?si=uLZ7W79RoRtVssdz",
    categoria: "diversos",
    destaque: false,
    id: 23,
  },
  {
    img: "https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg",
    titulo: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
    link: "https://www.youtube.com/embed/6sZPsqNjeek?si=qbttmDofiKr1dVTc",
    categoria: "diversos",
    destaque: false,
    id: 24,
  },
];

// Função para carregar o conteúdo do main
function carregarMain() {
  // Encontrar o filme em destaque
  let destaqueAtual = filmes.reduce(
    (destaque, filme) => (filme.destaque ? filme : destaque),
    null,
  );

  // Configurar o background do main com a imagem do filme em destaque
  let home = document.getElementById("home");
  home.setAttribute("style", `background-image: url(${destaqueAtual.img})`);

  // Criar os elementos para exibir o título e o botão de assistir
  let row = document.createElement("div");
  row.classList.add(
    "row",
    "text-light",
    "d-flex",
    "justify-content-start",
    "align-items-end",
    "ms-md-5",
    "pb-5",
  );
  row.setAttribute("style", "height: 80vh;");

  // Criar a coluna para o título e o botão
  let col = document.createElement("div");
  col.classList.add("col-6");

  // Criar o título do filme em destaque
  let h1 = document.createElement("h1");
  h1.classList.add("display-2", "fw-bold", "text-uppercase");
  h1.innerText = destaqueAtual.categoria;

  // Adicionar o título à coluna
  col.appendChild(h1);

  // Criar o botão de assistir
  let buttonAssistir = document.createElement("button");
  buttonAssistir.classList.add("btn", "btn-light");
  buttonAssistir.setAttribute("data-bs-toggle", "modal");
  buttonAssistir.setAttribute("data-bs-target", "#videoDestaqueModal");
  buttonAssistir.innerHTML = `<i class="bi bi-caret-right-fill"></i> Assistir`;

  // Adicionar o botão à coluna
  col.appendChild(buttonAssistir);

  // Criar o modal para exibir o vídeo do filme em destaque
  let iFrame = document.createElement("iframe");
  iFrame.setAttribute("width", "100%");
  iFrame.setAttribute("height", "100%");
  iFrame.setAttribute("src", destaqueAtual.link);
  iFrame.setAttribute("title", "YouTube video player");
  iFrame.setAttribute("frameborder", "0");
  iFrame.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  );
  iFrame.setAttribute("allowfullscreen", true);
  iFrame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

  let divModalBody = document.createElement("div");
  divModalBody.classList.add("modal-body");
  divModalBody.appendChild(iFrame);

  let tituloVideo = document.createElement("h1");
  tituloVideo.classList.add("modal-title", "fs-5");
  tituloVideo.setAttribute("id", "videoDestaqueModalLabel");
  tituloVideo.innerText = destaqueAtual.titulo;

  let buttonFechar = document.createElement("button");
  buttonFechar.setAttribute("id", "fecharModalDestaque");
  buttonFechar.classList.add("btn-close");
  buttonFechar.setAttribute("type", "button");
  buttonFechar.setAttribute("data-bs-dismiss", "modal");
  buttonFechar.setAttribute("aria-label", "Close");

  let divModalHeader = document.createElement("div");
  divModalHeader.classList.add("modal-header");
  divModalHeader.appendChild(tituloVideo);
  divModalHeader.appendChild(buttonFechar);

  let divModalContent = document.createElement("div");
  divModalContent.classList.add("modal-content");
  divModalContent.appendChild(divModalHeader);
  divModalContent.appendChild(divModalBody);

  let divModalDialog = document.createElement("div");
  divModalDialog.classList.add("modal-dialog", "modal-fullscreen");
  divModalDialog.appendChild(divModalContent);

  let divModal = document.createElement("div");
  divModal.classList.add("modal", "fade");
  divModal.setAttribute("id", "videoDestaqueModal");
  divModal.setAttribute("tabindex", "-1");
  divModal.setAttribute("aria-labelledby", "videoDestaqueModalLabel");
  divModal.setAttribute("aria-hidden", "true");

  // Adicionar o conteúdo do modal ao modal e o modal à coluna
  divModal.appendChild(divModalDialog);
  col.appendChild(divModal);
  row.appendChild(col);
  home.appendChild(row);
}

// Função para fechar o modal e parar o vídeo
function fecharModal() {
  let fecharModalDestaque = document.getElementById("fecharModalDestaque");
  fecharModalDestaque.addEventListener("click", function () {
    let iframe = document.querySelector("#videoDestaqueModal iframe");
    iframe.setAttribute("src", iframe.getAttribute("src"));
  });
}
// Função para buscar filmes por categoria
function buscaPorCategoria(categoria) {
  let filmesCategoria = filmes.filter((filme) => filme.categoria === categoria);
  return filmesCategoria;
}
// Função para criar a lista de filmes por categoria
function criarListaCategoria(categoria) {
  let filmesCategoria = buscaPorCategoria(categoria);

  filmesCategoria.forEach((filme) => {
    let img = document.createElement("img");
    img.setAttribute("src", filme.img);
    img.setAttribute("alt", filme.titulo);
    img.classList.add("card-img-top", "img-fluid");

    let card = document.createElement("div");
    card.setAttribute("id", `filme-${filme.id}`);
    card.classList.add("card", "bg-black", "text-light");
    card.appendChild(img);

    let col = document.createElement("div");
    col.classList.add("col");
    col.appendChild(card);

    let article = document.getElementById(`${categoria}Lista`);
    article.appendChild(col);
    // Adicionar eventos de hover para exibir o título e o botão de assistir
    col.addEventListener("mouseenter", () => {
      if (card.classList.contains("filme-hover-out")) {
        card.classList.remove("filme-hover-out");
      }
      card.classList.add("filme-hover");
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "d-flex");

      let link = document.createElement("button");
      link.classList.add("play-button", "text-light", "btn");
      link.setAttribute("data-bs-toggle", "modal");
      link.setAttribute("data-bs-target", `#modal${filme.id}`);
      link.innerHTML = `<i class="bi bi-play-circle fs-2"></i>`;
      let p = document.createElement("p");
      p.classList.add("fs-7", "ms-3");
      p.innerText = filme.titulo;
      cardBody.appendChild(link);
      cardBody.appendChild(p);
      cardBody.setAttribute("style", "transition: all 0.4s ease-in-out");
      card.appendChild(cardBody);
      // Criar o modal para exibir o vídeo do filme em destaque
      let iFrame = document.createElement("iframe");
      iFrame.setAttribute("width", "100%");
      iFrame.setAttribute("height", "100%");
      iFrame.setAttribute("src", filme.link);
      iFrame.setAttribute("title", "YouTube video player");
      iFrame.setAttribute("frameborder", "0");
      iFrame.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      );
      iFrame.setAttribute("allowfullscreen", true);
      iFrame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

      let divModalBody = document.createElement("div");
      divModalBody.classList.add("modal-body");
      divModalBody.appendChild(iFrame);

      let tituloVideo = document.createElement("h1");
      tituloVideo.classList.add("modal-title", "fs-5");
      tituloVideo.setAttribute("id", `modal${filme.id}`);
      tituloVideo.innerText = filme.titulo;

      let buttonFechar = document.createElement("button");
      buttonFechar.setAttribute("id", "fecharModal");
      buttonFechar.classList.add("btn-close");
      buttonFechar.setAttribute("type", "button");
      buttonFechar.setAttribute("data-bs-dismiss", "modal");
      buttonFechar.setAttribute("aria-label", "Close");

      let divModalHeader = document.createElement("div");
      divModalHeader.classList.add("modal-header");
      divModalHeader.appendChild(tituloVideo);
      divModalHeader.appendChild(buttonFechar);

      let divModalContent = document.createElement("div");
      divModalContent.classList.add("modal-content");
      divModalContent.appendChild(divModalHeader);
      divModalContent.appendChild(divModalBody);

      let divModalDialog = document.createElement("div");
      divModalDialog.classList.add("modal-dialog", "modal-fullscreen");
      divModalDialog.appendChild(divModalContent);

      let divModal = document.createElement("div");
      divModal.classList.add("modal", "fade");
      divModal.setAttribute("id", `modal${filme.id}`);
      divModal.setAttribute("tabindex", "-1");
      divModal.setAttribute("aria-labelledby", `modal${filme.id}`);
      divModal.setAttribute("aria-hidden", "true");

      // Adicionar o conteúdo do modal ao modal e o modal à coluna
      divModal.appendChild(divModalDialog);
      col.appendChild(divModal);

      let fecharModalDestaque = document.getElementById("fecharModal");
      fecharModalDestaque.addEventListener("click", function () {
        let iframe = document.querySelector(`#modal${filme.id} iframe`);
        iframe.setAttribute("src", iframe.getAttribute("src"));
      });
    });
    col.addEventListener("mouseleave", () => {
      if (card.classList.contains("filme-hover")) {
        card.classList.remove("filme-hover");
        card.removeChild(card.querySelector(".card-body"));
      }
      card.classList.add("filme-hover-out");
    });
  });
}

// Chamar a função para carregar o conteúdo do main
carregarMain();
// Chamar a função para criar as listas de filmes por categoria
criarListaCategoria("growcast");
criarListaCategoria("webinar");
criarListaCategoria("jornadaux");
criarListaCategoria("diversos");
// Chamar a função para configurar o evento de fechar o modal
fecharModal();
