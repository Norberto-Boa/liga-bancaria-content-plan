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
    year: 2025,
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
        title: "Estatisticas da Temporada 2025",
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
          src: "/janeiro/treinadores-carousel.jpg",
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
          src: "/janeiro/treinadores-carousel.jpg",
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
    month: "Fevereiro",
    year: 2026,
    summary:
      "Consolidação da competição, atualização de classificações e destaque individual.",
    contents: [
      {
        type: "Static",
        title: "Classificação Geral – Fevereiro 2027",
        image: {
          src: "https://scontent.fmpm3-1.fna.fbcdn.net/v/t39.30808-6/590814496_1173849231553266_5668506900928601354_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hpqHASjguyAQ7kNvwG2fE4u&_nc_oc=AdmFIBgQ2GR-NgLVdbNkkyEBXUnpwNeK2MBTg2pNZR4T4Djp4-mVoM1gOcvyzZJ9YHE&_nc_zt=23&_nc_ht=scontent.fmpm3-1.fna&_nc_gid=3ojulUroVtU-dM-xj2-3lA&oh=00_AftiWsve-PZtZL39LkR3icvJJIQ2c3GLIxtPPm9AZmN92A&oe=69A1B2EC",
          aspectRatio: "1:1",
        },
        caption:
          "Atualização oficial da classificação geral da Liga Bancária 2027.",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
    ],
  },
];
