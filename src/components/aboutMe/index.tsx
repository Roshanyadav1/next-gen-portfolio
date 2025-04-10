import React from 'react'

function AboutMe() {
    return (
        <div className='lg:p-14 p-4 '>
            <section className='text-2xl flex flex-col gap-6'>
                <h2 className="text-6xl font-bold">About Me</h2>
                <p className="leading-8 ">
                    I'm a passionate Frontend Developer with over 3 years of experience building and shipping modern web applications. I love turning ideas into interactive, user-friendly interfaces — and I get most excited about designing thoughtful UI components and bringing new features to life.
                </p>
                <p className="leading-8">
                    I’ve worked on diverse projects in EdTech, e-commerce, and nonprofit spaces, using tools like React, Redux, Tailwind CSS, and AWS. Whether it's architecting a scalable layout or writing testable code, I take pride in crafting applications that feel good and perform well.
                </p>
                <p className="leading-8">
                    I'm currently diving deeper into DevOps — learning Docker, CI/CD workflows, Node Js, and exploring both AWS and Google Cloud to enhance my full-stack deployment skills. If you're curious about what I’ve built, feel free to scroll down or check out my resume.
                </p>
                <p className="italic font-bold">
                    Fun fact: I enjoy solving UI puzzles more than actual ones — maybe that’s why I love React.
                </p>
            </section>
        </div>

    )
}

export default AboutMe  