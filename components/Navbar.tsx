"use client";

import Link from "next/link";
import React, { useState } from "react";

import { NavItems } from "@/constants/constants";
import MobileNav from "./MobileNav";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";

import { MdElectricBolt } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

type NavItems = {
  label: string;
  link?: string;
  children?: NavItems[];
};

export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div
      className="flex w-full mx-auto justify-between px-4 py-5 text-sm h-20 shadow-md bg-blue-800">
      {/* left side  */}
      <section className="flex items-center gap-10">
        {/* logo */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-1 z-10">
            <span>
              <MdElectricBolt className="w-10 h-10 text-red-900 rounded-full bg-gray-300  p-[2px]" />
            </span>
            <span
              className="text-white text-3xl font-bold font-serif leading-none" >
              Electricjay
            </span>
          </div>
          <p className="text-white text-[1rem] font-serif font-medium">
            Qualified Electrician
          </p>
        </div>

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {NavItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p
                className="flex cursor-pointer items-center gap-2
              text-slate-100 font-semibold group-hover:text-yellow-300 text-[1.2rem] duration-500 transform hover:translate-y-1.5"
              >
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div
                  className="absolute left-0 top-10 hidden w-auto
                 flex-col gap-1 rounded-lg bg-white py-3
                  shadow-md transition-all group-hover:flex z-50"
                >
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center py-1 pl-6 pr-8
                       text-neutral-400 hover:text-gray-800 text-2xl"
                    >
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navItems */}
      </section>

      {/* right side data */}
      <section className=" hidden md:flex items-center gap-6">
        <div className={"flex items-center justify-center gap-4"}>
          <span>
            <FaWhatsappSquare className="text-white text-3xl transition-all  hover:translate-y-1.5 duration-500 hover:text-yellow-300" />
          </span>
          <span>
            <FaFacebookSquare className="text-white text-3xl transition-all  hover:translate-y-1.5 duration-500 hover:text-yellow-300" />
          </span>
          <span>
            <FaTwitterSquare className="text-white text-3xl transition-all  hover:translate-y-1.5 duration-500 hover:text-yellow-300" />
          </span>
          <span>
            <FaInstagramSquare className="text-white text-3xl  rounded-xl transition-all hover:translate-y-1.5 duration-500 hover:text-blue-800" />
          </span>
        </div>
      </section>

      <GiHamburgerMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}
