import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div className="xs:px-4 max-w-[1366px] m-auto text-[lightgray] ">
      <h1 className="text-5xl text-[white] top-0 left-0 text-center pt-10">Skills</h1>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay:0.25,
            duration: 1,
          },
        }}
        className="h-2/3  grid grid-cols-1 gap-20 max-w-[600px] m-auto pt-14"
      >
        <li className="flex flex-col gap-5">
          <h2 className="text-3xl text-[orange]">Front-End</h2>
          <p className="text-xl w-full">
            React, HTML, CSS, TailwindCSS, BootStrap V4, NPM, Redux Toolkit
          </p>
        </li>
        <li className="flex flex-col gap-5">
          <h2 className="text-3xl text-[orange]">Back-End</h2>
          <p className="text-xl w-full">Django, MySQL, Firebase</p>
        </li>
        <li
          className="flex flex-col gap-5"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 0.5,
            },
          }}
        >
          <h2 className="text-3xl text-[orange]">Languages</h2>
          <p className="text-xl w-full">JavaScript, Typescript, Python</p>
        </li>
      </motion.ul>
    </div>
  );
};
