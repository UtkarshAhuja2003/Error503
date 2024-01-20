"use client";
import { useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Image from 'next/image';
import "./Navbar.css";
import {RiArrowDropDownLine} from "react-icons/ri"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {

  let [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(1);


  function scrollToTop()
  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
        AOS.init({
             duration: 300,
             once: false,
           })
     }, [])

  function display(link) {
    if (link.name == page.page) {
      return (
          <div onClick={scrollToTop} className="font-semibold cursor-pointer ease-in-out duration-300 text-white py-[15px] md:py-[5px] px-[9px]">
            {link.name}
          </div>
      );
    }
    else{
      return (
        <Link href={link.link}>
          <div className="font-semibold cursor-pointer ease-in-out duration-300 text-white hover:bg-white hover:text-black rounded-md py-[15px] md:py-[5px] px-[9px] mx-2">
            {link.name}
          </div>
        </Link>
      );
    }
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };


  return (
    <div className="sticky top-0 z-[50]">
      <div className={`bg-[#04434E] flex justify-between py-3 px-2`}>
        <div className="cursor-pointer">
          <Link href="/">
            <div className="flex text-white ml-8">
              <div>
              <h1 className='logo text-4xl font-[600] mt-2'>Legal</h1>
              <h1 className='relative text-2xl text-right'>सारथी</h1>
              </div>
              <Image src="/images/logo.png" className="ml-2 w-[70px] h-[70px] my-auto rounded-full" width={100} height={100} />{" "}
            </div>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!open && <FaBars name={open ? "close" : "menu"}></FaBars>}
          {open && <IoIosClose className="text-5xl mt-[-9px] mr-[-9px]" name={open ? "close" : "menu"}></IoIosClose>}
        </div>

        <ul
          className={`md:flex bg-white md:bg-transparent  md:items-center pt-3 md:pb-0 font-defaultFont absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in-out ${
            open ? "top-20 bg-theme " : "top-[-490px]"
          }`}
        >
          <div className=" md:flex md:mr-4">
          <li
              className={`navbar-item dropdown ${showDropdown ? "active" : ""}`}
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <div className='hidden md:block'>
              <Link href="/aboutus" className=" display-none navbar-link border-b-4 border-transparent hover:border-white">
                <div className="md:flex">
                  <h1 className='text-black md:text-white'>About Us</h1>
                  <RiArrowDropDownLine className="hidden md:block text-[28px]"/>
                </div>
              </Link>
              </div>
              { showDropdown && <div data-aos="zoom-in" data-aos-duration="200" className={`dropdown-content`}>
                <Link href="/aboutus#missionandvision" onClick={() => setOpen(!open)}><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>Mission And Vision</h1></div></Link>
                <Link href="/whoweare" onClick={() => setOpen(!open)}><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>Who We Are</h1></div></Link>
                <Link href="/aboutus#values" onClick={() => setOpen(!open)}><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>Values</h1></div></Link>
                <Link href="/aboutus#team" onClick={() => setOpen(!open)}><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>Team</h1></div></Link>
                {/* <Link href="/#whyus"><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>Why Us</h1></div></Link> */}
              </div>}
            </li>
            <li onClick={() => setOpen(!open)} className='md:hidden navbar-item dropdown'>
            <Link href="/aboutus" className="md:hidden">
                <div className="md:hidden font-[700] my-2">
                  <h1 className='text-black md:text-white md:hidden'>About Us</h1>
                </div>
              </Link>
            </li>
            <li
              className={`navbar-item dropdown`}
            >
              <Link onClick={() => setOpen(!open)} href="/SolutionAndPricing" className="navbar-link md:border-b-4 border-transparent hover:border-white">
                <div className="flex">
                  <h1 className='text-black md:text-white'>Solutions</h1>
                </div>
              </Link>
            </li>
            <li onClick={() => setOpen(!open)} className={`md:hidden navbar-item dropdown`}>
            <Link href="/ContactUs" className="md:hidden">
                <div className="md:hidden font-[700] my-2">
                  <h1 className='text-black md:text-white md:hidden'>Contact Us</h1>
                </div>
              </Link>
            </li>
            <li onClick={() => setOpen(!open)} className={`md:hidden navbar-item dropdown mt-24`}>
              <Link href="/blogs" className="md:hidden pt-4">
                <div className="md:hidden font-[700] my-4">
                  <h1 className='text-black md:text-white md:hidden'>News and Blogs</h1>
                </div>
              </Link>
            </li>
            <li onClick={() => setOpen(!open)} className={`md:hidden navbar-item dropdown mt-2`}>
              <Link href="/Careers" className="md:hidden pt-4">
                <div className="md:hidden font-[700] my-4">
                  <h1 className='text-black md:text-white md:hidden'>Careers</h1>
                </div>
              </Link>
            </li>
          
            <li
              className={`hidden md:block navbar-item dropdown ${showDropdown3 ? "active" : ""}`}
              onMouseEnter={toggleDropdown3}
              onMouseLeave={toggleDropdown3}
            >
              <Link href="#" className="navbar-link border-b-4 border-transparent hover:border-white">
                <div className="flex">
                  <h1 className='text-black md:text-white'>Resources</h1>
                  <RiArrowDropDownLine className="hidden md:block text-[28px]"/>
                </div>
              </Link>
              {showDropdown3 && <div data-aos="zoom-in" data-aos-duration="200" className={`dropdown-content`}>
                <Link href="/ContactUs#faqs"><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>FAQs</h1></div></Link>
                {/* <Link href="/"><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>News</h1></div></Link> */}
                <Link href="/blogs" onClick={() => setOpen(!open)}><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>News & Blogs</h1></div></Link>
                <Link  href="/ContactUs" onClick={() => setOpen(!open)}><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>Contact Us</h1></div></Link>
                <Link  href="/Careers" onClick={() => setOpen(!open)}><div className="flex justify-end p-2 hover:pr-6 duration-300 easee-in-out"><h1>Careers</h1></div></Link>
              </div>

              }
            </li>
            
            <Link href="/SolutionAndPricing#tailormadesolutions" onClick={() => setOpen(!open)} ><button className="ml-4 px-4 my-2 border-[#034488] md:border-white border-2 rounded-lg hover:bg-[#034488] font-bold hover:text-white  duration-300 easee-in-out text-[#034488] bg-white">Free Quote</button></Link>
          </div>
          <div className="relative cursor-pointer"></div>
        </ul>
      </div>
    </div>
  )
}
