---
title: "Rolezator"
backgroundImage: "/images/portfolio/rolezator-app/rolezator.jpg"
site: "https://rolezator.netlify.app/"
github: "https://github.com/arthurolmos/rolezator-full-app"
---

## Descrição

Website/ app criado para oferecer sugestões naqueles momentos de indecisão. Gera opções de rolês para comer, sair ou fazer alguma coisa.

Oferece ao usuário também se logar utilizando uma conta Google para que o usuário cadastre lugares que ele deseja conhecer. Fiz isso pois eu mesmo já passei em frente ou tive sugestões de lugares por amigos que queria conhecer e que, com o passar do tempo, acabei esquecendo. Ele usa a API do GoogleMaps para pegar o endereço e salva na sua Lista de Sugestões (_Edit 26/02/2021: esse recurso está temporariamente em off pois o Google cobra pelo acesso a API do Maps_).

Desenvolvi esse site por sugestão da minha namorada, que sempre me perguntava "O que vamos comer hoje?" ou "Quer sair pra aonde hoje?" e recebia um "Tanto faz" de resposta. Em certo momento, ela sugeriu "Por que você não faz uma roleta de sugestões para facilitar minha vida?"

Também é possível bloquear sugestões que não interessam ao usuário de jeito nenhum. Por exemplo: um rockeiro não vai se interessar por uma sugestão de ir ao baile funk...

...ou vai?

## Tecnologias:

### Frontend

- ReactJS
- Typescript
- Styled Components

### Backend

- NodeJS
- Express
- Firebase
  - Authentication
  - Cloud Firestore
  - Cloud Functions
  - AdminSDK
- Google Maps API
