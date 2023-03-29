import React from "react";
import { GiSkills } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="m-auto w-[83%] pt-[4%] text-[#fff]">
      <span className="text-4xl  border-b-4 border-[#ffdf00]">
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
        <div className="cpp ">
        <div className="mb-1 font-medium text-md">
        C++ / OOPS
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[55%]"></div>
        </div>
        </div>
        {/* html-css   */}
        <div className="html-css ">
        <div className="mb-1 font-medium text-md">
        HTML & CSS
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[85%]"></div>
        </div>
        </div>
        {/* JAVASCRIPT  */}
        <div className="js ">
        <div className="mb-1 font-medium text-md">
          JAVASCRIPT
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
        </div>
        </div>
        {/* DSA  */}
        <div className="dsa  ">
        <div className="mb-1 font-medium text-md">
        Data Structure & Algorithms
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[71%]"></div>
        </div>
        </div>
        

        {/* tech-skills-2  */}
        {/* <div className="flex justify-between tech-skills-1"> */}
        {/* React  */}
        <div className="html ">
        <div className="mb-1 font-medium text-md">
          REACTJS
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[66%]"></div>
        </div>
        </div>
        {/* TAILcss  */}
        <div className="tail-css ">
        <div className="mb-1 font-medium text-md">
          TAILWIND CSS 
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[73%]"></div>
        </div>
        </div>
        {/* node  */}
        <div className="node-js ">
        <div className="mb-1 font-medium text-md">
        NODEJS 
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
        </div>
        </div>
        {/* mongo  */}
        <div className="mongo ">
        <div className="mb-1 font-medium text-md">
        MONGO DB
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[42%]"></div>
        </div>
        </div>
        
        </div>
      </div>
      {/* Soft-skills  */}
      <div className="mt-8 p-8 bg-black rounded-lg ">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <GiSkills className="text-2xl" />
          <h2 className="text-2xl">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  tech-skills-2">
        {/* PS */}
        <div className="PS ">
        <div className="mb-1 font-medium text-md">
         PROBLEM SOLVING
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[65%]"></div>
        </div>
        </div>
        {/* COMMUNICATION   */}
        <div className="comm ">
        <div className="mb-1 font-medium text-md">
        COMMUNICATION
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[69%]"></div>
        </div>
        </div>
        {/* LISTENING */}
        <div className="listening ">
        <div className="mb-1 font-medium text-md">
        LISTENING
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[72%]"></div>
        </div>
        </div>
        {/* TEAML PLAYER */}
        <div className="tp  ">
        <div className="mb-1 font-medium text-md">
        TEAM PLAYER
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[77%]"></div>
        </div>
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
        <div className="PS ">
        <div className="mb-1 font-medium text-md">
         HINDI
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[79%]"></div>
        </div>
        </div>
        {/* ENGLISH   */}
        <div className="comm ">
        <div className="mb-1 font-medium text-md">
        ENGLISH
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[78%]"></div>
        </div>
        </div>
        {/* FRENCH */}
        <div className="listening ">
        <div className="mb-1 font-medium text-md">
        FRENCH
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[25%]"></div>
        </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
