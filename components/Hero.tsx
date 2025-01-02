import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Hero = () => {
    return (
        <div className='max-w-[1536px] min-h-screen mx-auto'>
            <div className='flex flex-col md:flex-row px-6 pt-10 items-center'>
                <div
                    className='flex flex-col items-center text-white rounded-2xl h-auto w-full md:w-1/2 p-6 z-10'>
                    <h1 className='text-4xl md:text-8xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-slate-200'>
                        Electricjay
                    </h1>
                    <h2 className='text-2xl mb-4'>
                        Trusted, reliable electrician in Cricklewood, NW2.<br/> Fully qualified 18th edition and Part P
                        certified
                    </h2>
                    <h3 className='text-lg capitalize mb-2 mx-auto items-center flex'>
                        Domestic and commercial electrical installations or repairs
                    </h3>
                    <h3 className='text-lg capitalize mb-2 mx-auto items-center flex'>
                        Cover north London and environs
                    </h3>
                    <div className="flex items-center space-x-4 mt-4 font-bold">
                        <MdOutlinePhone className="h-6 w-6 text-white"/>
                        <span className="text-white font-bold text-[18px]">123-456-7890</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-2 font-bold">
                        <MdOutlineEmail className="h-6 w-6 text-white"/>
                        <span className="text-white font-bold">info@electrijames.com</span>
                    </div>

                    {/*<div className="flex items-center gap-4">*/}
                    {/*    <Image src='/img.png' alt='' width={60} height={60}*/}
                    {/*           className='w-40 h-40 p-4 rounded-full'/>*/}
                    {/*    <Image src='/img_1.png' alt='' width={60} height={60}*/}
                    {/*           className='w-40 h-40'/>*/}
                    {/*</div>*/}
                    <div className="text-2xl mt-10">
                        <Link href={'/services'}
                              className="transition-colors bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 mt-4 rounded-md flex mb-6 items-center justify-center">
                            Services
                        </Link>

                    </div>
                </div>
                <div className='flex items-center justify-center flex-1 p-6'>
                    <Image src='/fuse-box1.jpg' width={500} height={500}
                           className='rounded-2xl object-cover ring-4 ring-yellow-300'
                           alt='Electrician Hero Image'/>

                </div>
            </div>
        </div>
    );
}

export default Hero;