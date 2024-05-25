import Head from "next/head";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import myimg from "../../public/myimg.png";
import Image from "next/image";
import MyTabs from "../../components/MyTabs";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://personal-portfolio-updated.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmyimg.c741f60f.png&w=1080&q=75"
          type="image/x-icon"
        />
      </Head>
      <main className="rgb(26 26 26/var(--tw-bg-opacity)) text-black  md:p-10  lg:py-8 ">
        <section className="bg-[#313131] px-8 pb-16  rounded-lg">
          {/* wrapper for m,sm dev  */}
          <motion.div
            className="w-[200px] mx-auto "
            animate={{ rotate: 360 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={myimg} alt="my_image" />
          </motion.div>
          <div className="text-center">
            <h2 className="text-4xl text-[#ffdf00] font-medium">
              Davendra Bedwal
            </h2>
            <h3 className="text-lg py-2 mt-6 bg-black text-[#ffdf00] break-all rounded-lg">
              Web Developer and Learner
            </h3>
          </div>
          {/* bg-black */}
          <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="grid md:grid-cols-2 gap-2">
            <div className="rounded-lg flex  bg-black text-[#ffdf00] hover:scale-[101%]">
              <div className="my-auto p-3">
                <HiOutlineMail className="text-xl" />
              </div>
              <div className="py-2 break-all">
                <p className=" text-sm">Email</p>
                <p className=" text-md">devendrabedwal4@gmail.com</p>
              </div>
            </div>
            <div className="  bg-black text-[#ffdf00] rounded-lg flex hover:scale-[101%]">
              <div className="my-auto p-3">
                <BsPhone className="text-xl" />
              </div>
              <div className="py-2 break-all">
                <p className=" text-sm">Phone</p>
                <p className=" text-md">+91-9311986780</p>
              </div>
            </div>
            <div className="  bg-black text-[#ffdf00]  rounded-lg flex hover:scale-[101%]">
              <div className="my-auto p-3">
                <FaBirthdayCake className="text-xl" />
              </div>
              <div className="py-2 break-all">
                <p className=" text-sm">BirthDay</p>
                <p className=" text-md">25th August 2003</p>
              </div>
            </div>
            <div className="  bg-black text-[#ffdf00] rounded-lg flex hover:scale-[101%]">
              <div className="my-auto p-3">
                <HiOutlineLocationMarker className="text-xl" />
              </div>
              <div className="py-2 pr-4 break-all">
                <p className=" text-sm">Location</p>
                <p className=" text-md">Delhi, India</p>
              </div>
            </div>
          </div>
          <div className="text-4xl hidden xsm:flex  pt-8 justify-center gap-8 text-[#ffdf00]">
            <a href="https://leetcode.com/0-index/" target="_blank">
              <SiLeetcode className="hover:scale-x-110 hover:scale-y-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/davendra-bedwal-09608b232/"
              target="_blank"
            >
              <AiFillLinkedin className="hover:scale-x-110 hover:scale-y-110" />
            </a>
            <a href="https://github.com/devendra0009" target="_blank">
              <AiFillGithub className="hover:scale-x-110 hover:scale-y-110" />
            </a>
          </div>
        </section>
        <section className=" rounded-lg bg-[#313131] pb-10 relative">
          <MyTabs />
        </section>
      </main>
    </>
  );
}
