import React from "react";
import { GiSkills, GiComputing, GiTalk } from "react-icons/gi";
import { AiFillHtml5 } from "react-icons/ai";
import { RiSpeakLine, RiTeamLine } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiRedux, SiSpringboot } from "react-icons/si";
import {
  SiJavascript,
  SiMongodb,
  SiThealgorithms,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import {
  FaLanguage,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaAssistiveListeningSystems,
  FaJava,
} from "react-icons/fa";
import {
  TbBrandCpp,
  TbBinaryTree,
  TbNetwork,
  TbLanguageHiragana,
} from "react-icons/tb";

const Skills = () => {
  return (
    <div className="m-auto w-[83%] pt-[4%] text-[#fff] text-sm md:text-[16px]">
      <span className="text-2xl md:text-4xl border-b-4 border-[#ffdf00]">
        My <span className="text-[#ffdf00]">Skills</span>
      </span>
      <div className="mt-8 p-8 bg-black rounded-lg ">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <GiSkills className="text-2xl" />
          <h2 className="text-2xl">Tech Skills</h2>
        </div>
        {/* tech-skills-1  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 tech-skills-1">
          {/* cpp */}
          <div className="cpp flex items-center gap-1 ">
            <TbBrandCpp
              color="white"
              size={30}
              className="bg-blue-500 p-1 rounded-full text-white "
            />
            <div className="mb-1 font-medium text-md">C++</div>
          </div>
          {/* html-css   */}
          <div className="html flex items-center gap-1">
            <AiFillHtml5 color="red" size={30} />
            <div className="mb-1 font-medium text-md">HTML5</div>
          </div>
          <div className="css flex items-center gap-1">
            <DiCss3 color="blue" size={30} />
            <div className="mb-1 font-medium text-md">CSS3</div>
          </div>
          {/* JAVASCRIPT  */}
          <div className="js flex items-center gap-2">
            <SiJavascript color="yellow" size={30} className="rounded-md" />
            <div className="mb-1 font-medium text-md">JAVASCRIPT</div>
          </div>
          {/* DSA  */}
          {/* <div className="dsa  flex items-center gap-2">
            <TbBinaryTree size={30} color="gray" />
            <span className="mb-1 font-medium text-md">DATA STRUCTURES</span>
          </div>
          <div className="dsa  flex items-center gap-2">
            <SiThealgorithms size={30} />
            <span className="mb-1 font-medium text-md">ALGORITHMS</span>
          </div> */}
          <div className="dsa  flex items-center gap-2">
            <FaJava size={30} color="red" />
            <span className="mb-1 font-medium text-md">JAVA</span>
          </div>
          <div className="dsa  flex items-center gap-2">
            <SiSpringboot size={30} color="#6aae3c"/>
            <span className="mb-1 font-medium text-md">SPRINGBOOT</span>
          </div>

          {/* tech-skills-2  */}
          {/* <div className="flex justify-between tech-skills-1"> */}
          {/* React  */}
          <div className="react flex items-center gap-2">
            <FaReact size={30} color="lightBlue" />
            <div className="mb-1 font-medium text-md">REACTJS</div>
          </div>
          {/* Redux  */}
          <div className="react flex items-center gap-2">
            <SiRedux size={30} color="purple" />
            <div className="mb-1 font-medium text-md">REDUX</div>
          </div>
          {/* TAILcss  */}
          <div className="tail-css flex items-center gap-2">
            <SiTailwindcss size={30} color="blue" />
            <div className="mb-1 font-medium text-md">TAILWIND CSS</div>
          </div>
          {/* node  */}
          <div className="node-js flex items-center gap-2 ">
            <FaNodeJs size={30} color="green" />
            <div className="mb-1 font-medium text-md">NODEJS</div>
          </div>
          {/* mongo  */}
          <div className="mongo flex items-center gap-2">
            <SiMongodb size={30} color="lightGreen" />
            <div className="mb-1 font-medium text-md">MONGO DB</div>
          </div>
          {/* express  */}
          <div className="mongo flex items-center gap-2">
            <SiExpress size={30} color="gray" />
            <div className="mb-1 font-medium text-md">EXPRESS JS</div>
          </div>
          {/* sql  */}
          <div className="mongo flex items-center gap-2">
            <GrMysql size={30} color="blue" />
            <div className="mb-1 font-medium text-md">MY SQL</div>
          </div>
        </div>
      </div>

      {/* Soft-skills  */}
      <div className="mt-8 p-8 bg-black rounded-lg ">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <GiSkills className="text-2xl" />
          <h2 className="text-2xl">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  tech-skills-2">
          {/* PS */}
          <div className="PS flex items-center gap-2">
            <GiComputing color="purple" size={30} />
            <div className="mb-1 font-medium text-md">PROBLEM SOLVING</div>
          </div>
          {/* COMMUNICATION   */}
          <div className="comm flex items-center gap-2">
            <GiTalk color="blue" size={30} />
            <div className="mb-1 font-medium text-md">COMMUNICATION</div>
          </div>
          {/* LISTENING */}
          <div className="listening flex items-center gap-2">
            <FaAssistiveListeningSystems color="orange" size={30} />
            <div className="mb-1 font-medium text-md">LISTENING</div>
          </div>
          {/* TEAML PLAYER */}
          <div className="tp  flex items-center gap-2">
            <RiTeamLine color="pink" size={30} />
            <div className="mb-1 font-medium text-md">TEAM PLAYER</div>
          </div>
        </div>
      </div>

      {/* Language skills  */}
      <div className="mt-8 p-8 bg-black rounded-lg ">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <FaLanguage className="text-2xl" />
          <h2 className="text-2xl">Languages</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-4  tech-skills-3">
          {/* hindi */}
          <div className="hindi flex items-center gap-2">
            <FaLanguage size={30} color="pink" />
            <div className="mb-1 font-medium text-md">HINDI</div>
          </div>
          {/* ENGLISH   */}
          <div className="eng flex items-center gap-2">
            <TbLanguageHiragana size={30} color="orange" />
            <div className="mb-1 font-medium text-md">ENGLISH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
