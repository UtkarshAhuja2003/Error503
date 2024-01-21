'use client';
import React, { useEffect, useState } from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SlickSlider(props) {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const stars = Array.from({ length: props.stars }, (_, index) => index + 1);

    const scrollToMyDiv = () => {
        const myDiv = document.getElementById("sli12");
        if (myDiv) {
            myDiv.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openOverlay = () => {
        setIsOverlayVisible(true);
        scrollToMyDiv();
    };

    const closeOverlay = () => {
        setIsOverlayVisible(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 450,
            once: true,
        });
    }, []);

    return (
        <div>
            {isOverlayVisible && (
                <div className='z-[100] w-[100%] h-[100vh] mx-auto bg-black bg-opacity-50 rounded-lg text-black fixed top-[-5%] left-[0%]'>
                    <div data-aos="fade-down" className='mx-auto mt-[3rem] md:mt-[3rem] lg:mt-[30vh]  w-[85%] md:w-[60%]'>
                        <div className='bg-[#1D7ADB] carousel-item-width border-2 rounded-2 border-white mx-auto mt-4 md:py-8 '>
                            <div className='w-[95%] md:w-[80%] mx-auto py-[5%] px-[2%] lg:py-[0] lg:px-0 mt-0 lg:mt-4'>
                                <div className='flex flex-row-reverse'><button onClick={closeOverlay} className='text-white' data-dismiss="modal">X</button></div>
                                <ImQuotesLeft className=""/>
                                <h1 className='text-white text-[16px] ml-3 font-[600]'>{props.heading}</h1> {/* Use the destructured heading */}
                                <p className='text-[13px] md:text-[15px] ml-3 text-white mt-0 md:mt-3 text-justify'>{props.reviewfulltext}</p>
                                <div className='flex justify-between mt-4 ml-4'>
                                <div className="flex mt-[4px]">
                                    {stars.map((star) => (
                                        <div key={star} className="text-yellow-500 text-2xl">&#9733;</div>
                                    ))}
                                    </div>
                                    <h1 className='text-[12px] ml-3 mt-3 text-white'>~ {props.name}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div onClick={openOverlay} className='w-[300px] md:w-[400px] h-[300px] snap-start'>
                <div className='bg-[#1D7ADB] mx-auto pt-16 md:py-12 h-[300px]'>
                    <div className='w-[80%] mx-auto mt-4'>
                        <ImQuotesLeft className=""/>
                        <h1 className='text-white text-[15px] ml-3 font-[600]'>{props.heading}</h1> {/* Use the destructured heading */}
                        <p className='text-[13px] ml-3 text-white mt-3'>{props.reviewshort}...</p>
                        <div className='flex justify-between mt-4 ml-4'>
                        <div className="flex mt-[4px]">
                            {stars.map((star) => (
                                <div key={star} className="text-yellow-500 text-2xl">&#9733;</div>
                            ))}
                            </div>
                            <h1 className='text-[12px] ml-3 mt-6 text-white'>~ {props.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
