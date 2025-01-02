import React from 'react';
import Image from 'next/image';

const PatPage: React.FC = () => {
    return (
        <div className="max-w-[1536] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    PAT Testing Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Professional Portable Appliance Testing for your peace of mind
                </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
                {/* Introduction */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                    <p className="text-lg text-gray-700">
                        Portable appliance testing (PAT) is the term used to describe the examination of electrical appliances and equipment to ensure they are safe to use. Regular PAT testing is essential for businesses and landlords to maintain safety standards.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* What We Test */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <div className="flex items-center mb-6">
                            <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <h2 className="text-2xl font-semibold">What We Test</h2>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                Office Equipment
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                Kitchen Appliances
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                Power Tools
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                IT Equipment
                            </li>
                        </ul>
                    </div>

                    {/* Who Needs PAT Testing */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <div className="flex items-center mb-6">
                            <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <h2 className="text-2xl font-semibold">Who Needs PAT Testing?</h2>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                Businesses & Offices
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                Landlords
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                Schools & Educational Facilities
                            </li>
                            <li className="flex items-center text-lg text-gray-700">
                                <span className="mr-2 text-green-500">✓</span>
                                Construction Sites
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-6">Why Choose Our PAT Testing Service?</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-lg mb-2">Comprehensive Testing</h4>
                            <p className="text-gray-600">Thorough inspection and testing of all portable electrical equipment</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-lg mb-2">Detailed Reports</h4>
                            <p className="text-gray-600">Clear documentation and labeling of all tested items</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-lg mb-2">Expert Service</h4>
                            <p className="text-gray-600">Fully qualified and experienced technicians</p>
                        </div>
                    </div>
                </div>

                {/* Pricing Information */}
                <div className="bg-blue-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-semibold mb-4">Get a Quote Today</h3>
                    <p className="text-lg mb-6">
                        The cost of PAT testing depends on the number of items that need to be tested. Contact us for a customized quote.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:07825447057" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Call: 078 2544 7057
                        </a>
                        <a href="tel:02036623589" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Call: 020 3662 3589
                        </a>
                        <a href="mailto:hello@electricjames.com" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                            Email Us
                        </a>
                    </div>
                </div>

                {/* Additional Services */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-lg text-center text-gray-700">
                        Also see <a href="/services/electrical-safety-testing" className="text-blue-600 hover:text-blue-800">Electrical Safety Testing and Reporting</a> under Electric James services.
                    </p>
                </div>


                {/* Contact Section */}
                <div className="bg-blue-50 p-8 rounded-lg text-center">

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

export default PatPage;
