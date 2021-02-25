import { IPortfolioItem } from "../../../interfaces/IPortfolioItem";

export const portfolioItems: IPortfolioItem[] = [
  {
    title: "Rolezator",
    url: "rolezator-app",
    thumbnail: `/images/portfolio/rolezator-app/rolezator.jpg`,
    text: `Site que oferece sugestões de passeios, comidas e ações aleatoriamente, de acordo com a pergunta feita pelo usuário. 
    Também permite que o usuário logue utilizando uma conta Google para acessar opções personalizadas.
    `,
    logos: [
      `/images/logos/nodejs.png`,
      `/images/logos/reactjs.png`,
      `/images/logos/ts.png`,
      `/images/logos/firebase.png`,
      `/images/logos/netlify.png`,
      `/images/logos/googlemaps.png`,
    ],
    site: "https://rolezator.netlify.app/",
    github: "https://github.com/arthurolmos/rolezator-full-app",
  },
  {
    title: "Controlador de Pedidos",
    url: "controlador-de-pedidos",
    thumbnail: `/images/portfolio/filosofem.jpg`,
    text: `Aplicativo para controle de vendas de lojas virtuais pequenas (ex: lojas de Instagram de pessoas físicas), 
    substituindo planilhas e facilitando a portabilidade.\n
    Registra as vendas, compras, pedidos pagos e entregues. Apresenta o balanço mensal, total e personalizado (filtrado).
    `,
    logos: [
      `/images/logos/nodejs.png`,
      `/images/logos/react-native.png`,
      `/images/logos/firebase.png`,
      `/images/logos/expo.png`,
    ],
    github: "https://github.com/arthurolmos/rolezator-full-app",
  },
  {
    title: "Arthur Wosniaki - Portfolio",
    url: "portfolio-app",
    thumbnail: `/images/portfolio/portfolio-app/portfolio.jpg`,
    text: `Meu próprio site de portfolio, aonde posso apresentar meus trabalhos.`,
    logos: [
      `/images/logos/nodejs.png`,
      `/images/logos/reactjs.png`,
      `/images/logos/next.png`,
      `/images/logos/ts.png`,
      `/images/logos/vercel.png`,
    ],
    site: "https://portfolio-app-psi.vercel.app/",
    github: "https://portfolio-app-psi.vercel.app/",
  },
  {
    title: "Loja Sanguinária",
    url: "loja-sanguinaria",
    thumbnail: `/images/portfolio/lojasanguinaria/home.jpg`,
    text: `Site da Loja Sanguinária, desenvolvido por mim utilizando o framework da Loja Integrada.
    Criação do logo, background, identidade visual das cores e alguns ajustes especiais diretamente 
    na estilização da pagina.`,
    logos: [`/images/logos/lojaintegrada.png`],
    site: "https://www.lojasanguinaria.com.br",
  },
  {
    title: "Trainometer",
    url: "trainometer",
    thumbnail: `/images/portfolio/swamp.jpg`,
    text: `Aplicativo para registro de treinos. Registra os exercícios, as séries x repetições, o período 
    do treino, e a execução do treino, mantendo um histórico aonde é possível ver o progresso do atleta.`,
    logos: [`/images/logos/java.png`, `/images/logos/android.svg`],
    github: "https://portfolio-app-psi.vercel.app/",
  },
];
