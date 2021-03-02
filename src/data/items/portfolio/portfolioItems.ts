import { IPortfolioItem } from "../../../interfaces/IPortfolioItem";

export const portfolioItems: IPortfolioItem[] = [
  {
    title: "Rolezator",
    url: "rolezator-app",
    thumbnail: `/images/portfolio/rolezator-app/rolezator.jpg`,
    text:
      "Site que oferece sugestões de passeios, comidas e ações, com o objetivo de ajudar " +
      "o usuário em momentos de indecisão.",
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
    text:
      "Aplicativo para controle de vendas de lojas virtuais pequenas (ex: lojas pessoais de Instagram), " +
      "substituindo planilhas e facilitando a portabilidade.\n",
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
    text: `Meu próprio site de portfolio, para apresentar meus trabalhos.`,
    logos: [
      `/images/logos/nodejs.png`,
      `/images/logos/reactjs.png`,
      `/images/logos/next.png`,
      `/images/logos/ts.png`,
      `/images/logos/vercel.png`,
    ],
    site: "https://arthurwosniaki.vercel.app/",
    github: "https://github.com/arthurolmos/portfolio-app",
  },
  {
    title: "Loja Sanguinária",
    url: "loja-sanguinaria",
    thumbnail: `/images/portfolio/lojasanguinaria/home.jpg`,
    text:
      "Site da Loja Sanguinária, estilizado por mim.\n" +
      "Criação do logo, background, identidade visual das cores e alguns ajustes especiais diretamente " +
      "na estilização da pagina.",
    logos: [`/images/logos/lojaintegrada.png`],
    site: "https://www.lojasanguinaria.com.br",
  },
  {
    title: "Trainometer",
    url: "trainometer",
    thumbnail: `/images/portfolio/trainometer/banner.jpg`,
    text:
      "Aplicativo para registro de treinos.\n" +
      "Registra os exercícios, as séries x repetições, o período e a execução do treino, " +
      "mantendo um histórico aonde é possível ver o progresso do atleta.",
    logos: [`/images/logos/java.png`, `/images/logos/android.svg`],
    github: "https://portfolio-app-psi.vercel.app/",
  },
];
