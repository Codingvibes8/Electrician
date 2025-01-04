import Image from 'next/image'
import Link from 'next/link'
import {MdOutlinePhone, MdOutlineEmail, MdElectricBolt} from 'react-icons/md'

const Hero = () => {
    return (
        <section className="max-w-[1536px] min-h-screen mx-auto px-10 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[30px] md:text-4xl  font-bold text-gray-800 leading-tight max-w-md">
                            ElectricJames
                        </h1>
                        <span>
                        <MdElectricBolt className="w-12 h-12 text-red-900 rounded-full bg-gray-300"/>
                    </span>
                    </div>


                    <h3 className='text-[20px] font-semibold  md:text-4xl capitalize rounded-lg px-4 py-4 text-gray-700'>
                        Electrical services for residential and commercial properties
                    </h3>

                    <p className='text-[20px] mb-4 md:text-xl max-w-xl text-gray-700'>
                        ElectricJames is a trusted, reliable electrician in Cricklewood, NW2. Fully qualified 18th edition and Part P
                        certified
                    </p>

                    <p className='text-[1rem] md:text-xl max-w-xl text-gray-700 mb-2'>
                        Covers north London and environs
                    </p>
                    <p className='text-lg md:text-xl max-w-xl text-gray-700 mb-2'>
                        Your safety and satisfaction are my top priority.
                    </p>
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-4">
                            <MdOutlinePhone className="h-6 w-6 text-gray-800"/>
                            <span className="text-gray-800 font-bold text-lg md:text-xl">123-456-7890</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MdOutlineEmail className="h-6 w-6 text-gray-800"/>
                            <span className="text-gray-800 font-bold text-lg md:text-xl">info@electrijames.com</span>
                        </div>
                    </div>

                    <Link href="/contact"
                          className="max-w-[200px] flex items-center bg-red-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">
                        Get a Free Quote
                    </Link>
                </div>
                <div className="flex-1 w-full max-w-lg">
                    <Image
                        src='/fuse-box1.jpg'
                        width={500}
                        height={500}
                        className='rounded-2xl object-cover ring-4 ring-yellow-300 w-full h-auto'
                        alt='Electrician working on a fuse box'
                    />
                </div>
            </div>
        </section>
    )}
export default Hero






