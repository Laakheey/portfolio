"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Data Sharing Website",
    description: "NextJs website that let's us store and share file among your friends",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/Laakheey/file-drive",
    previewUrl: "https://dataharbor.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Social Media Application",
    description: "React app where we can upload images and follow our friends to see their activity",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/Laakheey/Echo",
    previewUrl: "https://echoecho.vercel.app/",
  },
  {
    id: 5,
    title: "Chat App",
    description: "NextJs app where we can send and receive messages in real time",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/Laakheey/chat-app-v1",
    previewUrl: "https://patra-phi.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    gitUrl: "https://github.com/Laakheey/gemini-api-test-app",
    previewUrl: "https://gemini-api-test-app.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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
