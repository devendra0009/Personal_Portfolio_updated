import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import calc from '../public/calc.jpg';
import myDiary from '../public/mydiary.jpg';
import todo from '../public/todo.jpg';
import wordTwin from '../public/wordTwin.jpg';
import newsPaper from '../public/newsPaper.jpg';
import tri2do from '../public/tri2do.png';
import mopie from '../public/mopie.webp';
import ecom from '../public/ecom.png';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
// import "@splidejs/react-splide/css/sea-green";
import '@splidejs/react-splide/css/core';

const Projects = () => {
  return (
    <div className="mx-auto w-[83%] pt-[4%] text-[#fff] ">
      <span className="text-2xl md:text-4xl border-b-4 border-[#ffdf00]">
        My <span className="text-[#ffdf00]">Projects</span>
      </span>
      {/* Carousel  */}
      <div className="bg-black my-8 rounded-lg">
        <Splide
          aria-labelledby="My Projects"
          options={{
            autoplay: true,
            // type: 'loop',
            rewind: true,
            width: '100%'
          }}
        >
          <SplideSlide>
            <div className="slide-1 rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3  ">
                <Image
                  src={tri2do}
                  alt="traqo"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Tri2<span className="text-blue-400">Do</span> App
                </p>
                <p className="text-gray-300  text-sm md:text-[16px]">
                  <p>
                    All in one DSA solving platform, with 6 sheets support from
                    different creators. Provided with a smooth UI/UX.
                  </p>
                  <p>
                    Built on NextJs and having various functionalities making
                    your problem solving journey much better.
                  </p>
                  <p>
                    Techs Used: NextJs, TailwindCss, WebScraping, Antd,
                    Git/Github, Vercel.
                  </p>
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a href="https://tri2do.vercel.app/" target="_blank">
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/tri2doo"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-1 rounded-md p-7 my-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3  ">
                <Image
                  src={ecom}
                  alt="ecomimg"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Ecommerce<span className="text-blue-800"> App</span>
                </p>
                <p className="text-gray-300  text-sm md:text-[16px]">
                  <p>
                    This is a ecommerce app where you can shop and add/remove
                    any product you want.
                  </p>
                  <p>
                    User and admin portal is provided and custom made apis are
                    consumed.
                  </p>
                  <p>
                    Built using MongoDB, ExpressJs, ReactJs, NodeJs runtime and
                    Git/Github.
                  </p>
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a
                      href="https://backend-ecom-yeai.onrender.com/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/backend-ecom"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-1 rounded-md p-7 my-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3  ">
                <Image
                  src={mopie}
                  alt="mopie"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Mopie<span className="text-blue-800"> App</span>
                </p>
                <p className="text-gray-300  text-sm md:text-[16px]">
                  <p>
                    This Dynamic web-app displays all the latest and upcoming
                    movie&apos;s details using TMDB api.
                  </p>
                  <p>
                    User can Search any movie, Add to watch later and
                    Login/Register to keep a track.
                  </p>
                  <p>
                    Built using NextJs, Tailwind, MongoDB, TMDB Apis,
                    react-icons, Git/Github.
                  </p>
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a href="https://mopie-app.vercel.app/" target="_blank">
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/MopieApp"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="slide-2 rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3 w-[40%]">
                <Image
                  src={myDiary}
                  alt="traqo"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl  font-semibold text-neutral-800 dark:text-neutral-200">
                  my<span className="text-blue-400">Diary</span> App
                </p>
                <p className="text-gray-300 text-sm md:text-[16px]">
                  <p>
                    This a myDiary app which has functionalities of Create,
                    Read, Update and Delete a Text.
                  </p>
                  <p>
                    All Functionalities are added using MERN stack. Connected
                    MongoDb to Nodejs.
                  </p>
                  <p>
                    Tech Stack Used: ReactJS, NodeJs, ExpressJs, MongoDB,
                    Git/Github & VSCode.
                  </p>
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a
                      href="https://my-diary-rgwg.onrender.com/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/myDiaryFrontend"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-3 rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3 w-[22%]">
                <Image
                  src={newsPaper}
                  alt="newsPaper"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Khabri<span className="text-blue-400">Bhai</span> App
                </p>
                <p className="text-gray-300 text-sm md:text-[16px]">
                  <p>
                    Khabri Bhai app is a news providing app which keeps us
                    updated with the latest news around the world.
                  </p>
                  <p>
                    This app uses ReactJs and its hooks to integrate our page
                    with a external newsApi to show real-time Data.
                  </p>
                  <p>
                    Tech Stack Used: ReactJS, BootStrap, External News Api,
                    Git/Github & VSCode.
                  </p>
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a
                      href="https://devendra0009.github.io/KhabriBhai/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/KhabriBhai"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-4 rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3 w-[35%]">
                <Image
                  src={wordTwin}
                  alt="wordTwin"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Word<span className="text-blue-400">Twin</span> App
                </p>
                <p className="text-gray-300 text-sm md:text-[16px]">
                  <p>
                    ReactJs made Word Twin app which fetches the synonym or
                    related word of a inputted word.
                  </p>
                  <p>
                    Tech Stack Used: ReactJS, BootStrap, External Word Synonym
                    Api, Git/Github & VSCode.
                  </p>
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a
                      href="https://devendra0009.github.io/Word_Twin/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/Word_Twin"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-5 rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3 w-[40%]">
                <Image
                  src={todo}
                  alt="traqo"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Task<span className="text-blue-400">Saver</span> App
                </p>
                <p className="text-gray-300 text-sm md:text-[16px]">
                  <p>
                    ReactJs based App to save ur todo list uses localStorage to
                    save ur task.
                  </p>
                  <p>
                    Tech Stack Used: ReactJS, CSS, Local Storage, Git/Github &
                    VSCode.
                  </p>
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a
                      href="https://devendra0009.github.io/taskSaver/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/taskSaver"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-6 rounded-md p-7 mt-7 text-center bg-black shadow-lg  md:text-left">
              <div className="mx-auto mb-3 w-[40%]">
                <Image
                  src={calc}
                  alt="traqo"
                  className="rounded-full w-40 h-40 mx-auto"
                />
              </div>
              <div className="md:ml-6 text-center">
                <p className="mb-2 text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Calculator<span className="text-blue-400">&nbsp; App</span>
                </p>
                <p className="text-gray-300 text-sm md:text-[16px]">
                  <p>
                    This is a Calculator App that performs Addition,
                    Multiplication, Division and Subtraction.
                  </p>
                  Made purely using ReactJS. Concept Used was{' '}
                  <span className="text-blue-400">useReduce</span> hook.
                </p>

                {/* buttons  */}
                <div className="buttons text-sm md:text-[16px] flex my-2 justify-center gap-4">
                  {/* button-1  */}
                  <div className="view_demo ">
                    <a
                      href="https://devendra0009.github.io/Calculator/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                  {/* button-2  */}
                  <div className="view_code ">
                    <a
                      href="https://github.com/devendra0009/Calculator"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="bg-black text-[#ffdf00] mt-2 flex items-center text-md border-[#ffdf00] border-2 rounded p-2 bg-primary"
                      >
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Projects;
