import type React from "react"
import Image from "next/image"

const About: React.FC = () => {
    return (
        <div className="max-w-[1536px] mx-auto py-16 px-8 sm:px-16 lg:px-28 text-gray-800 bg-gray-50">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-8 font-bold text-center">About Us</h1>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/2 space-y-4 text-base sm:text-lg">
                    <p>Powerhouse-Electrics is a fully qualified 18th edition and Part P Electrician in NW2, London.</p>
                    <p>
                        I provide a reliable, friendly and highly-recommended service. More recommendations available on my website.
                    </p>
                    <p>You can call me for domestic or commercial electrical services in North London.</p>
                    <p>
                        I work to the UK national safety standard (BS 7671) and will give you a safety certificate to confirm that
                        my work has been designed, inspected and tested in line with that standard. I am a NAPIT Approved contractor
                        and offer free quotes.
                    </p>
                    <p>
                        With years of experience in the industry, I have built a reputation for reliability and professionalism. My
                        goal is to create lasting relationships with our clients by delivering exceptional results and unparalleled
                        support.
                    </p>

                    <div className="pt-6">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">What We Do</h2>
                        <ul className="list-disc list-inside text-sm sm:text-base space-y-2 columns-2">
                            <li>Electrical installations</li>
                            <li>Electrical testing services</li>
                            <li>Electrical emergency services</li>
                            <li>Electrical repairs</li>
                            <li>Fuse boards</li>
                            <li>Landlord safety certificates</li>
                            <li>Outdoor electrical wiring</li>
                            <li>Lighting contractors</li>
                            <li>Emergency lighting</li>
                            <li>Testing LED lighting</li>
                            <li>Upgrades</li>
                            <li>Outdoor lighting</li>
                            <li>Security & Emergency lighting installations</li>
                            <li>Electric Vehicle Charging Points</li>
                            <li>Lighting LED</li>
                            <li>Air conditioning Services</li>
                        </ul>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <Image
                        src="/fuse-with-man.jpg"
                        alt="Electrician at work"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </div>
            </div>

            {/*about Contact Section */}
            <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
                <p className="text-lg mb-6 text-gray-900">Contact Powerhouse-Electrics today for expert advice and installation</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="tel:02036623589"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Call: 020 3654 8889
                    </a>
                    <a
                        href="tel:07829867057"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Mobile: 078 9876 7057
                    </a>
                    <a
                        href="mailto:hello@Powerhouse-Electrics.com"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Email Us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About

