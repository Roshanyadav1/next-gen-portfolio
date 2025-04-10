"use client"
import Image from 'next/image'
import React from 'react'


function TechSkills() {

    const teckExperties = [
        {
            name: 'React JS',
            icon: '/icons/react-native-480.svg',
            description: 'Hypertext Markup Language, the standard markup language for documents designed to be displayed in a web browser.'
        },
        {
            name: 'AWS',
            icon: '/icons/aws-240.svg',
            description: 'Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML or XML.'
        },
        {
            name: 'Cloudfront',
            icon: '/icons/aws-cloudfront-240.svg',
            description: 'Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML or XML.'
        },
        {
            name: 'Firebase',
            icon: '/icons/firebase.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        },
        {
            name: 'Git',
            icon: '/icons/git-240.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        },
        {
            name: 'GraphQL',
            icon: '/icons/graphql-240.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        },
        {
            name: 'Material UI',
            icon: '/icons/material-ui-240.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        },
        {
            name: 'Node JS',
            icon: '/icons/node-js.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        },
        {
            name: 'Redux',
            icon: '/icons/redux-480.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        },
        {
            name: 'Tailwind',
            icon: '/icons/tailwind-css-240.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        },
        {
            name: 'Typescript',
            icon: '/icons/typescript-240.svg',
            description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language.'
        }
        
    ]

    return (
        <div className='lg:p-14 p-4 '>
            <section className='text-2xl flex flex-col gap-6'>
                <h2 className="text-6xl font-bold">The Stack Behind My Code</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 relative min-h-screen px-6 py-24 gap-10">
                    {/* Sticky Column */}
                    <div className="sticky top-16 h-fit">
                        <h3 className="text-[54px] font-bold mb-4">Technology Expertise</h3>
                        <p className=' text-lg'>
                            A showcase of the technologies and tools I specialize in, along with those I'm currently exploring.
                        </p>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 gap-10'>
                    {
                        teckExperties.map((item, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 ">
                                    <Image priority src={item.icon} alt={item.name}
                                        width={48}
                                        height={48}
                                        className="drop-shadow-[8px_8px_rgba(255,255,255,0.6)]"
                                    />
                                </div>
                                <h4 className="text-4xl font-semibold">{item.name}</h4>
                                <p className='text-lg'>{item.description}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 relative min-h-screen px-6 py-24 gap-10">
                    <div className="sticky top-16 h-fit">
                        <h3 className="text-3xl font-bold mb-4">Current Learning</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus tenetur recusandae consectetur. Repellat.
                        </p>
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, minima!                        </p>
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto veniam optio deleniti at est iusto
                            necessitatibus porro ratione ea perspiciatis quibusdam doloremque dolorem dignissimos pariatur.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 relative min-h-screen px-6 py-24 gap-10">

                    <div className="sticky top-16 h-fit">
                        <h3 className="text-3xl font-bold mb-4">Wanted to be future me</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus tenetur recusandae consectetur. Repellat.
                        </p>
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magnam.                        </p>
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto veniam optio deleniti at est iusto
                            necessitatibus porro ratione ea perspiciatis quibusdam doloremque dolorem dignissimos pariatur.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechSkills       