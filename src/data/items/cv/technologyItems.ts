import { ICvItem } from "../../../interfaces";

type Categories =
  | "linguagens"
  | "databases"
  | "tecnologias relevantes"
  | "metodologias";

interface ItemProps {
  name: Categories;
  values: ICvItem[];
}

export const technologyItems: ItemProps[] = [
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
      {
        title: "Redis",
        level: 70,
      },
    ],
  },
  {
    name: "tecnologias relevantes",
    values: [
      {
        title: "Firebase",
        level: 80,
        description:
          "Auth, Cloud Firestore, Cloud Database, Storage, Hosting, Cloud Functions, AdminSDK",
      },
      {
        title: "HTML",
        level: 80,
      },
      {
        title: "CSS",
        level: 80,
        description: "Styled Components, Bootstrap, SASS",
      },
      {
        title: "Expo",
        level: 80,
      },
      {
        title: "Rest API",
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
        title: "Testes Unitários e Integrados",
        level: 70,
        description: "Jest",
      },
      {
        title: "Adobe CC",
        level: 70,
        description: "Photoshop, Illustrator",
      },
    ],
  },
  {
    name: "metodologias",
    values: [
      {
        title: "MVC & Design Patterns",
        level: 80,
      },
      {
        title: "SCRUM",
        level: 70,
      },
    ],
  },
];
