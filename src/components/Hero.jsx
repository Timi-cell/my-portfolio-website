import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ArrowUpRight } from "lucide-react";
import { textVariant } from "../utils/motion";

const Hero = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray(".Typewriter__wrapper");
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 10,
          rotateX: -20,
          stagger: 0.04,
        },
        "<"
      );
      // hold on screen for 2s before fading out
      tl.to({}, { duration: 2 });
      tl.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -10,
          rotateX: 20,
          stagger: 0.004,
        },
        "<1"
      );
    });

    console.log("titles", titles);
  }, []);

  return (
    <section className={`relative w-full h-[550px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-36 h-40 violet-gradient" />
        </div>

        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there,
            <br></br>
            I'm <span className="text-[#915EFF] headerFont">Samuel Aluko</span>
          </h1>

          <div className="flex space-x-1 items-center mt-3">
            <h1 className="text-white text-base font-bold lg:text-xl mr-1">
              a
            </h1>
            <h1 className="font-bold text-xl lg:text-3xl text-[#915EFF]">
              <div className="Typewriter" data-testid="typewriter-wrapper">
                <p
                  style={{ lineHeight: 0 }}
                  className="Typewriter__wrapper m-0"
                >
                  Frontend Developer
                </p>
                <p
                  style={{ lineHeight: 0 }}
                  className="Typewriter__wrapper m-0"
                >
                  Backend Developer
                </p>
                <p
                  style={{ lineHeight: 0 }}
                  className="Typewriter__wrapper m-0"
                >
                  Full Stack Developer
                </p>
                <p
                  style={{ lineHeight: 0 }}
                  className="Typewriter__wrapper m-0"
                >
                  Creative Problem Solver
                </p>
                <p
                  style={{ lineHeight: 0 }}
                  className="Typewriter__wrapper m-0"
                >
                  JavaScript Expert
                </p>
              </div>
            </h1>
          </div>
          <p class="text-base lg:text-lg w-full md:w-1/2 mt-3">
            I specialize in building responsive and captivating websites/web
            applications for individuals, startups and brands. I'm open to
            collaborations, contract and part/full time roles.
          </p>
          <div class="flex flex-col md:flex-row justify-start items-start gap-2 md:gap-4">
            <a
              href="/SamuelAlukoCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 group"
            >
              {" "}
              <div
                class="cursor-pointer flex items-center gap-2 border-[4px]
                  h-[40px] rounded-md uppercase font-semibold justify-center  lg:text-base  lg:h-[50px] bg-[#222] text-[13px] border-b-[#915EFF] border-t-0 border-r-0 border-l-0 px-3 mt-3 "
              >
                Check Out My CV
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </div>
            </a>
            <a className="transition-all duration-300 group">
              {" "}
              <div
                class="cursor-pointer flex items-center gap-2 border-[4px]
                  h-[40px] rounded-md uppercase font-semibold justify-center  lg:text-base  lg:h-[50px] bg-[#222] text-[13px] border-b-[#915EFF] border-t-0 border-r-0 border-l-0 px-3 mt-3"
              >
                Visit my Github Profile
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
      <div style={{ marginTop: "50px" }}></div>
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
