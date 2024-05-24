import { FC, PropsWithChildren, useMemo, useState } from "react";
import Context from "./CompetenceContext";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    name: "Финансовый аналитик",
    mainSkills: ["Excel", "SQL", "VBA", "1С"],
    otherSkills: ["Power BI", "Python"],
  },
  {
    name: "Предприниматель",
    mainSkills: ["1C", "Excel", "Power BI"],
    otherSkills: [
      "Google Analytics",
      "Яндекс.Метрика",
      "Python",
      "SQL",
      "Tilda",
    ],
  },
  {
    name: "Руководитель финансового департамента компании",
    mainSkills: ["Sketch", "Figma"],
    otherSkills: ["Shopify", "HQL"],
  },
  {
    name: "Менеджер проекта",
    mainSkills: [
      "Visio",
      "1C",
      "Google Analytics",
      "Яндекс.Метрика",
      "Python",
      "SQL",
      "Tilda",
    ],
    otherSkills: ["Figma", "Sketch", "Shopify"],
  },
  {
    name: "Финансовый менеджер",
    mainSkills: ["1C", "Excel", "Power BI"],
    otherSkills: ["BPMN"],
  },
  {
    name: "Продуктовый аналитик",
    mainSkills: [
      "Google Analytics",
      "Яндекс.Метрика",
      "SQL",
      "Power BI",
      "Python",
      "Excel",
    ],
    otherSkills: ["HQL", "Tableau", "R", "Machine learning"],
  },

  {
    name: "Руководитель финансового продукта",
    mainSkills: ["Visio"],
    otherSkills: ["Python"],
  },
  {
    name: "Менеджер по цифровой трансформации",
    mainSkills: [
      "Visio",
      "Google Analytics",
      "Яндекс.Метрика",
      "Python",
      "SQL",
      "Tilda",
    ],
    otherSkills: ["Figma", "Sketch", "Shopify"],
  },
];
const CompetenceContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectCompetence, setSelectCompetence] = useState<boolean>(false);

  const [selectedCompetenceId, setSelectedCompetenceId] = useState<string | null>(null);

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
