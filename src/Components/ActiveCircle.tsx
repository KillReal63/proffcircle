import { useContext } from "react";
import CompetenceContext from "./CompetenceContext";

type Props = {
  x: number;
  y: number;
};

const ActiveCircle = ({ x, y }: Props) => {
  const competenceContext = useContext(CompetenceContext);
  if (!competenceContext) return null;
  const { handleClick } = competenceContext;
  return (
    <>
      <circle cx={x} cy={y} r="15" fill="white" stroke="#00A372" />
      <circle cx={x} cy={y} r="12" fill="#00A372" onClick={handleClick} />
    </>
  );
};

export default ActiveCircle;
