// import "./hero.scss";
import { motion } from "framer-motion";
import { StarsCanvas } from "../stars/stars";
import { SpaceObjectCanvas } from "../canvas/moon/moon";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const Hero = () => {
  return (
    <div
      className={`flex lg:flex-row flex-col-reverse gap-10 overflow-hidden h-[calc(100vh-100px)]`}
    >
      <motion.div
        className="flex-1 bg-black-100 p-8 rounded-2xl flex flex-col justify-center gap-5"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={textVariants} className="text-5xl text-gray-400">
          BAIEL SADATBEK UULU
        </motion.h1>
        <motion.p variants={textVariants} className="text-gray-200 text-lg">
          Welcome to my portfolio! I'm a <span className="text-[orange]">web developer </span>
          passionate about creating user-friendly, visually appealing websites.
          Explore my projects, where I blend design and code to deliver
          captivating web experiences. Let's collaborate to make the web a more
          engaging and delightful place!
        </motion.p>
        <motion.div className="flex gap-2" variants={textVariants}>
          <motion.a href="#Portfolio" variants={textVariants} className="text-gray-800 p-2 bg-[orange]">
            See the Latest Work
          </motion.a>
          <motion.a href="#Contact" variants={textVariants} className="text-gray-200 border-2 border-[orange] p-2">
            Contact me
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ">
        <SpaceObjectCanvas />
      </div>
    </div>
  );
};