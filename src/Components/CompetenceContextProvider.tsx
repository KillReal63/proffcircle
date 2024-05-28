import { FC, PropsWithChildren, useMemo, useState } from "react";
import Context from "./CompetenceContext";
import { v4 as uuidv4 } from "uuid";
import { data } from "./SkillsData";

const CompetenceContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectCompetence, setSelectCompetence] = useState<boolean>(false);

  const [selectedCompetenceId, setSelectedCompetenceId] = useState<
    string | null
  >(null);

  const newData = useMemo(
    () => data.map((obj) => ({ ...obj, id: uuidv4() })),
    []
  );

  const handleClick = (id: string) => {
    setSelectedCompetenceId(id);
    setSelectCompetence(!selectCompetence);
  };

  const value = {
    selectCompetence,
    handleClick,
    data: newData,
    setSelectedCompetenceId,
    selectedCompetenceId,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CompetenceContextProvider;
