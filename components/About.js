import React from "react";
import { MdOutlineInterests, MdOutlineSportsVolleyball } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { IoIosFitness } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { profileConfig } from "../config/config";

const About = () => {
  const educationData = [
    {
      id: 1,
      degree: "BTech",
      field: "Information Technology",
      institution: "Maharaja Surajmal Institute of Technology",
      status: "Completed",
      cgpa: "9.183",
    },
    {
      id: 2,
      degree: "Higher Secondary",
      field: "Science",
      institution: "Evergreen Public School",
      status: "Completed",
      cgpa: "95%",
    },
    {
      id: 3,
      degree: "Secondary School",
      field: "All Subjects",
      institution: "NS Public School",
      status: "Completed",
      cgpa: "92%",
    },
  ];
  return (
    <div className="m-auto w-[83%] pt-[4%]">
      <span className="text-2xl md:text-4xl text-white  border-b-4 border-[#ffdf00]">
        <span className="text-[#ffdf00]">About</span> Me
      </span>
      <p className="py-4 text-sm md:text-lg text-white">
        I am currently working as a Java Full Stack Developer at a startup,
        where I have gained hands-on experience across multiple domains and
        end-to-end software development. I am passionate about building
        practical, scalable solutions using modern technologies and continuously
        improving my technical skills. My focus is on delivering clean,
        efficient code and understanding real-world problem-solving beyond
        theoretical concepts. In the coming years, I aim to grow into a strong
        software engineer, contribute to impactful projects, and expand my
        professional and personal experiences.
      </p>

      <div className="text-[#fff] md:flex md:gap-4">
        <p>
          <span className="text-[#ffdf00]">Age:</span>
          <span>
            &nbsp;
            {new Date().getFullYear() -
              2003 -
              (new Date().getMonth() + 1 < 8 ||
              (new Date().getMonth() + 1 === 8 && new Date().getDate() < 25)
                ? 1
                : 0)}
          </span>
        </p>
        <p>
          <span className="text-[#ffdf00]">Gender:</span>
          <span>&nbsp;Male</span>
        </p>
        <p>
          <span className="text-[#ffdf00]">Language:</span>
          <span>&nbsp;{profileConfig.lang}</span>
        </p>
        <p>
          <span className="text-[#ffdf00]">Profession:</span>
          <span>&nbsp;{profileConfig.role}</span>
        </p>
      </div>
      <div className="view my-6">
        <a href={profileConfig.cv} target="_blank">
          <button
            type="button"
            className=" text-white flex items-center text-md md:text-xl rounded border-2 p-3 hover:bg-[#ffdf00] hover:text-black"
          >
            <AiFillEye className=" text-xl mr-2" />
            View CV
          </button>
        </a>
      </div>

      {/* Hobbies and interest  */}
      <div className="mt-4 p-8 bg-black rounded-lg ">
        <div className="flex gap-1 items-center justify-center text-[#ffdf00] pb-4">
          <MdOutlineInterests className="text-2xl" />
          <h2 className="text-lg md:text-2xl ">Hobbies & Interest</h2>
        </div>
        <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 text-white place-items-center">
          <div className="coding  mx-auto md:mx-0">
            <button
              type="button"
              className="flex items-center text-md md:text-xl rounded border-2  p-3 hover:bg-yellow-300 hover:text-black"
            >
              <BsCodeSlash className="mr-2" />
              Coding
            </button>
          </div>
          <div className="reading mx-auto md:mx-0">
            <button
              type="button"
              className="flex items-center text-md md:text-xl rounded border-2  p-3 hover:bg-yellow-300 hover:text-black"
            >
              <BiBookReader className="text-xl mr-2" />
              Reading
            </button>
          </div>
          <div className="sports mx-auto md:mx-0">
            <button
              type="button"
              className="flex items-center text-md md:text-xl rounded border-2  p-3 hover:bg-yellow-300 hover:text-black"
            >
              <MdOutlineSportsVolleyball className="text-xl mr-2" />
              Sports
            </button>
          </div>
          <div className="fitness mx-auto md:mx-0">
            <button
              type="button"
              className="flex items-center text-md md:text-xl rounded border-2 p-3 hover:bg-yellow-300 hover:text-black"
            >
              <IoIosFitness className="text-xl mr-2" />
              Fitness
            </button>
          </div>
          <div className="language  mx-auto md:mx-0">
            <button
              type="button"
              className="flex items-center text-md md:text-xl rounded border-2 p-3 hover:bg-yellow-300 hover:text-black"
            >
              {/* <IoLanguageOutline className="text-xl mr-2"/> */}
              <FaLanguage className="text-xl mr-2" />
              Languages
            </button>
          </div>
        </div>
      </div>
      {/* Education small dev  */}
      <div className="mt-8 p-8 bg-black rounded-lg md:hidden">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <ImBooks className="text-2xl" />
          <h2 className="text-lg md:text-2xl">Education</h2>
        </div>
        <div className="text-white">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-start">Institution</th>
                <th className="text-start">Marks </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maharaja Surajmal Institute of Technology</td>
                <td>9.183 cgpa</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Evergreen Public School</td>
                <td>95%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>NS Public School</td>
                <td>92%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Education - Beautiful Table */}
      <div className="mt-8 p-6 bg-black rounded-lg border-[#ffdf00]">
        <div className="flex gap-2 items-center pb-6 text-[#ffdf00]">
          <ImBooks className="text-2xl" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#ffdf00] text-black">
                <th className="px-4 py-3 text-left font-semibold border-2 border-[#ffdf00]">
                  Degree
                </th>
                <th className="px-4 py-3 text-left font-semibold border-2 border-[#ffdf00]">
                  Field
                </th>
                <th className="px-4 py-3 text-left font-semibold border-2 border-[#ffdf00]">
                  Institution
                </th>
                <th className="px-4 py-3 text-center font-semibold border-2 border-[#ffdf00]">
                  Status
                </th>
                <th className="px-4 py-3 text-center font-semibold border-2 border-[#ffdf00]">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((edu) => (
                <tr
                  key={edu.id}
                  className="border-b-2 border-[#ffdf00] hover:bg-gray-900 transition text-white"
                >
                  <td className="px-4 py-4 font-semibold text-[#ffdf00] border-[#ffdf00]">
                    {edu.degree}
                  </td>
                  <td className="px-4 py-4">{edu.field}</td>
                  <td className="px-4 py-4">{edu.institution}</td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded font-semibold text-sm ${
                        edu.status === "Current"
                          ? "bg-[#ffdf00] text-black"
                          : "bg-gray-700 text-[#ffdf00]"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center font-bold text-[#ffdf00]">
                    {edu.cgpa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
