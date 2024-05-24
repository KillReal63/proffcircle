import { createContext } from "react";

interface IProps {
  selectCompetence: boolean;
  handleClick: (id: string) => void;
  selectedCompetenceId: string | null;
  data: {
    id: string;
    name: string;
    mainSkills: string[];
    otherSkills: string[];
  }[];
}

const Context = createContext<IProps | null>(null);

export default Context;
