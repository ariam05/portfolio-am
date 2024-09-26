"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton.jsx';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>Django</li>
                <li>Flask</li>
                <li>PowerBI</li>
                
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>UC Berkeley B.A. Data Science, Minor in Computer Science</li>
                <li>Coding Dojo Full Stack Software Development Certificate in Python, Java, MERN</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>exp1</li>
                <li>exp2</li>
                <li>exp3</li>
                <li>exp4</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id);
        });
    };

  return (
  <section className='mb-10 text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <img src="images/about-image.png" alt="Coding Image" width={550} height={550} style={{ borderRadius: '10%' }}/>
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='mt-10 text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>
            I'm a full stack software developer with a passion for creating interactive
            and responsive web applications. I have experience working with JavaScript, React,
            Redux, Node.js, Express, MongoDB, DynamoDb, PostgreSQL, HTML, CSS, and more. I am a 
            fast learner and I am always looking to expand my technical knowledge and skill set. I
            am a team player and I am excited to work with others to creat amazing applications.
        </p>
        <div className='flex flex-row justify-start mt-8'>
            <TabButton 
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
            >
            {" "}
            Education{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
            >
            {" "}
            Skills{" "}
            </TabButton>
            {/* <TabButton 
            selectTab={() => handleTabChange("experience")}
            active={tab === "experience"}
            >
            {" "}
            Experience{" "}
            </TabButton> */}
        
        </div>
        <div className='mt-8'> {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </div>
    </section>
  
)};

export default AboutSection