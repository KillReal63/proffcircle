import { useContext } from "react";
import CompetenceCircle from "./CompetenceCircle";
import ConnectingLines from "./ConnectingLines";
import SkillsCircle from "./SkillsCircle";
import CompetenceContext from "./CompetenceContext";

function App() {
  const competenceContext = useContext(CompetenceContext);
  if (!competenceContext) return null;
  const { selectCompetence } = competenceContext;

  const centerX = 327.5;
  const centerY = 304;

  return (
    <div className="relative">
      <SkillsCircle centerX={centerX} centerY={centerY} radius={267} />
      {selectCompetence ? <ConnectingLines /> : null}
      <CompetenceCircle centerX={centerX} centerY={centerY} radius={128} />
    </div>
  );
}

export default App;
