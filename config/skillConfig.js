// ...existing code...
import { TbBrandCpp, TbLanguageHiragana } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiSpringboot,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {
  FaReact,
  FaNodeJs,
  FaLanguage,
  FaJava,
  FaAssistiveListeningSystems,
} from "react-icons/fa";
import { GiComputing, GiTalk } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";

// ...existing code...

export const skillsConfig = {
  tech: [
    { id: "cpp", label: "C++", icon: TbBrandCpp, color: "white" },
    { id: "html", label: "HTML5", icon: AiFillHtml5, color: "red" },
    { id: "css", label: "CSS3", icon: DiCss3, color: "blue" },
    { id: "js", label: "JAVASCRIPT", icon: SiJavascript, color: "yellow" },
    { id: "java", label: "JAVA", icon: FaJava, color: "red" },
    { id: "spring", label: "SPRINGBOOT", icon: SiSpringboot, color: "#6aae3c" },
    { id: "react", label: "REACTJS", icon: FaReact, color: "lightBlue" },
    { id: "redux", label: "REDUX", icon: SiRedux, color: "purple" },
    { id: "tailwind", label: "TAILWIND CSS", icon: SiTailwindcss, color: "blue" },
    { id: "node", label: "NODEJS", icon: FaNodeJs, color: "green" },
    { id: "mongo", label: "MONGO DB", icon: SiMongodb, color: "lightGreen" },
    { id: "express", label: "EXPRESS JS", icon: SiExpress, color: "gray" },
    { id: "mysql", label: "MY SQL", icon: GrMysql, color: "blue" },
  ],
  soft: [
    { id: "ps", label: "PROBLEM SOLVING", icon: GiComputing, color: "purple" },
    { id: "comm", label: "COMMUNICATION", icon: GiTalk, color: "blue" },
    {
      id: "listening",
      label: "LISTENING",
      icon: FaAssistiveListeningSystems,
      color: "orange",
    },
    { id: "team", label: "TEAM PLAYER", icon: RiTeamLine, color: "pink" },
  ],
  languages: [
    { id: "hindi", label: "HINDI", icon: FaLanguage, color: "pink" },
    {
      id: "english",
      label: "ENGLISH",
      icon: TbLanguageHiragana,
      color: "orange",
    },
  ],
};
// ...existing code...