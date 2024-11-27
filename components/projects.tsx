'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/app/context/active-section-context'
import { useSectionInView } from '@/lib/hook'

const Projects = () => {
    const { ref } = useSectionInView('Projects')


    return (
        <section
            ref={ref}
            id='projects' className='scroll-mt-28 mb-28'>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}


type ProjectProps = typeof projectsData[number]
const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
    return <section className='group relative sm:h-[20rem] bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag, index) => (
                    <li key={index}
                        className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>

        <Image
            src={imageUrl} alt={title} quality='95'
            className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
        group-even:right-[initial] 
        group-even:-left-40
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2' />
    </section>
}




export default Projects
