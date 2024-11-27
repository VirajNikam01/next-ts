'use client'


import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hook'

const Intro = () => {
    const { ref } = useSectionInView('Home')
    return (
        <section
            ref={ref}
            id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-32'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Image src='https://avatars.githubusercontent.com/u/140100146?v=4'
                            alt='profile'
                            width='192'
                            height='192'
                            quality='95'
                            priority={true}
                            className='h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white'
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
                        className='text-4xl absolute bottom-0 right-0'>
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
                <span className='font-bold'>Hello, I'm Viraj.</span> I'm a <span className='font-bold'>full-stack developer</span> with <span className='font-bold'>1.5 years</span>
                of experience. I enjoy building sites & apps. My focus is <span className='underline'>React( Next.js )</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
                <Link
                    href='#contact'
                    className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full'
                >Contace me here <BsArrowRight /></Link>
                <a
                    href="#"
                    download
                    className='bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer'
                >Download CV <HiDownload /></a>

                <a
                    href="#"
                    target='_blank'
                    className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full'
                ><BsLinkedin /></a>
                <a
                    href="#"
                    target='_blank'
                    className='bg-white p-4 text-[1.3rem] text-gray-700 flex items-center gap-2 rounded-full'
                ><FaGithubSquare /></a>
            </motion.div>
        </section>
    )
}

export default Intro
