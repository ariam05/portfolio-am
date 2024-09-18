"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import ProjectTag from './ProjectTag.jsx';



const projectsData = [
    {
        id: 1,
        title: "2D Platform Game",
        description: "platform game in pygame",
        image: "/images/projects/1.png",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Bear Territory",
        description: "Study app",
        image: "/images/projects/2.png",
        tags: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Pacman Game",
        description: "platform game in pygame",
        image: "/images/projects/3.png",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "2D Platform Game",
        description: "platform game in pygame",
        image: "/images/index-image.png",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Bear Territory",
        description: "Study app",
        image: "/images/projects/2.png",
        tags: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Pacman Game",
        description: "platform game in pygame",
        image: "/images/projects/3.png",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tags.includes(tag)
    );
  return (
    <>
        <h2>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
        <ProjectCard 
        key={project.id} title={project.title} 
        description={project.description} 
        imgURL={project.image} 
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
    ))}
    </div>
    </>    
    
  );
};

export default ProjectSection;