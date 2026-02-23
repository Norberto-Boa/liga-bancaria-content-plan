import { MonthSection } from "@/components/MonthSection";
import { contentPlan } from "@/data/contentPlan";

export function ContentPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto space-y-20">
        {contentPlan.map((item, index) => (
          <MonthSection key={index} monthPlan={item} />
        ))}
      </div>
    </div>
  );
}
