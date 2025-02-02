import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhone, MdOutlineEmail, MdElectricBolt } from "react-icons/md";
import type React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 max-w-[1536px] mx-auto px-8 sm:px-16 lg:px-28 text-gray-800 bg-gray-50">
            <div className="w-full md:w-1/2 flex flex-col items-center gap-2 mb-4">
                <h1 className="text-[30px] md:text-4xl font-bold text-gray-800 leading-tight max-w-md">
                    Looking for a registered electrician in North West London?
                </h1>
                <p className="text-[16px] mb-2 max-w-xl capitalize rounded-lg py-4 text-gray-700">
                    Powerhouse-Electrics delivers electrical services across North West London. Including West Hampstead, Hampstead, Kilburn, Willesden, Cricklewood, Dollis Hill, Hendon and many more north London locations.
                </p>
                <p className="text-[18px] mb-2 max-w-xl text-gray-700">
                    Powerhouse-Electrics is a trusted, reliable electrician in Cricklewood, NW2. Fully qualified 18th edition and Part P certified. See trusted testimonials from happy clients.
                </p>
                <p className="text-[16px] max-w-xl text-gray-700 mb-2">
                    Whether you’re looking for an electrician for an electrical landlord certificate, PAT testing, installing new underfloor heating, outdoor garden lights, fitting a new electric oven, storage heater installations or just fixing a broken socket, call Electric James!
                </p>
                <p className="text-[16px] md:text-lg max-w-xl text-gray-700 mb-2">
                    Call now on 078 2544 7057 for all your NW2 electrical needs or 020 3662 3589 or email
                </p>
                <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-4">
                        <MdOutlinePhone className="h-6 w-6 text-gray-800" />
                        <span className="text-gray-800 font-bold text-lg md:text-xl">123-456-7890</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MdOutlineEmail className="h-6 w-6 text-gray-800" />
                        <span className="text-gray-800 font-bold text-lg md:text-xl">info@Powerhouse-Electrics.com</span>
                    </div>
                </div>
                <Link
                    href="/contact"
                    className="max-w-[200px] flex items-center justify-center bg-red-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
                >
                    Get a Free Quote
                </Link>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 relative h-[500px]">
                <Image
                    src="/fuse-box1.jpg"
                    layout="fill"
                    className="rounded-2xl object-cover ring-4 ring-yellow-300"
                    alt="Electrician working on a fuse box"
                />
            </div>
        </div>
    );
};

export default Hero;
