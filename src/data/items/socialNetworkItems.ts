import { ISocialNetworkItem } from "../../interfaces";
import path from "path";

const baseURL = path.join("images", "snlogos");

export const socialNetworkItems: ISocialNetworkItem[] = [
  {
    url: "https://www.linkedin.com/in/arthurolmos/",
    src: [`${baseURL}/ln.svg`, `${baseURL}/ln_w.png`],
    alt: "linkedin",
  },

  {
    url: "https://github.com/arthurolmos",
    src: [`${baseURL}/gh.svg`, `${baseURL}/gh_w.png`],
    alt: "github",
  },

  {
    url: "mailto:arthur.olmos@gmail.com",
    src: [`${baseURL}/email.svg`, `${baseURL}/email_w.png`],
    alt: "email",
  },
];
