import { contentPlan } from "@/data/contentPlan";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MonthSection } from "./MonthSection";

export function MonthTabs() {
  return (
    <Tabs
      defaultValue={`${contentPlan[0].month}-${contentPlan[0].year}`}
      className="w-full"
    >
      <TabsList className="gap-2">
        {contentPlan.map((item) => (
          <TabsTrigger
            key={`${item.month}-${item.year}`}
            value={`${item.month}-${item.year}`}
            className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md shadow bg-white"
          >
            {item.month}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Conteúdo do mês */}
      {contentPlan.map((month) => (
        <TabsContent key={month.month} value={`${month.month}-${month.year}`}>
          <MonthSection monthPlan={month} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
