import { IconContext } from "react-icons/lib";
import { ICvItem } from "../../../interfaces/ICvItem";

type Categories =
  | "linguagens"
  | "databases"
  | "outras tecnologias relevantes"
  | "conhecimentos";

interface ItemProps {
  name: Categories;
  values: ICvItem[];
}

type TechItemProps = ItemProps[];

export const technologyItems: TechItemProps = [
  {
    name: "linguagens",
    values: [
      {
        title: "React",
        level: 90,
      },
      {
        title: "React Native",
        level: 80,
      },
      {
        title: "NodeJS",
        level: 80,
      },
      {
        title: "Java",
        level: 70,
      },
      {
        title: "Javascript",
        level: 70,
      },
      {
        title: "Python",
        level: 40,
      },
    ],
  },
  {
    name: "databases",
    values: [
      {
        title: "SQL",
        level: 70,
        description: "MySQL, PostgreSQL, Microsoft SQL",
      },
      {
        title: "NoSQL",
        level: 70,
        description:
          "Firebase Cloud Firestore, Firebase Cloud Database, MongoDB",
      },
    ],
  },
  {
    name: "outras tecnologias relevantes",
    values: [
      {
        title: "Firebase",
        level: 80,
        description:
          "Auth, Cloud Firestore, Cloud Database, Storage, Hosting, Cloud Functions, AdminSDK",
      },
      {
        title: "Frameworks CSS",
        level: 80,
        description: "Styled Components, Bootstrap, SASS",
      },
      {
        title: "Expo",
        level: 80,
      },
      {
        title: "Docker",
        level: 70,
      },
      {
        title: "Git",
        level: 70,
      },
      {
        title: "Jest",
        level: 70,
      },
    ],
  },
  {
    name: "conhecimentos",
    values: [
      {
        title: "MVC & Design Patterns",
        level: 80,
      },
      {
        title: "SCRUM",
        level: 50,
      },
    ],
  },
];
