import { certifications, projects } from '@/constants'
import React from 'react'

function Projects() {
    return (
        <div className='lg:px-14 px-4 '>
            <section className="text-2xl flex flex-col gap-6">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Projects</h2>

                <div className="flex flex-col gap-16">
                    {projects.map((project) => (
                        <div key={project.url} className="group">
                            <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-[1px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full after:right-0 after:origin-right"
                                >
                                    {project.name}
                                </a>
                            </h3>

                            <p className="text-base md:text-lg  leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
          
            <section className='text-2xl flex flex-col gap-6 lg:py-14 py-10 '>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Certifications</h2>

                <div className="flex flex-col gap-16">
                    {certifications.map((ele) => (
                        <div key={ele.url} className="group">
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                <a
                                    href={ele.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full after:right-0 after:origin-right"
                                >
                                    {ele.name}
                                </a>
                            </h3>
                            <p className="text-base mt-1">Certified by: {ele.certifiedBy}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Projects