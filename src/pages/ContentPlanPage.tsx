import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MonthTabs } from "@/components/MonthTabs";
import { contentPlan } from "@/data/contentPlan";
import { motion } from "framer-motion";

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

        <div className="h-px bg-gray-300 mt-4 mb-8" />

        {/* Indicators */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="font-medium">Meses Planeados</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <AnimatedCounter value={contentPlan.length} />
            </motion.div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="font-medium">Conteúdos Planejados</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <AnimatedCounter
                value={contentPlan.reduce(
                  (acc, month) => acc + month.contents.length,
                  0,
                )}
              />
            </motion.div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="font-medium">Reels Planejados</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <AnimatedCounter
                value={contentPlan.reduce(
                  (acc, m) =>
                    acc + m.contents.filter((c) => c.type === "Dynamic").length,
                  0,
                )}
              />
            </motion.div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="h-px bg-gray-300 mt-8 mb-4" />
          <MonthTabs />
        </div>
      </div>
    </div>
  );
}
