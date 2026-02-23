import type { MonthPlan } from "@/data/contentPlan";
import { ContentCard } from "./ContentCard";
import { useState } from "react";
import type { ContentItem } from "../data/contentPlan";
import { ContentModal } from "./contentModal";

interface Props {
  monthPlan: MonthPlan;
}

export function MonthSection({ monthPlan }: Props) {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(
    null,
  );
  return (
    <section className="py-12 border-b border-gray-200">
      {/* Cabecalho do mes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary">
          {monthPlan.month} {monthPlan.year}
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl leading-relaxed">
          {monthPlan.summary}
        </p>
      </div>

      {/* Conteudos do mes */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {monthPlan.contents.map((item, index) => (
          <ContentCard
            key={index}
            item={item}
            onClick={() => setSelectedContent(item)}
          />
        ))}
      </div>

      {/* Modal de detalhes do conteudo */}
      {selectedContent && (
        <ContentModal
          item={selectedContent}
          open={!!selectedContent}
          onOpenChange={() => setSelectedContent(null)}
        />
      )}
    </section>
  );
}
