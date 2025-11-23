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
    <section className="flex pt-20 flex-col-reverse lg:flex-row items-center justify-between gap-11 md:gap-16">
      <div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
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
          className="mt-4 text-gray-300 text-base md:text-lg max-w-3xl leading-9"
        >
          Hey there, I'm Samuel and I'm the go-to guy when it comes to anything
          web development. I specialize in turning ideas into reality using code
          and using my stack. I enjoy building clean, fast and user-friendly web
          applications that perform and convert. <br /> <br /> My approach is
          simple, I make sure I understand the goal, study the design and then
          write code that's efficient, accessible and easy to maintain. Whether
          I'm working on a landing page, a web app, or a full product
          interface... I always aim to create solutions that deliver real value
          to users. <br /> <br /> If you're someone looking forward to elevating
          your self-marketing game with a personal website or you own a startup
          or a brand and you're looking forward to having a proactive member on
          your team... I'm the one you contact and I'm just one call away.
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
