"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>BTech</b> Pillai College of Engineering, Panvel
        </li>
        <li>
          <b>HSC</b> Vidyanidhi Jr college of Science
        </li>
        <li>
          <b>SSC</b> S.C.D Barfiwala High School
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Development (Udemy)</li>
        <li>Project Management Fundamentals (IBM)</li>
        <li>Python for Data Science (Coursera)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src=".//images/projects/Profile.png" alt="Hero" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <span className="text-white text-base md:text-lg">
            <p>
              Hi, I&apos;m Raj Subbiah Yadav, a Software Developer and Full-Stack
              Developer with a focus on AI/ML and a B.Tech in Electronics &
              Computer Science. I&apos;m passionate about leveraging technology to
              create solutions that make a difference.
            </p>
            <p>
              I have experience building dynamic web applications using
              technologies like React, Node.js, Express, and MongoDB. My
              portfolio showcases projects such as a Resume Builder, a FileShare
              App, and a Smart Car Model for Autonomous Driving, all of which
              reflect my dedication to learning and innovation.
            </p>
            <p>
              I&apos;m always eager to take on new challenges, improve my skills, and
              collaborate with others to build impactful projects. Feel free to
              explore my work, and let&apos;s connect!
            </p>
          </span>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
