import Image from 'next/image';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import traqo from '../public/traqo.jpg';
import izenica from '../public/izenica.png';
import heliverse from '../public/heliverse.png';

const Experience = () => {
  return (
    <div className="m-auto w-[83%] pt-[4%]">
      <span className="text-2xl md:text-4xl text-[#fff] border-b-4 border-[#ffdf00]">
        My <span className="text-[#ffdf00]">Experience</span>
      </span>

      <div className="md:grid md:gap-2 lg:grid-cols-2 xl:grid-cols-3">
        {/* izenica  */}
        <section class=" rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-center">
          <div class=" ">
          <div class=" mb-6  lg:mb-0 ">
              <Image src={izenica} alt="izenica" className=" mx-auto rounded-full bg-white p-2 w-40 mb-4" />
            </div>
            <div class="md:ml-6">
              <p class="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                IZenica Technologies
                <span className="text-red-400">&nbsp;LLC</span>
              </p>
              <p class="mb-0 font-semibold text-[#ffdf00] ">
                Website Development Intern
              </p>
              <p class="text-sm md:text-[16px] text-gray-300">
                <p>
                  ● Fully Customized and Deployed the Website of the company.
                </p>
                <p>
                  ● Worked on WordPress to build, design Components & interface
                  .
                </p>
                <p>
                  ● Used Phlox Theme, Elementor to Custome the design, Wp-Forms
                  & SMTP, etc.
                </p>
                <p>
                  ● Techs Used: Wordpress, Theme Builder Plugins, GTMetrix, and
                  Photoshop.
                </p>
              </p>
              <div className="view ">
                <a
                  href="https://drive.google.com/file/d/103dcSuW85YPZGex7QTt_CgBAwyvtJ-XM/view?usp=sharing"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="bg-black  mx-auto text-[#ffdf00] my-3 md:py-2  flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary hover:bg-[#ffdf00] hover:border-white hover:text-black mt-4"
                  >
                    <AiFillEye className=" text-xl mr-2" />
                    Completion Letter
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* traqo  */}
        <section class="rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-center">
          {/* <div class="flex justify-center"> */}
          {/* <div class="m-4 block rounded-lg  p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20"> */}
          <div class="">
            <div class=" mb-6  lg:mb-0">
              <Image src={traqo} alt="traqo" className=" mx-auto rounded-full p-2 bg-white w-40 mb-4" />
            </div>
            <div class="md:ml-6">
              <p class="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Traqo.<span className="text-blue-400">io</span>
              </p>
              <p class="mb-0 font-semibold text-[#ffdf00] ">
                FronEnd Developer Intern
              </p>
              <p class="text-sm md:text-[16px] text-gray-300">
                <p>
                  ● Worked on AntDesign Pro to build and design Components &
                  UI’s .
                </p>
                <p>
                  ● Worked on React-Google-Maps to implement the markers,
                  polylining and routing functionalities using data sent by Post
                  request.{' '}
                </p>
                <p>
                  ● Designed a Kyc page which shows user’s realtime detailsof
                  aadhar, pan, driving license, bank details, etc. Built-in apis
                  of traqo made in swagger used which is later integrated on
                  front-end using Ant Design Pro.
                </p>
                <p>
                  ● Techs Used: JavaScript, ReactJS, Antd and Ant-Design Pro,
                  Swagger-Api, React-google-maps, Frappe, Git and Github.
                </p>
              </p>
              <div className="view mb-4">
                <a
                  href="https://drive.google.com/file/d/1FrW8AkuUFFzBCqkU-kU7RHwEfQvyGPNu/view?usp=sharing"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="bg-black  mx-auto text-[#ffdf00] my-3 md:py-2  flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary hover:bg-[#ffdf00] hover:border-white hover:text-black mt-4"
                  >
                    <AiFillEye className=" text-xl mr-2" />
                    Completion Letter
                  </button>
                </a>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>
        {/* Heliverse  */}
        <section class="rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-center">
          {/* <div class="flex justify-center"> */}
          {/* <div class="m-4 block rounded-lg  p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20"> */}
          <div class="">
            <div class=" mb-6  lg:mb-0">
              <Image src={heliverse} alt="traqo" className=" mx-auto rounded-full bg-white p-2 w-40 mb-4" />
            </div>
            <div class="md:ml-6">
              <p class="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Heliverse
              </p>
              <p class="mb-0 font-semibold text-[#ffdf00] ">
                JS Developer Intern
              </p>
              <p class="text-sm md:text-[16px] text-gray-300">
                <p>
                ● Developed and designed the main and Admin pages for &apos;Sell your Gadgets&apos;.
                </p>
                <p>
                  ● Created the app&apos;s frontend, integrated APIs, and deployed it on AWS.
                </p>
                <p>
                  ● Utilized JavaScript, ReactJS, SolidJS, Styled-components, Material-UI, and React-hook-forms
for implementation.
                </p>
              </p>
              <div className="view mb-4">
                <a
                  href="https://drive.google.com/file/d/1hkezdm15gB-XCijjd_FccDU3f5M710jK/view?usp=drive_link"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="bg-black  mx-auto text-[#ffdf00] my-3 md:py-2  flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary hover:bg-[#ffdf00] hover:border-white hover:text-black mt-4"
                  >
                    <AiFillEye className=" text-xl mr-2" />
                    Offer Letter
                  </button>
                </a>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
