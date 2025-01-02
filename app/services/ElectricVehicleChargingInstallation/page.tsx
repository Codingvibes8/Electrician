import React from 'react';
import Image from 'next/image';

const ElectricVehicleChargingInstallation: React.FC = () => {
    return (
        <div className="max-w-[1536] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Electric Vehicle Charging Installation
                </h1>
                <h2 className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Are you considering purchasing an electric vehicle? One of the most significant advantages of owning
                    an electric car is the ability to charge it at home or work.
                </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                    <p className="text-lg mb-4 max-w-3xl mx-auto">
                        Add an electric car charging point to your home or business.
                        Electric James is now certified to install electric vehicle charging sockets.
                        Electrical vehicle (EV) installation requires a qualified electrician who has taken a specific
                        course in fitting electric car chargers.
                    </p>

                    <p className="text-lg max-w-3xl mx-auto">
                        Electric James will review your electrical system and recommend the best location for the
                        charging socket. He will also make sure the installation meets all the safety and building code
                        requirements.
                        If you need additional advice on which charging socket is best suited to your charging needs and
                        budget, please ask. There are some useful articles below to help you.
                    </p>
                </div>

                {/* Services Section */}
                <div className={'flex flex-col gap-6 justify-center items-center'}>
               <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Electric Car Installation Services</h3>
                    <p className="text-lg mb-4">Our electric charging installation service includes:</p>
                </div>
                <ul className="space-y-4 mb-6">
                    <li className="flex items-center text-lg text-gray-700">
                        <span className="mr-3 text-green-500">✓</span>
                        On-site suitability assessment of your property
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                        <span className="mr-3 text-green-500">✓</span>
                        Installation of your EV charger
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                        <span className="mr-3 text-green-500">✓</span>
                        Registration of your charger
                    </li>
                </ul>
            </div>

            {/* Benefits Section */}
            <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Benefits of Home EV Charging</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-lg mb-2">Cost Savings</h4>
                        <p className="text-gray-600">Save money on fuel costs by charging at home rather than using
                            public charging stations.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-lg mb-2">Convenience</h4>
                            <p className="text-gray-600">Charge your vehicle overnight and wake up to a full battery
                                every morning.</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h4 className="font-semibold text-lg mb-2">Property Value</h4>
                            <p className="text-gray-600">Increase your property value with a professional EV charging
                                installation.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                    <p className="text-lg mb-6">
                        Contact James today for a consultation and free quote
                    </p>
                    <div className="space-x-4">
                        <a href="tel:07825447057"
                           className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Call: 078 2544 7057
                        </a>
                        <a href="mailto:hello@electricjames.com"
                           className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
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

export default ElectricVehicleChargingInstallation;