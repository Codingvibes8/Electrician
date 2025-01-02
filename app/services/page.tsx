import Link from "next/link";
import Image from "next/image";
import { servicePageItems } from "@/constants/constants";

export default function Services() {
    return (
        <section className={'max-w-[1536px] mx-auto bg-gray-300 px-4 md:px-8 py-16 z-10'}>
            <div className="flex flex-col text-gray-700 [&>p]:md:max-w-[75ch] [&>p]:mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
                    Electrical Services
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 gap-y-6">
                    {servicePageItems.map((servicePageItem) => (
                        <Link href={servicePageItem.url} key={servicePageItem.id}>
                            <div
                                className="hover:scale-y-1.2 flex flex-col items-center justify-center text-2xl font-semibold mb-2  text-blue-900">
                                <h1 className={'mb-4'}>{servicePageItem.title}</h1>
                                <Image src={servicePageItem.image} alt={servicePageItem.title} width={400}
                                    height={200} className={'rounded-t-2xl'} />
                            </div>
                        </Link>
                    ))}
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
            </div>
        </section>
    );
}


