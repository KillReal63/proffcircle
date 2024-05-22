import { useContext } from "react";
import CompetenceContext from "./CompetenceContext";

type Props = {
  x: number;
  y: number;
};
const DisableCircle = ({ x, y }: Props) => {
  const competenceContext = useContext(CompetenceContext);
  if (!competenceContext) return null;
  const { handleClick } = competenceContext;

  return <circle cx={x} cy={y} r={12} onClick={handleClick} fill="#ADADAD" />;
};

export default DisableCircle;
