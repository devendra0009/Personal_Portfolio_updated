import React from 'react';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <div>
      <div className="m-auto w-[83%] pt-[4%]">
        <span className="text-2xl md:text-4xl text-white  border-b-4 border-[#ffdf00]">
          <span className="text-[#ffdf00]">Contact</span> Me
        </span>
        <section className="md:flex md:gap-5 mt-8">
          <div className="p-8 lg:py-16  md:w-1/2 dark:bg-gray-700 rounded-lg ">
            <form
              action="https://formspree.io/f/xlekwova"
              method="POST"
              className="space-y-8"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" text-sm rounded-lg  block w-full p-2.5 dark:bg-[#313131] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="xyz@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  shadow-sm  dark:bg-[#313131] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="Let Davendra know how can he help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm dark:bg-[#313131] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="py-4 md:py-14 lg:py-16 grid grid-cols-2 px-4 lg:px-8 md:w-1/2 text-white md:grid-cols-2 dark:bg-gray-700">
            {/* email  */} 
            <div className=" flex flex-col items-center  border-[#313131] border-b-8 border-r-8 p-2  ">
              <div className="wrapper my-auto flex justify-center items-center flex-col">
                <HiOutlineMail color="red" size={30} className="text-center" />
                <p className="email_add text-md text-center p-2 ">
                  Fill Up the Contact form
                </p>
              </div>
            </div>
            {/* Contact  */}
            <div className=" flex flex-col items-center  border-[#313131] border-b-8  p-2  ">
              <div className="wrapper my-auto flex justify-center items-center flex-col">
                <span className="cont_icon text-4xl text-green-500">
                  <BsPhone />
                </span>
                <p className="cont_no text-md text-center p-2">
                  Contact Me at <span className="">9311986780</span>
                </p>
              </div>
            </div>
            {/* add  */}
            <div className=" flex flex-col items-center border-[#313131] border-r-8 p-2  ">
              <div className="wrapper my-auto flex justify-center items-center flex-col">
                <span className="add_icon text-4xl text-orange-500">
                  <HiOutlineLocationMarker />
                </span>
                <p className="add_name text-md text-center p-2">
                  Meet Me at <span className="">Delhi, India</span>
                </p>
              </div>
            </div>
            {/* linkedin  */}
            <div className=" flex flex-col items-center  rounded-lg p-2  ">
              <div className="wrapper my-auto flex justify-center items-center flex-col">
                <span className="linkedin_icon text-4xl text-blue-500">
                  <AiFillLinkedin />
                </span>
                <p className="linkedin text-md text-center p-1">
                  Connect Socially with me at{' '}
                  <a
                    href="https://www.linkedin.com/in/davendra-bedwal-09608b232/"
                    target="_blank"
                  >
                    {' '}
                    <span className="">Linkedin</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
