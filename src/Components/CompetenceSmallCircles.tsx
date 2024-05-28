import { FC, useContext } from "react";
import CompetenceContext from "./CompetenceContext";

type Props = {
  x: number;
  y: number;
  id: string;
};

const CompetenceSmallCircles: FC<Props> = ({ x, y, id }) => {
  const competenceContext = useContext(CompetenceContext);
  if (!competenceContext) return null;
  const { selectedCompetenceId, handleClick } = competenceContext;

  return (
    <>
      {selectedCompetenceId !== id ? (
        <circle
          cx={x}
          cy={y}
          r={12}
          onClick={() => handleClick(id)}
          fill="#ADADAD"
        />
      ) : (
        <>
          <circle cx={x} cy={y} r="15" fill="white" stroke="#00A372" />
          <circle
            cx={x}
            cy={y}
            r="12"
            fill="#00A372"
            onClick={() => handleClick(id)}
          />
        </>
      )}
    </>
  );
};

export default CompetenceSmallCircles;
