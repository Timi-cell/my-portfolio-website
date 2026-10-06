import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { logo } from "../assets";

const About = () => {
  return (
    <section className="flex pt-10 flex-col-reverse lg:flex-row items-center justify-between gap-11 md:gap-16">
      <div className="min-w-0 lg:flex-1">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
        >
          <p className={styles.sectionSubText}>
            Meet Samuel Oluwatimilehin Aluko <br /> (THE CRACK DEV.)
          </p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-4 text-foreground-muted text-base md:text-lg max-w-3xl leading-9"
        >
          Most websites don't fail because the business is bad. They fail
          because of the first impression. <br /> <br /> I'm Samuel, a Frontend
          Developer who builds websites that make brands look credible and get
          found. For the past 4+ years, I've been turning ideas into fast,
          responsive, easy-to-use web applications that turn visitors into loyal
          customers. <br /> <br /> My approach is simple: understand the goal,
          study the design, then write code that's clean, accessible and easy to
          maintain. Whether it's a landing page, a Shopify store, a web app or a
          full product interface, I build with one question in mind: what will
          make this work for the people using it? <br /> <br /> If you're a
          founder, a growing brand, or a professional who needs a website that
          earns trust and brings in the right people, let's talk.
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
        className="w-80 h-80 md:w-96 md:h-96 shrink-0 aspect-square object-cover rounded-full"
      />
    </section>
  );
};

export default SectionWrapper(About, "about");
