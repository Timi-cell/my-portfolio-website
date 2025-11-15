import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { logo } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="flex pt-10 flex-col-reverse lg:flex-row items-center justify-between gap-5">
      <div>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
        >
          <p className={styles.sectionSubText}>Meet Samuel Aluko</p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-4 text-secondary text-base md:text-lg max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in JavaScript and
          expertise in frameworks like React, Next.js, etc. I'm a quick learner
          and collaborate closely with clients to create efficient, scalable,
          and user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </motion.p>
        {/* <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div> */}
      </div>

      <motion.img
        src={logo}
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        alt="A picture of Samuel Aluko"
        className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-[50%]"
      />
    </section>
  );
};

export default SectionWrapper(About, "about");
