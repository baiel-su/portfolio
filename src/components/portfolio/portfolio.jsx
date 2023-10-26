import { useRef } from "react";
import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AmanatKG Trucking",
    img: "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur distinctio laudantium molestias numquam quisquam, ad tempora unde et incidunt, labore temporibus, ipsa deleniti. Blanditiis.",
  },
  {
    id: 2,
    title: "Blogging App",
    img: "https://images.pexels.com/photos/1595437/pexels-photo-1595437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur distinctio laudantium molestias numquam quisquam, ad tempora unde et incidunt, labore temporibus, ipsa deleniti. Blanditiis.",
  },
  {
    id: 3,
    title: "RestAPI",
    img: "https://images.pexels.com/photos/2171277/pexels-photo-2171277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur distinctio laudantium molestias numquam quisquam, ad tempora unde et incidunt, labore temporibus, ipsa deleniti. Blanditiis.",
  },
];

const isLargeScreen = window.matchMedia("(min-width: 640px)").matches;

export const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div
        className="
      flex items-center justify-center w-full h-full overflow-hidden m-auto"
      >
        <div
          className="
        max-w-[1366px] m-auto flex flex-col 
        items-center justify-center gap-12 sm:flex-row"
        >
          <div className="flex-1 h-1/2 " ref={ref}>
            <img src={item.img} alt="" className="w-full h-full object-cover" />
          </div>
          {isLargeScreen ? (
            <motion.div className="flex-1 flex flex-col gap-8" style={{ y }}>
              <h2 className="text-7xl">{item.title}</h2>
              <p className="text-xl">{item.desc}</p>
              <a
                href="#"
                className="
              hover:bg-orange-500 hover:border-orange-600 hover:border-2
              bg-[orange] border-none  
              p-2.5 w-[200px] cursor-pointer text-center"
              >
                See Demo
              </a>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col gap-8">
              <h2 className="text-7xl">{item.title}</h2>
              <p className="text-xl">{item.desc}</p>
              <a
                href="#"
                className="
          hover:bg-orange-500 hover:border-orange-600 hover:border-2
          bg-[orange] border-none  
          p-2.5 w-[200px] cursor-pointer text-center"
              >
                See Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="xs:px-4 relative" ref={ref}>
      <div className="sm:sticky inset-0 pt-12 text-center text-[orange] text-4xl">
        <h1 className=" ">Featured Works</h1>
        {isLargeScreen ? (
          <motion.div
            style={{ scaleX }}
            className="h-2.5 bg-white"
          ></motion.div>
        ) : (
          <div style={{ scaleX }} className="h-2.5 bg-white"></div>
        )}
      </div>
      <div className="">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
