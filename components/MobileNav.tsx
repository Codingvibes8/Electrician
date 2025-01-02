"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavItems } from "@/constants/constants";
import { SingleNavItem } from "./SingleNavItem";
import Link from "next/link";

interface MobileNavProps {
  closeSideMenu: () => void;
}

export default function MobileNav({ closeSideMenu }: MobileNavProps) {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const toggleSideMenu = () => {
    setSideMenu(!isSideMenuOpen);
    closeSideMenu();
  };

  return (
    <section className="h-[calc(100vh-5rem)] fixed left-0 top-0 flex min-h-screen w-full justify-center md:hidden">
      <div className="w-full h-full bg-red-700 text-white px-4 py-4">
        <section className="flex justify-end">
          {isSideMenuOpen ? (
            <AiOutlineClose onClick={toggleSideMenu} className="cursor-pointer text-4xl" />
          ) : (
            <GiHamburgerMenu onClick={toggleSideMenu} className="cursor-pointer text-4xl" />
          )}
        </section>
        {isSideMenuOpen && (
          <div className="flex flex-col p-4 bg-white rounded-lg text-[1.1rem] gap-2 transition-all mb-16">
            {NavItems.map((item, index) => (
              <SingleNavItem key={index} label={item.label} link={item.link} className="text-yellow-800">
                {item.children}
              </SingleNavItem>
            ))}
          </div>
        )}
        <section className="flex flex-col gap-4 mt-4 items-center">
          <Link href={'07686 787 677'} className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 bg-blue-600 text-slate-100 transition-all hover:text-yellow-200">
            Call us on: 07686 787 677
          </Link>
          <Link href={'/contact'} className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 bg-green-600 text-slate-100 transition-all hover:text-yellow-200">
            Contact us
          </Link>
        </section>
      </div>
    </section>
  );
}
