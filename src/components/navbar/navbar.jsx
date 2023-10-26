import { motion } from "framer-motion";

// import "./navbar.scss";
import { Sidebar } from "../sidebar/sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="flex items-center justify-center gap-5 p-6">
        <a href="#" className="w-10">
          <img src="/facebook.png" alt="" />
        </a>
        <a href="#" className="w-10">
          <img src="/instagram.png" alt="" />
        </a>
        <a href="#" className="w-10">
          <img src="/github.png" alt="" />
        </a>
      </div>
    </div>
  );
};
