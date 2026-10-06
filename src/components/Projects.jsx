import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      className="bg-tertiary p-5 rounded-2xl w-full h-auto pb-10 md:pb-0 md:h-[550px]"
    >
      <div
        className="relative w-full h-[230px]"
        style={{ cursor: "pointer" }}
        onClick={() => window.open(live_site_link, "_blank")}
      >
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
      </div>

      <div className="mt-5">
        <h3 className="text-foreground font-bold text-[24px]">{name}</h3>
        <div className="flex items-center gap-3 justify-start text-base mt-2">
          <a href={live_site_link} target="_blank">
            <button className="bg-black-100 text-foreground border border-foreground/10 hover:bg-black-200 rounded-2xl px-3 py-1.5 flex items-center gap-1.5 transition-colors">
              <span>Visit Site</span> <ArrowUpRight size={20} />
            </button>
          </a>
          {source_code_link && (
            <a href={source_code_link} target="_blank">
              <button className="bg-black-100 text-foreground border border-foreground/10 hover:bg-black-200 rounded-2xl px-3 py-1.5 flex items-center gap-1.5 transition-colors">
                <span>Github Repo</span>{" "}
                <SocialIcon
                  network="github"
                  // url="https://www.github.com"
                  style={{ height: 25, width: 25 }}
                />
              </button>
            </a>
          )}
          {/* <button>Github Repo</button> */}
        </div>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [visibleProjectCount, setVisibleProjectCount] = useState(4);
  const displayedProjects = projects.slice(0, visibleProjectCount);

  const handleShowMore = () => {
    const batchSize = window.matchMedia("(min-width: 1024px)").matches ? 2 : 1;
    setVisibleProjectCount((count) => {
      return Math.min(count + batchSize, projects.length);
    });
  };

  return (
    <section id="projects">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} text-center`}>
          Here are some of my works
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Projects.
        </h2>
      </motion.div>

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div> */}

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-x-3 gap-y-6">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {visibleProjectCount < projects.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleShowMore}
            className="bg-black-100 px-8 py-3 rounded-2xl text-foreground font-semibold hover:bg-black-200 transition-all duration-300"
          >
            See More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
