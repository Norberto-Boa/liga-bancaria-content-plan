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
    month: "Janeiro",
    year: 2027,
    summary:
      "Mês de abertura da temporada 2027, ativação institucional e lançamento oficial da competição.",
    contents: [
      {
        type: "Static",
        title: "Abertura Oficial da Temporada 2027",
        image: {
          src: "https://images.unsplash.com/photo-1771308457245-36bda18c21d9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
          aspectRatio: "4:5",
        },
        caption:
          "A temporada 2027 da Liga Bancária começa oficialmente. Prepare-se para novas emoções e competitividade.",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
          { name: "whatsapp", icon: "whatsapp" },
        ],
      },
      {
        type: "Dynamic",
        title: "Reel: O Arranque da Época 2027",
        script: [
          "Cena 1: Plano geral do campo com logo Liga",
          "Cena 2: Entrada das equipas",
          "Cena 3: Momento de golo",
          "Encerramento com CTA para seguir a Liga",
        ],
        caption:
          "Chegou o momento de dar início à temporada 2027 da Liga Bancária!",
        platforms: [
          { name: "instagram", icon: "instagram" },
          { name: "facebook", icon: "facebook" },
        ],
      },
    ],
  },
  {
    month: "Fevereiro",
    year: 2027,
    summary:
      "Consolidação da competição, atualização de classificações e destaque individual.",
    contents: [
      {
        type: "Static",
        title: "Classificação Geral – Fevereiro 2027",
        image: {
          src: "https://images.unsplash.com/photo-1771308457245-36bda18c21d9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
          aspectRatio: "4:5",
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
