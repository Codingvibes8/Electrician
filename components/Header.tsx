'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PlusIcon as HousePlus, Bolt, ContactRound, CircleUserRound, ChevronDown } from 'lucide-react'

type NavItem = {
    label: string
    link: string
    icon?: React.ElementType
    children?: Omit<NavItem, 'children'>[]
}

const NavItems: NavItem[] = [
    {
        label: "Home",
        link: "/",
        icon: HousePlus,
    },
    {
        label: "About",
        link: "/about",
        icon: ContactRound,
    },
    {
        label: "Services",
        link: "/services",
        children: [
            {
                label: "Electrical Safety Certificates",
                link: "/services/ElectricalSafetyCertificates",
                icon: Bolt,
            },
            {
                label: "Outdoor Lighting and Heating",
                link: "/services/OutdoorLightingAndHeating",
                icon: Bolt,
            },
            {
                label: "Electric Vehicle Charging Installation",
                link: "/services/ElectricVehicleChargingInstallation",
                icon: Bolt,
            },
            {
                label: "Air Conditioning Installation & Services",
                link: "/services/AirConServices",
                icon: Bolt,
            },
            {
                label: "Flood damage",
                link: "/services/FloodDamage",
                icon: Bolt,
            },
            {
                label: "PAT TESTING",
                link: "/services/PatTest",
                icon: Bolt,
            },
        ]
    },
    {
        label: "Contact us",
        icon: CircleUserRound,
        link: "/contact",
    }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [showServices, setShowServices] = useState(false)

    return (
        <nav className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image src="/logo-maker.svg" alt="Electric Jay" width={40} height={40} />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {NavItems.map((item) => (
                                    <div key={item.label} className="relative group">
                                        {item.children ? (
                                            <>
                                                <button
                                                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                                                    onClick={() => setShowServices(!showServices)}
                                                    aria-expanded={showServices}
                                                    aria-haspopup="true"
                                                >
                                                    {item.label}
                                                    <ChevronDown className="ml-1 h-4 w-4" />
                                                </button>
                                                {showServices && (
                                                    <div className="absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                            {item.children.map((subItem) => (
                                                                <Link
                                                                    key={subItem.label}
                                                                    href={subItem.link}
                                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                                    role="menuitem"
                                                                >
                                                                    {subItem.icon && <subItem.icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />}
                                                                    {subItem.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.link}
                                                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                                            >
                                                {item.icon && <item.icon className="mr-1.5 h-5 w-5" aria-hidden="true" />}
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NavItems.map((item) => (
                            <div key={item.label}>
                                {item.children ? (
                                    <>
                                        <button
                                            className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
                                            onClick={() => setShowServices(!showServices)}
                                        >
                                            {item.label}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        {showServices && (
                                            <div className="pl-4">
                                                {item.children.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.link}
                                                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
                                                    >
                                                        {subItem.icon && <subItem.icon className="mr-1.5 h-5 w-5" aria-hidden="true" />}
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.link}
                                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
                                    >
                                        {item.icon && <item.icon className="mr-1.5 h-5 w-5" aria-hidden="true" />}
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

