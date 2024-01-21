"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import SlickSlider from "./Components/Slider/SliderCard";
const Home = () => {
  const [highestHeight, setHighestHeight] = useState(400);

  function displayWhyChoose() {
    return (
      <div className="bg-white md:mt-0 w-full pt-16 shadow pb-16 md:pb-32">
        <h1
          id="whyus"
          data-aos="fade-up"
          className="text-center text-black text-3xl md:text-[38px] font-[600]"
        >
          Why Choose Legal सारथी?
        </h1>
        <div className="lg:flex mx-[5%] mt-12 justify-around">
          <div className="w-full lg:w-[23%]">
            <section
              data-aos="fade-up"
              className={`whycard mt-4 h-[${highestHeight}px] hover:h-auto lg:mt-0 w-full bg-[#04434e] rounded-[20px] text-white px-8 pt-6 ease-in-out duration-300`}
            >
              <h1 className="text-xl font-[600] ">
                E-filing <br /> Made easy
              </h1>
              <p
                id="text1"
                className="text-sm w-[80%] mt-2 ease-in-out duration-300 relative top-0"
              >
                Effortlessly navigate the legal landscape with our...
              </p>
              <p
                id="text2"
                className="md:relative text-sm w-[80%] mt-2 md:ease-in-out md:duration-300 md:opacity-0"
              >
                Effortlessly navigate the legal landscape with our streamlined
                e-filing platform, simplifying and accelerating the process of
                submitting cases online for a hassle-free experience in the
                digital era.
              </p>
              <div className="w-full">
                <Image
                  alt=""
                  id="img"
                  className="w-[65%] md:w-[40%] lg:w-[90%] mx-auto ease-in-out duration-300 relative mt-6 md:mt-0  top-[-26px] rounded-[20px]"
                  src="/images/why/1.png"
                  width={1000}
                  height={1000}
                />
              </div>
            </section>
          </div>
          <div className="w-full lg:w-[23%]">
            <section
              data-aos="fade-up"
              className={`whycard mt-4  h-[${highestHeight}px] hover:h-auto  lg:mt-0 w-full bg-[#04434e] rounded-[20px] text-white px-8 pt-6 ease-in-out duration-300`}
            >
              <h1 className="text-xl font-[600] ">
                Resolution made <br />
                faster{" "}
              </h1>
              <p
                id="text1"
                className="text-sm w-[80%] mt-2 ease-in-out duration-300 relative top-0"
              >
                Experience swift and efficient case resolution...
              </p>
              <p
                id="text2"
                className="md:relative text-sm w-[80%] mt-2 ease-in-out duration-300 opacity-0"
              >
                Experience swift and efficient case resolution with our advanced
                systems, employing cutting-edge technology to expedite the legal
                process and deliver quicker outcomes for your peace of mind.
              </p>
              <div className="w-full">
                <Image
                  alt=""
                  id="img"
                  className="w-[75%]  md:w-[30%] lg:w-[90%] mx-auto ease-in-out duration-300 relative  mt-4 md:mt-16  top-[-26px] rounded-[20px]"
                  src="/images/why/2.svg"
                  width={1000}
                  height={1000}
                />
              </div>
            </section>
          </div>
          <div className="w-full lg:w-[23%]">
            <section
              data-aos="fade-up"
              className="whycard mt-4 lg:mt-0 w-full bg-[#04434e] rounded-[20px] text-white px-8 pt-6 ease-in-out duration-300"
            >
              <h1 className="text-xl font-[600] ">24 * 7 Customer Care</h1>
              <p
                id="text1"
                className="text-sm w-[80%] mt-2 ease-in-out duration-300 relative top-0"
              >
                We are always available to serve you...
              </p>
              <p
                id="text2"
                className="md:relative text-sm w-[80%] mt-2 ease-in-out duration-300 md:opacity-0"
              >
                We are always available to serve you. Our team works tirelessly
                around the clock to be at your service and help you solve any
                challenges you may face.
              </p>
              <div className="w-full">
                <Image
                  alt=""
                  id="img"
                  className="w-[65%]  md:w-[50%] lg:w-[90%] mx-auto ease-in-out duration-300 mt-8 md:mt-0 relative top-[-26px] rounded-[20px]"
                  src="/images/why/3.svg"
                  width={1000}
                  height={1000}
                />
              </div>
            </section>
          </div>
          <div className="w-full lg:w-[23%]">
            <section
              data-aos="fade-up"
              className="whycard mt-4 lg:mt-0 w-full bg-[#04434e] rounded-[20px] text-white px-8 pt-6 ease-in-out duration-300"
            >
              <h1 className="text-xl font-[600] ">Judgement Made Faster</h1>
              <p
                id="text1"
                className="text-sm w-[80%] mt-2 ease-in-out duration-300 relative top-0"
              >
                Accelerate justice with our innovative...
              </p>
              <p
                id="text2"
                className="md:relative text-sm w-[80%] mt-2 ease-in-out duration-300 opacity-0"
              >
                Accelerate justice with our innovative platform, ensuring swift
                and efficient judgment delivery by leveraging advanced
                technologies, revolutionizing the legal landscape for timely
                resolutions.
              </p>
              <div className="w-full">
                <Image
                  alt=""
                  id="img"
                  className="w-[65%]  md:w-[50%] lg:w-[75%] mx-auto ease-in-out duration-300 mt-4 md:mt-1 relative top-[-26px] rounded-[20px]"
                  src="/images/why/4.png"
                  width={1000}
                  height={1000}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-red-100 bg-[#A8C7E7]">
        <Image
          className="w-[100vw] h-[85vh] mx-auto"
          src="/images/home.hero.svg"
          alt="JoinUs Hero"
          width={100}
          height={100}
        />
      </div>
      {displayWhyChoose()}
      {/* <div id="testimonials" data-aos="fade-up" className="bg-white">
          <div className="pb-8 w-full m-[auto]">
            <div className="py-24">
              <p className="px-7 text-3xl pb-4 md:text-[48px] text-[#342E37] font-bold text-center">
                Testimonials
              </p>
              <SlickSlider />
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Home;
