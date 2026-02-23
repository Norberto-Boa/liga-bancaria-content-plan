import { ContentCard } from "./components/ContentCard";
import { contentPlan } from "./data/contentPlan";
function App() {
  return (
    <>
      <ContentCard
        onClick={() => console.log("Content card clicked")}
        item={contentPlan[0].contents[0]}
      />
    </>
  );
}

export default App;
