"use client";
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'


function Values(props) {
    
    const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    AOS.init({
         duration: 1200,
         once: false,
       })
 }, [])
    return (
        <div className="">
            <div id="values" className=''>
                
                <div className="w-[80%] mx-auto">
                    <div className="">
                        <div className="flex border-white border-2 hover:cursor-pointer duration-600 ease-in-out mt-4" onClick={() => setIsOpen((prev) => !prev)}>
                            <div className="" onClick={() => handleClick}></div>
                            <div className="text-white w-[90%] text-center ease-in-out duration-300  md:text-[24px] py-2 text-[18px] px-[0.5rem]">{props.ques}</div>
                            {!isOpen ? (
                                <RiArrowDropDownLine className="h-[40px] w-[10%] text-white" />
                            ) : (
                                <RiArrowDropUpLine className="w-[40px] h-[40px] text-white" />
                            )
                            }
                        </div>
                        {isOpen && (
                            <div data-aos="fade" className="text-white mx-[3%] md:text-[24px] text-[16px] mt-[2%] mb-[4%] text-center hover:text-white ease-in-out duration-300'">{props.answer}</div>
                        )}
                        <div className=" mt-[0.5rem] lg:mt-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Values;