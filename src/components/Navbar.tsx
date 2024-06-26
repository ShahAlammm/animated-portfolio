"use client"
import { Socials } from "../constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../../public/NavLogo.png';
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar fixed z-50 bg-base-100 sm:bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-md dropdown-content items-center mt-3 z-[1] p-2 shadow glass rounded-box w-20">
          <li><Link href={'#'}><FaHome className="text-xl"/></Link></li>
          <li><Link href={'#'}><FaUserGraduate className="text-xl"/></Link></li>
          <li><Link href={'#'}><MdCall className="text-xl"/></Link></li>
          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-white text-xl md:ml-16">SHAH ALAM</Link>
      </div>
      <div className="navbar-center hidden md:flex justify-center items-center glass rounded-full lg:w-1/4 button-primary">
        <ul className="menu menu-horizontal px-1 space-x-4 font-bold text-white">
          <li><Link href={'#'}><FaHome className="text-xl"/></Link></li>
          <li><Link href={'#'}><FaUserGraduate className="text-xl"/></Link></li>
          <li><Link href={'#'}><MdCall className="text-xl"/></Link></li>
        </ul>
      </div>
      <div className="navbar-end mr-5 md:mr-16">
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (

            <Link href={social.link} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}

                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

