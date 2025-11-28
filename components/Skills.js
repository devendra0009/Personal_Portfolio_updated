// ...existing code...
import React from "react";
import { GiSkills } from "react-icons/gi";
import { skillsConfig } from "../config/skillConfig.js";

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 tech-skills-1">
          {skillsConfig.tech.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-center gap-2">
                <Icon
                  size={30}
                  color={item.color}
                  className="p-1 rounded-full"
                />
                <div className="mb-1 font-medium text-md">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 p-8 bg-black rounded-lg ">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <GiSkills className="text-2xl" />
          <h2 className="text-2xl">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  tech-skills-2">
          {skillsConfig.soft.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-center gap-2">
                <Icon size={30} color={item.color} />
                <div className="mb-1 font-medium text-md">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 p-8 bg-black rounded-lg ">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <h2 className="text-2xl">Languages</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-4  tech-skills-3">
          {skillsConfig.languages.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-center gap-2">
                <Icon size={30} color={item.color} />
                <div className="mb-1 font-medium text-md">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
// ...existing code...