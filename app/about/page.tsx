import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-[1536px] min-h-screen mx-auto py-16 px-10 md:px-15 lg:px-20 text-white bg-gray-700">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">About Us</h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-4  max-w-2xl">
                    Electric James is a fully qualified 18th edition and Part P Electrician in NW2, London.
                </p>
                <p className="text-base md:text-lg lg:text-xl mb-4 max-w-2xl">
                    I provide a reliable, friendly and highly-recommended service (see below). More recommendations available on my website.
                </p>
                <p className="text-base md:text-lg lg:text-xl mb-4  max-w-2xl">
                    You can call me for domestic or commercial electrical services in North London.
                </p>
                <p className="text-base md:text-lg lg:text-xl mb-4  max-w-2xl">
                    I work to the UK national safety standard (BS 7671) and will give you a safety certificate to confirm that my work has been designed, inspected and tested in line with that standard. I am a NAPIT Approved contractor and offer free quotes.
                </p>
                <p className="text-base md:text-lg lg:text-xl mb-4  max-w-2xl">
                    With years of experience in the industry, I have built a reputation for reliability and professionalism. My goal is to create lasting relationships with our clients by delivering exceptional results and unparalleled support.
                </p>
            </div>
            <div className="mt-10 flex flex-col items-center mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What We Do</h2>
                <ul className="list-disc list-inside text-base md:text-lg lg:text-xl space-y-2">
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
            {/* Contact Section */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">

                <p className="text-lg mb-6 text-gray-900">
                    Contact James today for expert advice and installation
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:02036623589" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Call: 020 3662 3589
                    </a>
                    <a href="tel:07825447057" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Mobile: 078 2544 7057
                    </a>
                    <a href="mailto:hello@electricjames.com" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                        Email Us
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
