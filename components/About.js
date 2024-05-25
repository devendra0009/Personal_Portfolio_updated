import React from "react";
import { MdOutlineInterests, MdOutlineSportsVolleyball } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { IoIosFitness } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { ImBooks } from "react-icons/im";

const About = () => {
  return (
    <div className="m-auto w-[83%] pt-[4%]">
      <span className="text-2xl md:text-4xl text-white  border-b-4 border-[#ffdf00]">
        <span className="text-[#ffdf00]">About</span> Me
      </span>
      <p className="py-4 text-sm md:text-lg text-white ">
        I am a senior pursuing BTech from IT branch.I am a hardworking and
        passionate guy trying to grab latest skills and technologies. I like
        practical things more than theories. My Short term goal is to get placed
        in a reputed firm as a Software developer engineer in the next few years
        and have some new life experiences.
      </p>
      <div className="text-[#fff] md:flex md:gap-4">
        <p>
          <span className="text-[#ffdf00]">Age:</span>
          <span>&nbsp;21</span>
        </p>
        <p>
          <span className="text-[#ffdf00]">Gender:</span>
          <span>&nbsp;Male</span>
        </p>
        <p>
          <span className="text-[#ffdf00]">Language:</span>
          <span>&nbsp;Hindi, English</span>
        </p>
        <p>
          <span className="text-[#ffdf00]">Profession:</span>
          <span>&nbsp;Student</span>
        </p>
      </div>
      <div className="view my-6">
        <a
          href="https://docs.google.com/document/d/1j-2uW381-9CJgBPHK9cndm__XRAJJCi0/edit?usp=sharing&ouid=117162244084866879149&rtpof=true&sd=true"
          target="_blank"
        >
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
      {/* Education  */}
      <div className="mt-8 p-8 bg-black rounded-lg hidden md:grid">
        <div className="flex gap-1 items-center pb-4 text-[#ffdf00]">
          <ImBooks className="text-2xl" />
          <h2 className="text-2xl">Education</h2>
        </div>
        <div className="text-white">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-start">Degree</th>
                <th className="text-start">Branch</th>
                <th className="text-start">Institution/School</th>
                <th className="text-start">Percentage Obtained</th>
                <th className="text-start">Graduated Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BTech</td>
                <td>Information Technology</td>
                <td>Maharaja Surajmal Institute of Technology</td>
                <td>9.183 cgpa</td>
                <td>2020-present</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Higher Secondary School</td>
                <td>Science (PCM)</td>
                <td>Evergreen Public School</td>
                <td>95%</td>
                <td>2018-2020</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Secondary School</td>
                <td>All Subjects</td>
                <td>NS Public School</td>
                <td>92%</td>
                <td>till 2018</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
