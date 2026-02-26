export type ContentType = "Static" | "Dynamic";
export interface Platform {
  name: string;
  icon: string;
}

export interface ImageProps {
  src: string;
  aspectRatio: "1:1" | "4:5";
}

export interface ContentItem {
  type: ContentType;
  title: string;
  image?: ImageProps;
  caption: string;
  script?: string[];
  platforms: Platform[];
}

export interface MonthPlan {
  month: string;
  year: number;
  summary: string;
  contents: ContentItem[];
}

export const contentPlan: MonthPlan[] = [
  {
    month: "Março",
    year: 2026,
    summary:
      "Mês de abertura da temporada 2026, ativação institucional e lançamento oficial da competição.",
    contents: [
      {
        type: "Static",
        title: "Rectrospectiva 2025",
        image: {
          src: "/janeiro/champs.jpg",
          aspectRatio: "4:5",
        },
        caption:
          "Relembre os momentos mais emocionantes da temporada 2026 da Liga Bancária!",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title: "Estatisticas da Temporada 2026",
        image: {
          src: "/janeiro/estatisticas.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Chegou o momento de dar início à temporada 2027 da Liga Bancária!",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Dynamic",
        title: "Temporada em 20s",
        script: [
          "Cena 1: Apresentacao do titulo",
          "Cena 2: Passagem de imagens rapidamente mostrando alguns momentos da liga",
          "Cena 3: Apresentacao do slogan da liga",
          "Cena 4: Videos de algumas jogadas de 2025",
          "Cena 5: Prontos para temporada 2026? #LigaBancaria2026",
        ],
        caption:
          "Chegou o momento de dar início à temporada 2026 da Liga Bancária!",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title: "Destaque da Semana",
        image: {
          src: "/janeiro/destaque-da-semana.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Lembras da Época do Stimen? Comenta o jogo que ele te surpreendeu mais!",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title: "Treinadores em Ação [Carrossel]",
        image: {
          src: "/janeiro/treinadores-carousel.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Conheça os treinadores que estão por trás das estratégias vencedoras da Liga Bancária 2026!",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Dynamic",
        title: "Momentos Quentes🔥 | Highlights",
        script: [
          "Cena 1: Apresentacao do titulo",
          "Cena 2: Video - 01 [Golo]",
          "Cena 3: Video - 02 [Defesa Incrivel]",
          "Cena 4: Video - 03 [Jogada de Mestre]",
          "Cena 5: Video - 04 [Momento Engracado]",
        ],
        caption:
          "Quem disse que liga bancária não tem emoção? Confira os alguns momentos quentes da temporada 2026! #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title:
          "Quem fez a liga acontecer? Conheça os membros da comissao [Carrossel]",
        image: {
          src: "/janeiro/membros-da-comissao.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Conhece os membros da comissão organizadora que estiveram por trás do sucesso da Liga Bancária 2025! #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title: "Figura da Semana: Demostracao de um membro!",
        image: {
          src: "/janeiro/figura-da-semana.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Uma Caption relacionada a figura da semana, pode ser um jogador, treinador ou membro da comissao organizadora. #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
    ],
  },
  {
    month: "Abril",
    year: 2026,
    summary:
      "Continuamos com activacao da temporad, em meio a rectrospectiva e destaques da temporada 2025",
    contents: [
      {
        type: "Static",
        title: "Lista de Melhores Marcadores da Temporada 2025",
        image: {
          src: "/abril/melhores-marcadores.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Confira os artilheiros que brilharam na temporada 2025 da Liga Bancária! Quem será o próximo a entrar para essa lista de estrelas? #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Dynamic",
        title: "Assalto ao titulo 2025",
        script: [
          "Cena 1: Apresentacao do titulo",
          "Cena 2: Entrada em campo do jogadores",
          "Cena 3: Capitaes a cumprimentar-se e falar com o arbitro",
          "Cena 4: Fotos das bancadas/videos das bancadas, mostrando a torcida",
          "Cena 5: Highlight do jogo decisivo da temporada 2025 [ABSA vs MyBUCKS]",
          "Cena 6: Golo decisio e comemoracao",
          "Cena 7: Fotos pois jogo, na comemoracao do titulo",
        ],
        caption:
          "Lembra-se desse jogo emocionante que decidiu a temporada 2025 da Liga Bancária? Reviva os momentos mais intensos dessa partida inesquecível! #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title:
          "Figura da Semana: Demostracao de um membro[Jogador, Treinador ou Comissao Organizadora]!",
        image: {
          src: "/abril/figura-da-semana-01.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Uma Caption relacionada a figura da semana, pode ser um jogador, treinador ou membro da comissao organizadora. #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Dynamic",
        title: "Sentes Falta da Liga? [Entrevista]",
        script: [
          "Cena 1: Cenario do local empresarial, JAT!",
          "Cena 2: Entrevista do primeiro jogador, fazendo a pergunta: Sentes falta da liga?",
          "Cena 3: Resposta de varios jogadores, treinadores e membros da comissao organizadora",
          "Cena 4: Mostrando a segunda pergunta, O que mais sentes falta na liga?",
          "Cena 5: Resposta de varios jogadores, treinadores e membros da comissao organizadora [Curtas]",
          "Cena 6: Mostrando o terceiro cenario, perguntando aos seguidores: E tu, o que mais sentes falta da liga? [Caixa de perguntas]",
          "Cena 7: Recomendar que respondam nos comentarios o que mais sentem falta na liga!",
        ],
        caption: "A nossa Liga que ja faz parte de nos!",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title: "Liga Bancaria do lado de quem assiste! [Carrossel]",
        image: {
          src: "/abril/claque-01.webp",
          aspectRatio: "1:1",
        },
        caption:
          "A nossa liga é feita para os nossos torcedores! Conheça as histórias de quem acompanha a Liga Bancária de perto, seja nas arquibancadas ou pelas redes sociais! #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title: "Lista das equipes da primeira divisao!",
        image: {
          src: "/abril/equipas-divisao.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Quem achas que vai surpreender nessa temporada? Conheça as equipes que estão na primeira divisão da Liga Bancária 2026! #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Static",
        title: "Lista das equipes da segunda divisao!",
        image: {
          src: "/abril/equipas-divisao.jpg",
          aspectRatio: "1:1",
        },
        caption:
          "Quem achas que vai surpreender nessa temporada? Conheça as equipes que estão na segunda divisão da Liga Bancária 2026! #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Dynamic",
        title: "Highlights! [Video]",
        script: [
          "Cena 1: Apito do arbitro!",
          "Cena 2: Um momento alto [Finta/defesa] - repeticao em slow motion",
          "Cena 3: Uma foto de reacao de um jogador ou treinador",
          "Cena 4: Um outro momento alto [Golo/defesa] - repeticao em slow motion",
          "Cena 5: Outro momento alto [Golo/defesa] - repeticao em slow motion",
          "Cena 6: Junho parece estar tao longe",
        ],
        caption:
          "Sinta mais saudades? Reviva os momentos mais emocionantes da temporada 2025 da Liga Bancária! #LigaBancaria2026",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
    ],
  },
];
