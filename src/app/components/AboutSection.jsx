"use client";
import React, { useTransition, useState } from 'react';
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
];

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='mb-20 text-white'> {/* Increased bottom margin here */}
            <div className='md:grid md:grid-cols-2 gap-4 items-center py-6 px-2 xl:gap-10 sm:py-12 xl:px-12' style={{ backgroundColor: '#0d0628', borderRadius: '15px' }}>
                {/* Adjust the image size and border radius */}
                <img src="images/200.png" alt="Coding Image" width={400} height={400} style={{ borderRadius: '10%' }} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <p className='mt-8 text-xl text-gray-400'>INTRODUCTION</p>
                    <h2 className='mt-1 text-3xl font-bold text-white mb-2'>Overview</h2>
                    <p className='text-sm lg:text-base mt-2 text-gray-400'>
                        I'm a full stack software developer with a passion for creating interactive
                        and responsive web applications. I have experience working with JavaScript, React,
                        Redux, Node.js, Express, MongoDB, DynamoDb, PostgreSQL, HTML, CSS, and more. I am a 
                        fast learner and I am always looking to expand my technical knowledge and skill set. I
                        am a team player and I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row justify-start mt-6'>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                    </div>
                    <div className='mt-6'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
