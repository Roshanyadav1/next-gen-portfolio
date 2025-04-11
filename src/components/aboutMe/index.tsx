import React from 'react'

function AboutMe() {
    return (
        <div className='lg:p-14 p-4 '>
            <section className='text-2xl flex flex-col gap-6'>
                <h2 className="text-6xl font-bold">About Me</h2>
                <p className="leading-8 ">
                    I'm a frontend developer with over 3 years of experience building and delivering high-performance, scalable web applications. I specialize in crafting clean, accessible user interfaces and implementing thoughtful features that improve usability and performance.
                </p>
                <p className="leading-8">
                    My background spans EdTech, e-commerce, and nonprofit platforms, where I've worked with technologies like React, Next.js, Redux Toolkit, Tailwind CSS, TypeScript, Node.js, and AWS (Lambda, Amplify, CloudFront, S3). I focus on shipping maintainable code, collaborating across teams, and optimizing for both user experience and developer efficiency.
                </p>
                <p className="leading-8">
                    I'm currently expanding my expertise in DevOps — learning Docker, CI/CD pipelines, and exploring infrastructure on AWS and Google Cloud. I'm also working with tools like Cypress, Jira, and Figma to support smooth development workflows from design to deployment.
                </p>
                <p className="leading-8">
                    If you're curious about the systems I've built or how I work, feel free to explore the projects below or download my resume.
                </p>
                <p className="italic font-bold">
                    Fun fact: I enjoy solving UI puzzles more than actual ones — maybe that's why I love React.
                </p>
            </section>
        </div>

    )
}

export default AboutMe  