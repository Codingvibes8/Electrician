import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="py-12  px-8 sm:px-16 lg:px-28 bg-gray-50 mb-12 max-w-[1536px] mx-auto">
            <div className="w-full mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">Contact</h2>
                <h3 className="text-2xl mb-6">PowerhouseElectrics</h3>
                <address>Ralsworby Road Cricklewood London NW2 2kH</address>
                <p className="text-xl text-black mb-4">020 3762 3589 or 078 2774 5437 hello@PowerhouseElectrics.com</p>
            </div>

            <div className=" p-8 w-full flex flex-col items-center justify-center">
                <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-center">Contact Form</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
                            Telephone Number
                        </label>
                        <input
                            id="telephone"
                            type="tel"
                            placeholder="Your telephone number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            id="location"
                            type="text"
                            placeholder="Location of property"
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="source">
                            Where did you hear about Electric James?
                        </label>
                        <select
                            id="source"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Please select</option>
                            <option value="google_search">Google search</option>
                            <option value="leaflet">Leaflet / Flyer</option>
                            <option value="recommendation">Recommended by a friend</option>
                            <option value="which_local">Which Local</option>
                            <option value="which_trusted_trader">Which Trusted Trader</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Your message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 mb-6">
            <Link href={'/which.com'}>
                <Image src="/img.png" height={50} width={50} alt=""/>
            </Link>
                <Link href={'/napit.com'}>
                    <Image src="/img_1.png" height={50} width={50} alt=""/>
                </Link>
                <Link href={'/facebook.com'}>
                    <Image src="/facebook.svg" height={50} width={50} alt=""/>
                </Link>
            </div>

            <p className="text-2xl text-black  flex items-center justify-center">Reasonable prices • Reliable service •
                High-quality work</p>
        </section>
    );
};

export default Contact;
