import React from 'react';
import Image from 'next/image';

const FloodDamage: React.FC = () => {
    return (
        <div className="max-w-[1536] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Flood Damage Electrical Services
                </h1>
                <h2 className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Professional electrical assessment and repair services for flood-damaged properties
                </h2>
            </div>

            {/* Emergency Alert */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-red-700">Important Safety Warning</h3>
                </div>
                <p className="text-red-700 font-medium">
                    Do NOT attempt to turn back on the electricity mains supply until a professional electrical safety assessment has been completed.
                </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">What to Do After a Flood?</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        If your home or business has been flooded, you will need an Electrical Installation Condition Report (EICR) from a registered electrician. This comprehensive assessment will:
                    </p>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-start text-lg text-gray-700">
                            <span className="mr-3 text-blue-500">•</span>
                            Identify the condition of all wiring systems
                        </li>
                        <li className="flex items-start text-lg text-gray-700">
                            <span className="mr-3 text-blue-500">•</span>
                            Test all fixed equipment (electric cookers, storage heaters, boilers)
                        </li>
                        <li className="flex items-start text-lg text-gray-700">
                            <span className="mr-3 text-blue-500">•</span>
                            Assess affected portable electrical appliances
                        </li>
                        <li className="flex items-start text-lg text-gray-700">
                            <span className="mr-3 text-blue-500">•</span>
                            Provide detailed report of repairs needed
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="bg-blue-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-semibold mb-4">Need Emergency Assistance?</h3>
                    <p className="text-lg mb-6">
                        Contact James immediately for an Electrical Assessment of your flood damage
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

                {/* Credentials Section */}
                <div className="bg-gray-50 p-8 rounded-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Professional Qualifications</h4>
                                <p className="text-gray-600">
                                    Electric James is a fully qualified Part P registered Electrician, working to the UK national safety standard (BS 7671)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources Section */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold mb-6">Additional Resources</h3>
                    <a 
                        href="https://www.electricalsafetyfirst.org.uk/guidance/safety-around-the-home/flooding-advice/" 
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="mr-2">→</span>
                        Learn more about flood safety on the Electrical Safety Council Website
                    </a>
                </div>

                {/* Certifications */}
                <div className="flex items-center gap-6 justify-center bg-gray-50 p-8 rounded-lg">
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
        </div>
    );
};

export default FloodDamage;
