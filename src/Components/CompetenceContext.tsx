import { createContext } from "react";

interface IProps {
  selectCompetence: boolean;
  handleClick: () => void;
  data: { name: string; mainSkills: string[]; otherSkills: string[] }[];
}

const Context = createContext<IProps | null>(null);

export default Context;
