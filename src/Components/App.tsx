import CompetenceCircle from "./CompetenceCircle";
import SkillsCircle from "./SkillsCircle";

function App() {
  const centerX = 327.5;
  const centerY = 304;

  return (
    <div className="relative">
      <SkillsCircle centerX={centerX} centerY={centerY} radius={267} />
      <CompetenceCircle centerX={centerX} centerY={centerY} radius={128} />
    </div>
  );
}

export default App;
