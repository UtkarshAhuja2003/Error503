"use client";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import AOS from 'aos';
import 'aos/dist/aos.css';
import parse from "html-react-parser";



function Contact(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
      };
    //   const emptybox = isClicked ? (translate-y-4): '';
    useEffect(() => {
        AOS.init({
             duration: 1200,
             once: false,
           })
     }, [])
    return (
        <div className="">
            <div className="flex hover:cursor-pointer duration-600 ease-in-out mt-4"  onClick={() => setIsOpen((prev) => !prev)}>
                            {/* <div className=" border-2 border-black w-[50px] h-[50px] rounded-md " onClick={() => handleClick }></div> */}
                            <div className="text-[16px] lg:text-[18px] text-[#342E37] ml-2 lg:ml-[2rem] py-[0.5rem] w-[90%] font-bold">{props.ques}</div>
                            {!isOpen ? (
                                <RiArrowDropDownLine className="w-[40px] h-[40px]" />
                            ) : (
                                <RiArrowDropUpLine className="w-[40px] h-[40px]" />
                            )
                            }
                        </div>
                        {isOpen && (
                            <div data-aos="fade" className="text-[16px] lg:text-[18px] text-[#342E37] ml-[1rem] lg:ml-[2rem] mt-4 text-justify">{parse(props.answer)}</div>
                        )}
                        <div className="border-b-2 border-black mt-[0.5rem] lg:mt-[2rem]"></div>
        </div>
    );
};
export default Contact;