import { motion } from "framer-motion";

import "./sidebar.scss";
import { Links } from "./links/links";
import { ToggleButton } from "./toggleButton/toggleButton";
import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar xs:w-full" animate={open ? "open" : "closed"}>
      <motion.div className="bg xs:w-full w-[400px]" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
