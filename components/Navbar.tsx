
"use client"

import type React from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {MdElectricBolt} from "react-icons/md";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Services",
        href: "/services",
        children: [
            { name: "Electrical Safety Certificates", href: "/services/electrical-safety-certificates" },
            { name: "Outdoor Lighting and Heating", href: "/services/outdoor-lighting-and-heating" },
            { name: "Electric Vehicle Charging Installation", href: "/services/ev-charging-installation" },
            { name: "Air Conditioning Installation & Services", href: "/services/air-conditioning-services" },
            { name: "Flood Damage", href: "/services/flood-damage" },
            { name: "PAT Testing", href: "/services/pat-testing" },
        ],
    },
    { name: "Contact", href: "/contact" },
]

const Navbar: React.FC = () => {
    return (
        <nav className="w-full shadow-md sticky top-0 z-50 px-8 sm:px-16 lg:px-28 bg-gray-400">
            <div className=" mx-auto">
                    <div className="flex justify-between h-16">

                        <Link href="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <span>Powerhouse-Electrics  </span>
                                <MdElectricBolt className="w-8 h-8 text-red-900 rounded-full bg-gray-300" />
                        </Link>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex sm:items-center">
                        {navItems.map((item) =>
                            item.children ? (
                                <DropdownMenu key={item.name}>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            {item.name}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {item.children.map((child) => (
                                            <DropdownMenuItem key={child.name} asChild>
                                                <Link href={child.href} className="w-full">
                                                    {child.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ),
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                    <SheetDescription>Navigate through our site</SheetDescription>
                                </SheetHeader>
                                <div className="mt-6 flex flex-col space-y-4">
                                    {navItems.map((item) =>
                                        item.children ? (
                                            <DropdownMenu key={item.name}>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="justify-start">
                                                        {item.name}
                                                        <ChevronDown className="ml-1 h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    {item.children.map((child) => (
                                                        <DropdownMenuItem key={child.name} asChild>
                                                            <Link href={child.href} className="w-full">
                                                                {child.name}
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                {item.name}
                                            </Link>
                                        ),
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar




