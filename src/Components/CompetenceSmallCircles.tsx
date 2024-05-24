import { FC, useContext } from "react";
import CompetenceContext from "./CompetenceContext";
import ActiveCompetenceCircle from "./ActiveCompetenceCircle";
import DisableCompetenceCircle from "./DisableCompetenceCircle";

type Props = {
  x: number;
  y: number;
  id: string;
};

const CompetenceSmallCircles: FC<Props> = ({ x, y, id }) => {
  const competenceContext = useContext(CompetenceContext);
  if (!competenceContext) return null;
  const { selectedCompetenceId } = competenceContext;

  return (
    <>
      {selectedCompetenceId !== id ? (
        <DisableCompetenceCircle x={x} y={y} id={id} />
      ) : (
        <ActiveCompetenceCircle x={x} y={y} id={id} />
      )}
    </>
  );
};

export default CompetenceSmallCircles;
