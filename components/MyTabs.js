import { Tab } from "@headlessui/react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const MyTabs = () => {
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-black text-[#ffdf00] p-1">
          <Tab
            className={({ selected, hover }) =>
              `w-full text-lg rounded-lg py-2.5 font-medium outline-none  ${
                selected ? "bg-[#ffdf00]" : ""
              } ${selected ? " text-black" : ""} ${hover?" bg-yellow-200":""}`
            }
          >
            About
          </Tab>
          <Tab
            className={({ selected, hover }) =>
              `w-full rounded-lg py-2.5 text-lg font-medium outline-none  ${
                selected ? "bg-[#ffdf00]" : ""
              } ${selected ? " text-black" : ""} ${hover?" bg-yellow-200":""}`
            }
          >
            Experience
          </Tab>
          <Tab
            className={({ selected, hover }) =>
              `w-full rounded-lg py-2.5 text-lg font-medium outline-none  ${
                selected ? "bg-[#ffdf00]" : ""
              } ${selected ? " text-black" : ""} ${hover?" bg-yellow-200":""}`
            }
          >
            Skills
          </Tab>
          <Tab
            className={({ selected, hover }) =>
              `w-full rounded-lg py-2.5 text-lg font-medium outline-none  ${
                selected ? "bg-[#ffdf00]" : ""
              } ${selected ? " text-black" : ""} ${hover?" bg-yellow-200":""}`
            }
          >
            Project
          </Tab>
          <Tab
            className={({ selected, hover }) =>
              `w-full rounded-lg py-2.5 text-lg font-medium outline-none  ${
                selected ? "bg-[#ffdf00]" : ""
              } ${selected ? " text-black" : ""} ${hover?" bg-yellow-200":""}`
            }
          >
            Contact
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <About />
          </Tab.Panel>
          <Tab.Panel>
            <Experience />
          </Tab.Panel>
          <Tab.Panel>
            <Skills />
          </Tab.Panel>
          <Tab.Panel>
            <Projects />
          </Tab.Panel>
          <Tab.Panel>
            <Contact />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MyTabs;
