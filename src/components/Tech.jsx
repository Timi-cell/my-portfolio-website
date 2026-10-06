import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const AUTO_SCROLL_SPEED = 60;

const Tech = () => {
  const marqueeRef = useRef(null);
  const interactionRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!marquee || reducedMotion.matches) return;

    let animationFrame;
    let previousTime = 0;

    const animate = (time) => {
      if (previousTime && !interactionRef.current) {
        const loopWidth = marquee.scrollWidth / 2;
        const elapsed = Math.min(time - previousTime, 32);
        const nextScrollLeft =
          marquee.scrollLeft + (elapsed * AUTO_SCROLL_SPEED) / 1000;
        marquee.scrollLeft =
          nextScrollLeft >= loopWidth
            ? nextScrollLeft - loopWidth
            : nextScrollLeft;
        if (marquee.scrollLeft >= loopWidth) {
          marquee.scrollLeft %= loopWidth;
        }
      }

      previousTime = time;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const resumeAfterInteraction = () => {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = window.setTimeout(() => {
        interactionRef.current = false;
      }, 350);
    };

    const pauseForWheel = () => {
      interactionRef.current = true;
      resumeAfterInteraction();
    };

    animationFrame = window.requestAnimationFrame(animate);
    marquee.addEventListener("wheel", pauseForWheel, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(resumeTimeoutRef.current);
      marquee.removeEventListener("wheel", pauseForWheel);
    };
  }, []);

  const pauseForTouch = () => {
    window.clearTimeout(resumeTimeoutRef.current);
    interactionRef.current = true;
  };

  const resumeAfterTouch = () => {
    window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => {
      interactionRef.current = false;
    }, 350);
  };

  return (
    <section>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} text-center`}>
          Here are all the languages, tools and technologies that I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Stack.</h2>
      </motion.div>
      <div
        ref={marqueeRef}
        className="tech-marquee mt-10"
        aria-label="Technology stack"
        onTouchStart={pauseForTouch}
        onTouchMove={pauseForTouch}
        onTouchEnd={resumeAfterTouch}
        onTouchCancel={resumeAfterTouch}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse") pauseForTouch();
        }}
        onPointerUp={(event) => {
          if (event.pointerType === "mouse") resumeAfterTouch();
        }}
        onPointerCancel={(event) => {
          if (event.pointerType === "mouse") resumeAfterTouch();
        }}
      >
        <div className="tech-marquee-track">
          {[false, true].map((isDuplicate) => (
            <ul
              key={isDuplicate ? "duplicate" : "primary"}
              aria-hidden={isDuplicate || undefined}
              className="flex shrink-0 items-center"
            >
              {technologies.map((technology) => (
                <li
                  key={`${isDuplicate ? "duplicate-" : ""}${technology.name}`}
                  className="flex w-36 shrink-0 flex-col items-center gap-4 px-2 py-3 text-center"
                >
                  <img
                    src={technology.icon}
                    alt=""
                    className={`h-20 w-20 md:h-16 md:w-16 object-contain ${
                      technology.name === "next" ||
                      technology.name === "express" ||
                      technology.name === "github"
                        ? "brightness-0 invert"
                        : ""
                    }`}
                  />
                  <span className="whitespace-nowrap text-md md:text-sm font-extrabold text-foreground">
                    {technology.displayName}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tools");
