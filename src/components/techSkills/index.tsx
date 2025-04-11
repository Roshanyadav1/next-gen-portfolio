import React from 'react'
import Image from 'next/image'
import { techExpertise, toolsAndWorkflow, currentlyLearning } from '@/constants'


function TechSkills() {
    return (
        <div className='lg:p-14 p-4 '>
            <section className='text-2xl flex flex-col gap-6'>
                <h2 className="text-6xl font-bold">The Stack Behind My Code</h2>
                <div className='flex flex-col gap-24 py-10'>

                <div className="grid grid-cols-1 md:grid-cols-3 relative min-h-screen gap-10">
                    {/* Sticky Column */}
                    <div className="lg:sticky top-16 h-fit">
                        <h3 className="text-5xl font-bold mb-4">Technology Expertise</h3>
                        <p className=' text-lg'>
                            Core frameworks, languages, and cloud services I use daily to build high-performance, scalable web applications.
                        </p>
                    </div>
                    <div className='col-span-2 grid gap-x-12 gap-y-24 lg:gap-x-[4.5rem] mt-4 sm:grid-cols-2'>
                        {
                            techExpertise.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 ">
                                        <Image priority src={item.icon} alt={item.name}
                                            width={48}
                                            height={48}
                                        // className="drop-shadow-[0_4px_8px_rgba(255,255,255,0.6)]"
                                        />
                                    </div>
                                    <h4 className="text-4xl font-semibold">{item.name}</h4>
                                    <p className='text-lg'>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='border-b-[1px] w-full'></div>
                <div className="grid grid-cols-1 md:grid-cols-3 relative min-h-screen gap-10">
                    <div className="lg:sticky top-16 h-fit">
                        <h3 className="text-5xl font-bold mb-4">Workflow & Tools</h3>
                        <p className=' text-lg'>
                            The engineering stack that powers how I plan, code, test, and collaborate efficiently.
                        </p>
                    </div>
                    <div className='col-span-2 grid gap-x-12 gap-y-24 lg:gap-x-[4.5rem] mt-4 sm:grid-cols-2'>
                        {
                            toolsAndWorkflow.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 ">
                                        <Image priority src={item.icon} alt={item.name} width={48} height={48} />
                                    </div>
                                    <h4 className="text-4xl font-semibold">{item.name}</h4>
                                    <p className='text-lg'>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='border-b-[1px] w-full'></div>
                <div className="grid grid-cols-1 md:grid-cols-3 relative h-full gap-10">
                    <div className="lg:sticky top-16 h-fit">
                        <h3 className="text-5xl font-bold mb-4">Currently Exploring</h3>
                        <p className=' text-lg'>
                            Technologies I’m actively learning to stay ahead in modern web development.
                        </p>
                    </div>
                    <div className='col-span-2 grid gap-x-12 gap-y-24 lg:gap-x-[4.5rem] mt-4 sm:grid-cols-2'>
                        {
                            currentlyLearning.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 ">
                                        <Image priority src={item.icon} alt={item.name} width={48} height={48} />
                                    </div>
                                    <h4 className="text-4xl font-semibold">{item.name}</h4>
                                    <p className='text-lg'>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default TechSkills       