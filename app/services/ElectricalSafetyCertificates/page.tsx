import React from 'react';
import Image from 'next/image';

const ElectricalSafetyCertificate: React.FC = () => {
    return (
        <div className="max-w-[1536] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="bg-blue-50 text-center mb-16 py-10 px-10 rounded-2xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Electrical Safety Certificates
                </h1>
                <p className="text-lg mb-4">
                    Electrical Safety Certificates are formally known as Electrical Installation Condition Reports (EICR).
                </p>
            </div>
            <div className="flex flex-col  md:max-w-3xl  mx-auto space-y-4 text-gray-800 font-semibold mb-8">
                <p className="text-[20px] mb-4"> Since all electrical installations (electrical wiring, sockets, switches,
                    electrical appliances and accessories) deteriorate with use and age they should be tested and inspected
                    regularly to check their condition and safety for use. </p>

                <p className="text-[20px] mb-4">To do this you can commission an Electrical Installation Condition Report or
                    EICR for short. (Previously
                    known as a Periodic Inspection and Testing Report (PIR)). </p>

                <p className="text-[20px] mb-4"> An EICR tests the condition of the electrical installations in your
                    home or business and provides you
                    with an electrical report on their safety and highlights any defects or deviations from the
                    current
                    revision of the current electrical regulations, which you can then remedy. </p>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4">Who needs an Electrical
                    Inspection
                    and Report?</h3>
                <p className="text-[20px] mb-4">
                    it is recommended that your electrics should be inspected and tested every:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-[20px]">
                    <li className="text-gray-800">
                        10 years for an owner-occupied home
                    </li>
                    <li className="text-gray-800">
                        5 years for a rented home
                    </li>
                    <li className="text-gray-800">
                        3 years for a caravan
                    </li>
                    <li className="text-gray-800">
                        1 year for a swimming pool
                    </li>
                    <li className="text-gray-800">
                        When a property is being prepared for letting
                    </li>
                    <li className="text-gray-800">
                        Before selling a property
                    </li>
                    <li className="text-gray-800">
                        Before buying a previously-occupied property
                    </li>
                </ul>

            </div>

            <div className="flex flex-col md:max-w-[75ch] mx-auto space-y-4 text-gray-800 font-semibold mb-8">
                <h3 className="text-2xl font-semibold mb-2">Landlords Electrical Certificate/Report</h3>
                <div className="space-y-4">
                    <p className="text-[20px]">
                        It is the Landlord&apos;s responsibility to ensure that the electrical installation and appliances provided by the landlord in the property are safe at the start of the tenancy and are in proper working order throughout the tenancy.
                    </p>
                    <p className="text-[20px]">
                        The Electrical Safety Council now recommends in their latest Guidance for rented accommodation that period inspections/tests are carried out by a qualified electrician at least every 5 years or on a change of tenancy.
                    </p>
                    <p className="text-[20px]">
                        If the property is a house of multiple occupation (HMO) of any kind (which will include shared houses) there is a statutory requirement to carry out such inspection/test every 5 years.
                    </p>
                    <p className="text-[20px]">
                        You could be at risk of invalidating your insurance and be at risk of large fines or electrical fires without regular electrical inspections. The local authority can require a certificate to be produced in seven days if they ask.
                    </p>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 py-8">
                <h3 className="text-2xl font-semibold mb-4">How much does an Electrical Safety Certificate cost?</h3>
                <p className="text-[20px]">
                    The cost of an electrical inspection certificate is dependent on the size of the property.
                    Please call James for a free quote at <a href="tel:07825447057" className="text-blue-600 hover:text-blue-800">078 2544 7057</a> or <a href="tel:02036623589" className="text-blue-600 hover:text-blue-800">020 3662 3589</a> or email <a href="mailto:hello@electricjames.com" className="text-blue-600 hover:text-blue-800">hello@electricjames.com</a>.
                </p>
            </div>

            <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold">Useful resources</h3>
                <ul className="list-none space-y-2">
                    <li>
                        <a href="https://www.electricalsafetyfirst.org.uk/guidance/guides-and-advice/landlords-guide-to-electrical-safety/"
                            className="text-blue-600 hover:text-blue-800 flex items-center">
                            <span className="mr-2">→</span> The Landlords&apos; Guide to Electrical Safety
                        </a>
                    </li>
                    <li>
                        <a href="https://www.rla.org.uk/landlord/guides/electrical-safety.shtml"
                            className="text-blue-600 hover:text-blue-800 flex items-center">
                            <span className="mr-2">→</span> Landlord Electrical Safety Certificates &amp; Inspections frequency
                        </a>
                    </li>
                </ul>
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




            <div className="flex items-center gap-6 justify-center bg-gray-50 p-8 rounded-lg">
                <Image
                    src='/img.png'
                    alt='NAPIT logo'
                    width={80}
                    height={80}
                    className='object-contain p-4'
                />
                <Image
                    src='/img_1.png'
                    alt='Which Trusted Trader logo'
                    width={80}
                    height={80}
                    className='object-contain'
                />
            </div>
        </div>
    );
};

export default ElectricalSafetyCertificate;