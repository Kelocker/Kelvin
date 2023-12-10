import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Hotel Reservation System",
        description: "This is a project.",
        image: "",
        gitUrl: "https://github.com/Kelocker/Hotel-Reservation-System",
      },
      {
        id: 2,
        title: "Solsync",
        description: "This is a project for APUBCC Sparkathon & Solana Hyperdrive.",
        image: "/projects/solsync.jpeg",
        gitUrl: "https://github.com/charleshorzz/solsync",
      },
      {
        id: 3,
        title: "Bertravelling AI",
        description: "This is a project for Hackathon AI HACKTEN",
        image: "/projects/bertravelling_logo.jpg",
        gitUrl: "https://github.com/Kelocker/Hackathon-AI-HACK-10",
      },

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
