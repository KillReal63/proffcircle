import { useContext } from "react";
import CompetenceContext from "./CompetenceContext";

type Props = {
  x: number;
  y: number;
  id: string;
};
const DisableCompetenceCircle = ({ x, y, id }: Props) => {
  const competenceContext = useContext(CompetenceContext);
  if (!competenceContext) return null;
  const { handleClick } = competenceContext;

  return (
    <circle
      cx={x}
      cy={y}
      r={12}
      onClick={() => handleClick(id)}
      fill="#ADADAD"
    />
  );
};

export default DisableCompetenceCircle;
