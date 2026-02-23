import { MonthTabs } from "@/components/MonthTabs";

export function ContentPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Título Geral */}
        <div>
          <h1 className="text-4xl font-bold text-ligaBlue">
            Plano de Gestão de Conteúdos 2027
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Estratégia digital anual da Liga Bancária, organizada por mês.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <MonthTabs />
        </div>
      </div>
    </div>
  );
}
