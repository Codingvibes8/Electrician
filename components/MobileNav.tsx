"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavItems } from "@/constants/constants";
import { SingleNavItem } from "./SingleNavItem";

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
      <section className="h-screen fixed left-0 top-0 flex flex-col w-full bg-blue-500 md:hidden">
        <div className="w-full h-full text-white px-4 py-4">
          <section className="flex justify-end">
            {isSideMenuOpen ? (
                <AiOutlineClose onClick={toggleSideMenu} className="cursor-pointer text-4xl" />
            ) : (
                <GiHamburgerMenu onClick={toggleSideMenu} className="cursor-pointer text-4xl text-white" />
            )}
          </section>
          {isSideMenuOpen && (
              <div className="flex flex-col p-4 bg-white rounded-lg text-[1.1rem] gap-2 transition-all">
                {NavItems.map((item, index) => (
                    <SingleNavItem key={index} label={item.label} link={item.link} className="text-white">
                      {item.children}
                    </SingleNavItem>
                ))}
              </div>
          )}
        </div>
      </section>
  );
}
