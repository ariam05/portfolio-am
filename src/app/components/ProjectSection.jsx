"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import ProjectTag from './ProjectTag.jsx';

const projectsData = [
    {
        id: 1,
        title: "2D Platform Game",
        description: "Dive into the thrilling adventure of the 2D Platform Game, Willo, built with Pygame! Jump, run, and slide through beautifully crafted levels filled with challenges, enemies, and power-ups. Test your skills as you navigate intricate landscapes. With engaging gameplay and captivating graphics.",
        image: "/images/projects/1.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/ariam05/2d-platform-game",
        previewUrl: "https://youtu.be/it1mxqHXcGc"
    },
    {
        id: 2,
        title: "Bear Territory (Mobile App)",
        description: "Discover the ultimate study spots with Bear Territory, a mobile app designed to help UC Berkeley students find the perfect place to focus and study! Seamlessly integrating Python, React Native, and the Google Maps API, this app guides users to ideal locations across campus. Interface crafted using Figma, Bear Territory ensures an intuitive user experience that makes navigation effortless.",
        image: "/images/projects/2.png",
        tags: ["All", "Mobile"],
        gitUrl: "https://github.com/ariam05/bear-territory",
        previewUrl: "https://www.figma.com/design/YUozFibW4iptzJtztXX86y/Bear-Territory?m=dev&t=dSWtP3U5g8iSxwVy-1",
    },
    {
        id: 7,
        title: "Bear Territory (UX/UI Design)",
        description: "Discover the ultimate study spots with Bear Territory, a mobile app designed to help UC Berkeley students find the perfect place to focus and study! Seamlessly integrating Python, React Native, and the Google Maps API, this app guides users to ideal locations across campus. Interface crafted using Figma, Bear Territory ensures an intuitive user experience that makes navigation effortless.",
        image: "/images/projects/bear.png",
        tags: ["All", "UX/UI"],
        gitUrl: "https://drive.google.com/file/d/1RnVobdFlEUV3tJ9CreHP1PwKc-fJ1_Da/view?usp=sharing",
        previewUrl: "https://www.figma.com/design/YUozFibW4iptzJtztXX86y/Bear-Territory?m=dev&t=dSWtP3U5g8iSxwVy-1"
    },
    {
        id: 3,
        title: "Pacman Game",
        description: "This immersive platform game, challenges players not only to navigate mazes but also to engage with sophisticated search algorithms. Experience the thrill of strategic gameplay as you encounter AI opponents employing Minimax, Expectimax, and Alpha-Beta Pruning techniques.",
        image: "/images/projects/3.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/ariam05/AI-search",
        previewUrl: "https://github.com/ariam05/AI-search"
    },
    {
        id: 4,
        title: "Chateau Charme",
        description: "Step into the enchanting world of Chateau Charme, your premier online destination for exquisite home decor! Discover a curated collection of stylish furnishings, elegant accents, and unique pieces designed to transform your living space into a sanctuary of beauty.",
        image: "/images/projects/charme.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/ariam05/Chateau-Charme",
        previewUrl: "https://chateaucharme.vercel.app/"
    },
    {
        id: 5,
        title: "Drawing board",
        description: "Vibrant painting app that transforms your ideas into colorful masterpieces. Whether you're sketching quick doodles or crafting detailed artwork, enjoy a seamless and intuitive experience with a variety of brushes, colors, and tools at your fingertips. Bring your imagination to life!",
        image: "/images/projects/draw.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/ariam05/drawing-board",
        previewUrl: "https://drawingboard-pink.vercel.app/"
    },
    {
        id: 6,
        title: "AC Transit Alex VUI",
        description: "Experience seamless travel planning with the AC Transit Alex VUI, an intuitive virtual user interface designed to simplify your journey! This project showcases a sleek and user-friendly design, allowing passengers to effortlessly navigate transit options, check schedules, and receive personalized travel recommendations through conversational interactions.",
        image: "/images/projects/alex.png",
        tags: ["All", "UX/UI"],
        gitUrl: "https://drive.google.com/file/d/1ZI84_exk9fHPnz6Izg36xKMiBQ2xo9tZ/view?usp=sharing",
        previewUrl: "https://www.figma.com/design/7IQwm04wvUfQHoDdrIQtLg/AC-Transit-VUI?node-id=0-1&m=dev&t=H3Ll4QNwqQvSnkqa-1"
    },
    {
        id: 8,
        title: "Job Posting Site",
        description: "Job posting site to discover hassle-free job searching, a streamlined platform designed to make finding and posting jobs easier than ever! This project features a clean, user-friendly interface where employers can quickly post job openings and job seekers can effortlessly browse opportunities tailored to their preferences.",
        image: "/images/projects/job.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/ariam05/job-postings",
        previewUrl: "/"
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("Web");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tags.includes(tag)
    );

    return (
        <section id="projects" className="py-20">
            <h2>My Projects</h2>
            <div className='flex justify-center mb-10'>
                <div className='bg-[#0d0628] rounded-3xl py-3 px-3 inline-flex'> 
                    <div className=' text-white flex flex-row justify-center items-center gap-5'>
                        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                        <ProjectTag onClick={handleTagChange} name="UX/UI" isSelected={tag === "UX/UI"} />
                        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
                        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgURL={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        design={project.design}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
