import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} text-center`}>
          Here are the languages, tools and technologies that I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Stack.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img src={technology.icon} alt={technology.name} className={technology.name === "next" || technology.name === "express" ? "brightness-0 invert" : ""}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
