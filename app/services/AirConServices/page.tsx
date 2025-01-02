import React from 'react';
import Image from 'next/image';

const AirConditioningServices = () => {
    return (
        <div className="max-w-[1536] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Air Conditioning Services in North West London
                </h1>
                <p className="text-[20px] text-gray-600 max-w-3xl mx-auto">
                    Electric James is an F-Gas qualified engineer, certified to provide air conditioning installation,
                    maintenance and repairs for domestic and commercial customers in North West London.
                </p>
            </div>

            {/* Main Content */}
            <div className="space-y-16">
                {/* Introduction */}
                <div className="prose">
                    <p className="text-[20px] text-gray-600 px-10">
                        Whether you want a comfortable home, a bustling restaurant or a professional office space,
                        Electric James has the skills, experience and qualifications to provide the perfect
                        climate-controlled air conditioning solution – meeting the Government&apos;s stringent safety
                        and quality standards.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Installation */}
                    <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Air Conditioning Installation</h2>
                        <p className="text-gray-600 mb-4 text-[20px]">
                            Get expert and reliable installation of the latest air conditioning systems designed to suit
                            your space and budget.
                        </p>
                        <p className="text-gray-600 text-[20px]">
                            We can offer customised solutions that are tailored to the specific needs of your home or
                            home office, ensuring optimal comfort and energy efficiency.
                        </p>
                    </div>

                    {/* Servicing and Maintenance */}
                    <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Air Conditioning Servicing and
                            Maintenance</h2>
                        <p className="text-gray-600 text-[20px]">
                            Prolong the life of your air conditioning units with our regular air conditioning servicing
                            and maintenance service.
                            Regular servicing is essential for maintaining energy efficiency, ensuring system
                            reliability, and improving health and hygiene.
                        </p>
                    </div>

                    {/* Repairs */}
                    <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Air Conditioning Repairs and Fault
                            Diagnosis</h2>
                        <p className="text-gray-600 text-[20px]">
                            We offer a fast and reliable repair service to address any issues, minimising downtime and
                            discomfort, saving you both time and money in the long-run.
                        </p>
                    </div>

                    {/* Commercial */}
                    <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Air Conditioning</h2>
                        <p className="text-gray-600 text-[20px]">
                            Get efficient and reliable commercial air conditioning services to enhance the comfort of
                            your business environment. Our expertise ensures compliance with industry standards and
                            regulations.
                        </p>
                    </div>
                </div>

                {/* F-Gas Qualification Section */}
                <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">F-Gas Qualification</h2>
                    <p className="text-gray-600 mb-4 text-[20px]">
                        In the UK, air conditioning contractors must legally complete an F-Gas and ODS Regulation
                        qualification. It is against the law to work with F-Gas if you don&apos;t have the correct
                        certification.
                    </p>
                    <p className="text-gray-600 text-[20px]">
                        Certified engineers are qualified to undertake leak checking, recovery, installation, servicing
                        and maintenance of equipment containing F-Gas refrigerants.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="bg-blue-50 py-8 px-10 rounded-lg text-center">

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

                    <div className="flex items-center gap-4">
                        <Image src='/img.png' alt='' width={40} height={40}
                               className='w-40 h-40 p-4 rounded-full'/>
                        <Image src='/img_1.png' alt='' width={0} height={0}
                               className='w-40 h-40 rounded-2xl'/>
                    </div>
                </div>
            </div>

    );
};

export default AirConditioningServices;
