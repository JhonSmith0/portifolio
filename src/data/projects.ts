import { IProject } from "../interface";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Forkify",
    introduction:
      "Aplicativo onde você pode pesquisar mais de 1.000.000 de receitas de comida e calcular quantos ingredientes são necessários para qualquer quantidade de pessoas",
    description: [
      "O Forkify é um projeto inovador que oferece aos usuários a oportunidade de explorar uma extensa coleção de mais de 1 milhão de receitas deliciosas. Com essa plataforma, entusiastas da culinária e amantes da comida podem descobrir novas opções, além de calcular automaticamente a quantidade de ingredientes necessários para qualquer número de pessoas.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "SASS", "GIT", "MVC", "ES6"],
    liveLink: "https://forkifyjhonsmith.netlify.app/",
    githubLink: "https://github.com/JhonSmith0/Forkify-Project",
    desktopPhoto: "/jpeg/forkify.jpg",
  },
  {
    id: 2,
    name: "Smither",
    introduction: `Smither é um empolgante jogo de adivinhação de palavras que desafia os jogadores a decifrarem palavras escondidas, selecionando estrategicamente letras. Ele oferece uma experiência emocionante e imersiva.`,
    description: [
      `Smither é um empolgante jogo de adivinhação de palavras que desafia os jogadores a decifrarem palavras escondidas, selecionando estrategicamente letras. Ele oferece uma experiência emocionante e imersiva.`.trim(),
    ],
    tools: ["HTML", "CSS", "JavaScript", "GIT", "MVC", "ES6"],
    liveLink: "https://jhonsmith0.github.io/Smither/",
    githubLink: "https://github.com/jhonsmith0/smither",
    desktopPhoto: "/jpeg/smither.jpg",
  },
  {
    id: 3,
    name: "Bankist",
    introduction:
      `O Bankist é um aplicativo bancário abrangente que oferece uma variedade de recursos, incluindo transferências de dinheiro contínuas, solicitações de empréstimos, rastreamento do histórico de transações e muito mais. Ele fornece aos usuários uma experiência bancária realista, capacitando-os a gerenciar suas finanças de maneira eficiente e conveniente.
`.trim(),
    description: [
      `O Bankist é um aplicativo bancário abrangente que oferece uma variedade de recursos, incluindo transferências de dinheiro contínuas, solicitações de empréstimos, rastreamento do histórico de transações e muito mais. Ele fornece aos usuários uma experiência bancária realista, capacitando-os a gerenciar suas finanças de maneira eficiente e conveniente.
      `.trim(),
    ],
    tools: ["HTML", "CSS", "JavaScript", "GIT", "Api externa"],
    liveLink: "https://jhonsmith0.github.io/Bankist-Project/",
    githubLink: "https://github.com/JhonSmith0/Bankist-Project",
    desktopPhoto: "/jpeg/bankist.jpg",
  },
];
