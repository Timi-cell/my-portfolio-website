import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ArrowUpRight } from "lucide-react";

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
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-36 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there,
            <br></br>
            I'm <span className="text-[#915EFF]">Samuel Aluko</span>
          </h1>

          <div className="flex space-x-1 items-center mt-3">
            <h1 className="text-white text-base font-bold lg:text-xl mr-1">a</h1>
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
                  JavaScript Expert
                </p>
                <p
                  style={{ lineHeight: 0 }}
                  className="Typewriter__wrapper m-0"
                >
                  Problem Solver
                </p>
              </div>
            </h1>
          </div>
          <p class="text-base lg:text-lg pt-3 pb-4 w-full md:w-1/2">
            Welcome to my digital space. I specialize in crafting responsive and
            captivating web applications as well as seamless user interfaces
            that perform and convert for individuals, startups and brands across
            all businesses.
          </p>
          <div class="flex items-center gap-2 ">
            <div
              class="cursor-pointer flex items-center gap-2 border-[4px]
                  h-[40px] rounded-md uppercase font-semibold justify-center  lg:text-base  lg:h-[50px] bg-[#222] text-[13px] border-b-[#915EFF] border-t-0 border-r-0 border-l-0 lg:mt-3 px-3"
            >
              <a
                href="/SamuelAlukoCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Out My CV
              </a>
              <ArrowUpRight />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}></div>;{/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
      </div>
    </section>
  );
};

export default Hero;
