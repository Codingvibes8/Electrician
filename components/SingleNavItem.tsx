import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

interface NavItem {
    label: string;
    link?: string;
    children?: NavItem[];
    className?: string;
}

export function SingleNavItem({ label, link, children, className }: NavItem) {
    const [isItemOpen, setItem] = useState(false);
    const toggleItem = () => setItem(!isItemOpen);

    return (
        <div className={`relative ${className}`}>
            <Link
                onClick={toggleItem}
                href={link ?? "#"}
                className="relative px-2 py-3 transition-all"
            >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                    <span>{label}</span>
                    {children && (
                        <IoIosArrowDown
                            className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`}
                        />
                    )}
                </p>
            </Link>

            {isItemOpen && children && (
                <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
                    {children.map((ch, i) => (
                        <Link
                            key={i}
                            href={ch.link ?? "#"}
                            className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                        >
                            <span className="whitespace-nowrap pl-3">{ch.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
