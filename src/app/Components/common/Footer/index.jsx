'use client';
import React from "react";
import {
  AiTwotoneMail,
  AiTwotonePhone,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const Data = {
    aboutus: [
      {
        "key": 1,
        text: "Mission and Vision",
        link: "/aboutus#missionandvision",
      },
      {
        "key": 2,
        text: "Who We Are",
        link: "/whoweare",
      },
      {
        "key": 3,
        text: "Values",
        link: "/aboutus#values",
      },
      {
        "key": 4,
        text: "Team",
        link: "/aboutus#team",
      }
    ],
    solutions: [
      {
        "key": 1,
        text: "Services",
        link: "/",
      },
      {
        "key": 2,
        text: "Projects",
        link: "/",
      },
      {
        "key": 3,
        text: "Testimonials",
        link: "/",
      },
    ],
    resources: [
      {
        "key": 1,
        text: "FAQs",
        link: "/ContactUs#faqs",
      },
      {
        "key": 2,
        text: "News & Blogs",
        link: "/blogs",
      },
      {
        "key": 3,
        text: "Contact Us",
        link: "/ContactUs",
      },
      {
        "key": 4,
        text: "Careers",
        link: "/Careers",
      },
      {
        "key": 5,
        text: "Terms of Service",
        link: "/",
      },
      {
        "key": 6,
        text: "Privacy Policy",
        link: "/",
      }
    ],
  };
  return (
    <div className="bg-[#04434e] w-full py-8 md:py-12 text-white z-[100]">
      <div className="flex w-[90%] md:w-[80%] mx-auto ">
        <div className="md:w-[30%]">
          <Image src='/images/logo.png' width={2000} height={2000} alt="" className="w-[100px] h-[100px] rounded-full" />
          <h1 className='logo text-4xl font-[600] mt-2'>Legal</h1>
              <h1 className='mt-1 text-2xl'>सारथी</h1>
          <div className="mt-8 md:mt-12 flex">
            <AiTwotoneMail className="mt-[6px]" />
            <a
              className="font-[100] italic underline ml-2  "
              href="mailto:info@elfihomes.com"
            >
              info@legalsarthi.com
            </a>
          </div>
          <div className="mt-2 flex">
            <AiTwotonePhone className="mt-[6px]" />
            <h1 className="font-[100] italic underline ml-2  ">XXX-XXX-XXXX</h1>
          </div>
        </div>
        <div className="md:w-[23%] text-right hidden md:block">
        </div>
        <div className="md:w-[23%] text-right hidden md:block">
          <h1 className="text-lg font-[600] mb-8">About Us</h1>
          {Data.aboutus.map((card) => {
            return (
              <div className="flex justify-end" key={card.key}>
                <Link href={card.link}>
                  <p className="font-[400] hover:pr-6 duration-300 ease-in-out mt-1">
                    {card.text}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="md:w-[23%] text-right hidden md:block">
          <h1 className="text-lg font-[600] mb-8">Resources</h1>
          {Data.resources.map((card) => {
            return (
              <div className="flex justify-end" key={card.key}> 
                <Link href={card.link}>
                  <p className="font-[400] hover:pr-6 duration-300 ease-in-out mt-1">
                    {card.text}
                  </p>
                </Link>
              </div>
            );
          })}
          <h1 className="text-lg font-[600] mb-8"></h1>
        </div>
        {/* For mobile screens */}
        <div className="w-[70%] md:hidden">
          <div className="flex justify-end">
            <Link href="/aboutus">
              <p className="font-[400] hover:pr-6 duration-300 ease-in-out mt-4">
                About Us
              </p>
            </Link>
          </div>
          <div className="flex justify-end">
            <Link href="/SolutionAndPricing">
              <p className="font-[400] hover:pr-6 duration-300 ease-in-out mt-4">
                Solutions
              </p>
            </Link>
          </div>
          <div className="flex justify-end">
            <Link href="/blogs">
              <p className="font-[400] hover:pr-6 duration-300 ease-in-out mt-4">
                Blogs
              </p>
            </Link>
          </div>
          <div className="flex justify-end">
            <Link href="/ContactUs">
              <p className="font-[400] hover:pr-6 duration-300 ease-in-out mt-4">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[95%] md:w-[85%] h-[1px] mx-auto bg-[white] my-3"></div>
      <div className="w-[90%] md:w-[80%] mt-2 mx-auto flex justify-between">
        <p className="font-[100] text-[0.75rem] ">Copyright2024 © Legal सारथी</p>
        <div className="w-[150px] flex justify-around text-xl">
          <Link  target="_blank" href="#">
            <AiFillLinkedin />
          </Link>
          <Link target="_blank" href="#">
            <AiFillFacebook />
          </Link>
          <Link target="_blank" href="#">
            <AiFillInstagram />
          </Link>
          <Link target="_blank" href="#">
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
