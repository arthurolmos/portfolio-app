import { IPortfolioItem } from "../../interfaces/IPortfolioItem";
import path from "path";

const portfolioPath = path.join("images", "portfolio");
const logoPath = path.join("images", "logos");

export const portfolioItems: IPortfolioItem[] = [
  {
    thumbnail: `${portfolioPath}/rolezator-app/rolezator.jpg`,
    title: "Rolezator",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, dui eget rhoncus elementum, velit enim ultricies nisl, vehicula volutpat magna tortor vitae odio. Suspendisse nulla magna, fringilla vitae massa nec, accumsan porttitor dui. In hac habitasse platea dictumst. Maecenas aliquam mauris id metus viverra fermentum. Phasellus consequat a turpis sed rhoncus. Vestibulum vel pellentesque turpis, mollis pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam pretium eleifend urna at varius.`,
    logos: [
      `${logoPath}/nodejs.png`,
      `${logoPath}/reactjs.png`,
      `${logoPath}/firebase.png`,
      `${logoPath}/netlify.png`,
      `${logoPath}/googlemaps.png`,
    ],
    site: "https://rolezator.netlify.app/",
    github: "https://github.com/arthurolmos/rolezator-full-app",
  },
  {
    thumbnail: `${portfolioPath}/lojasanguinaria/home.jpg`,
    title: "Loja Sanguinária",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, dui eget rhoncus elementum, velit enim ultricies nisl, vehicula volutpat magna tortor vitae odio. Suspendisse nulla magna, fringilla vitae massa nec, accumsan porttitor dui. In hac habitasse platea dictumst. Maecenas aliquam mauris id metus viverra fermentum. Phasellus consequat a turpis sed rhoncus. Vestibulum vel pellentesque turpis, mollis pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam pretium eleifend urna at varius.`,
    logos: [`${logoPath}/lojaintegrada.png`],
    site: "https://www.lojasanguinaria.com.br",
  },
  {
    thumbnail: `${portfolioPath}/filosofem.jpg`,
    title: "Filosofem",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, dui eget rhoncus elementum, velit enim ultricies nisl, vehicula volutpat magna tortor vitae odio. Suspendisse nulla magna, fringilla vitae massa nec, accumsan porttitor dui. In hac habitasse platea dictumst. Maecenas aliquam mauris id metus viverra fermentum. Phasellus consequat a turpis sed rhoncus. Vestibulum vel pellentesque turpis, mollis pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam pretium eleifend urna at varius.`,
    logos: [`${logoPath}/nodejs.png`, `${logoPath}/reactjs.png`],
  },
  {
    thumbnail: `${portfolioPath}/swamp.jpg`,
    title: "Item 4",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, dui eget rhoncus elementum, velit enim ultricies nisl, vehicula volutpat magna tortor vitae odio. Suspendisse nulla magna, fringilla vitae massa nec, accumsan porttitor dui. In hac habitasse platea dictumst. Maecenas aliquam mauris id metus viverra fermentum. Phasellus consequat a turpis sed rhoncus. Vestibulum vel pellentesque turpis, mollis pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam pretium eleifend urna at varius.`,
    logos: [`${logoPath}/nodejs.png`, `${logoPath}/reactjs.png`],
  },
  {
    thumbnail: `${portfolioPath}/newmoon.jpg`,
    title: "Item 5",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, dui eget rhoncus elementum, velit enim ultricies nisl, vehicula volutpat magna tortor vitae odio. Suspendisse nulla magna, fringilla vitae massa nec, accumsan porttitor dui. In hac habitasse platea dictumst. Maecenas aliquam mauris id metus viverra fermentum. Phasellus consequat a turpis sed rhoncus. Vestibulum vel pellentesque turpis, mollis pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam pretium eleifend urna at varius.`,
    logos: [`/images/logos/nodejs.png`, `/images/logos/reactjs.png`],
  },
];
