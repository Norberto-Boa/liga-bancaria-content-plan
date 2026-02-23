export type ContentType = "Static" | "Dynamic";
export interface Platform {
  name: string;
  icon: string;
}

export interface ContentItem {
  type: ContentType;
  title: string;
  image?: string;
  caption: string;
  script?: string[];
  platforms: string[];
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
        image: "/images/jornada.jpg",
        caption:
          "A temporada 2027 da Liga Bancária começa oficialmente. Prepare-se para novas emoções e competitividade.",
        platforms: ["instagram", "facebook", "whatsapp"],
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
        platforms: ["instagram", "facebook"],
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
        image: "/images/standings.jpg",
        caption:
          "Atualização oficial da classificação geral da Liga Bancária 2027.",
        platforms: ["instagram", "facebook", "linkedin"],
      },
    ],
  },
];
