import { MonthTabs } from "@/components/MonthTabs";
import { contentPlan } from "@/data/contentPlan";

export function ContentPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Título Geral */}
        <div>
          <h1 className="text-4xl font-bold text-primary">
            📆Plano de Gestão de Conteúdos 2027
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Estratégia digital anual da Liga Bancária, estruturada para
            fortalecer a presença institucional, aumentar o engajamento e
            consolidar a identidade competitiva da Liga.
          </p>
        </div>

        {/* Indicators */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p>Meses Planeados</p>
            <p className="text-2xl font-bold text-primary">
              {contentPlan.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p>Conteúdos Planejados</p>
            <p className="text-2xl font-bold text-primary">
              {contentPlan.reduce(
                (acc, month) => acc + month.contents.length,
                0,
              )}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p>Reels Planejados</p>
            <p className="text-2xl font-bold text-primary">
              {contentPlan.reduce(
                (acc, m) =>
                  acc + m.contents.filter((c) => c.type === "Dynamic").length,
                0,
              )}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <MonthTabs />
        </div>
      </div>
    </div>
  );
}
