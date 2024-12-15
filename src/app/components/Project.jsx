"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Resume Builder",
    description:
      "A web application for creating, editing, and downloading professional resumes with real-time preview, responsive design, and PDF export functionality.",
    image: "/images/projects/resumeBuilder.jpg",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/RajSubbiahYadav/ResumeFrontend",
    previewUrl: "https://resumebuilder.buildbyraj.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal website built using Next.js to showcase skills, projects, and experiences, featuring a clean and responsive design.",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/RajSubbiahYadav/Portfolio",
    previewUrl: "https://portfolio.buildbyraj.com/",
  },
  {
    id: 3,
    title: "FileShare Application",
    description:
      "A secure file-sharing platform enabling uploads, downloads, and management with a user-friendly interface, backed by a Node.js and React-based architecture.",
    image: "/images/projects/FileSharing.png",
    tag: ["All", "Software"],
    gitUrl: "",
    previewUrl: "https://fileshareit.vercel.app/",
  },
  {
    id: 4,
    title: "Smart Car Model for Autonomous Driving",
    description:
      "IoT-based prototype integrating sensors and microcontrollers for autonomous navigation and obstacle detection, showcasing expertise in automation and embedded systems.",
    image: "/images/projects/iot.jpg",
    tag: ["All", "Hardware"],
    gitUrl:
      "https://drive.google.com/file/d/1MJNyln6GO3lYSkSxNH06eNR5DY6hXHt0/view?usp=sharing",
    previewUrl:
      "https://www.canva.com/design/DAGZSkQHX38/tYhcrjBuAff-Azf0x10ZBA/view?utm_content=DAGZSkQHX38&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb0ebb5fa0c",
  },
];

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
        src={imgUrl}
        alt={title}
        width={300}
        height={200}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            target="_blank"
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-16 md:mt-16">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
