import React from 'react';
import Image from 'next/image';

const OutdoorLightingAndHeating: React.FC = () => {
    return (
        <div className="max-w-[1536] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16 bg-blue-50 py-8 rounded-lg">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Outdoor Lighting and Heating
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Professional outdoor lighting and heating solutions for your London property
                </p>
            </div>

            {/* Introduction */}
            <div className=" mb-12">
                <p className="text-lg text-gray-700">
                    If you are looking for an electrician to install outdoor lighting in London, Electric James has the
                    experience you are looking for. Transform your outdoor space with professional lighting and heating solutions.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Garden Lighting Section */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <div className="flex items-center mb-6 bg-blue-50 rounded-2xl">
                        <svg className="w-8 h-8 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h2 className="text-2xl font-semibold">Garden Lighting</h2>
                    </div>
                    <p className="text-lg mb-4">
                        Electric James has installed external garden lights in the North London area for many satisfied
                        customers in a range of properties. We offer various lighting solutions including:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-lg text-gray-700">
                            <span className="mr-2 text-green-500">✓</span>
                            Timed lighting systems
                        </li>
                        <li className="flex items-center text-lg text-gray-700">
                            <span className="mr-2 text-green-500">✓</span>
                            PIR motion sensors
                        </li>
                        <li className="flex items-center text-lg text-gray-700">
                            <span className="mr-2 text-green-500">✓</span>
                            Photocell sensor lights
                        </li>
                        <li className="flex items-center text-lg text-gray-700">
                            <span className="mr-2 text-green-500">✓</span>
                            Manual control systems
                        </li>
                    </ul>
                </div>

                {/* Security Lights Section */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <div className="flex items-center mb-6 bg-blue-50 rounded-2xl">
                        <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <h2 className="text-2xl font-semibold">Security Lights</h2>
                    </div>
                    <p className="text-lg mb-4">
                        Enhance your property&apos;s security with professional lighting installation. Our security lighting solutions include:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-lg text-gray-700">
                            <span className="mr-2 text-green-500">✓</span>
                            Motion-activated floodlights
                        </li>
                        <li className="flex items-center text-lg text-gray-700">
                            <span className="mr-2 text-green-500">✓</span>
                            Dusk-to-dawn security lights
                        </li>
                        <li className="flex items-center text-lg text-gray-700">
                            <span className="mr-2 text-green-500">✓</span>
                            Smart security lighting
                        </li>
                    </ul>
                </div>
            </div>

            {/* Outdoor Heating Section */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center mb-6 bg-blue-50 rounded-2xl p-6">
                        <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                        <h2 className="text-2xl font-semibold">Outdoor Heating Solutions</h2>
                    </div>
                    <p className="text-lg mb-6">
                        Don&apos;t let the weather stop you from enjoying your outdoor space. Electric James will advise and install an outdoor heating element safely and securely for your London garden, balcony, terrace or patio.
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Perfect for:</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">•</span>
                                Gardens
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">•</span>
                                Balconies
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">•</span>
                                Terraces
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">•</span>
                                Patios
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Outdoor Space?</h3>
                <p className="text-lg mb-6">
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

            {/* Certifications */}
            <div className="flex items-center gap-6 justify-center bg-gray-50 p-8 rounded-lg mt-12">
                <Image 
                    src='/img.png' 
                    alt='NAPIT logo' 
                    width={160} 
                    height={160}
                    className='object-contain p-4'
                />
                <Image 
                    src='/img_1.png' 
                    alt='Which Trusted Trader logo' 
                    width={160} 
                    height={160}
                    className='object-contain'
                />
            </div>
        </div>
    );
};

export default OutdoorLightingAndHeating;
