"use client";
import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";
import Values from "./Components/Values";
// import SlickSlider from "./Components/Slider/SliderCard";
import Slider from "./Components/Slider";
const Home = () => {
  const value = [
    {
        key: 1,
        ques: "EXPERIENCE",
        answer: "With years of dedicated legal practice, our team brings unparalleled experience to every case. We leverage our expertise to navigate through complex legal matters, ensuring the best possible outcomes for our clients.",
    },
    {
        key: 2,
        ques: "TRANSPARENCY",
        answer: "Transparency is the cornerstone of our legal approach. We believe in keeping our clients well-informed at every stage of their legal journey, fostering trust and confidence in our professional services.",
    },
    {
        key: 3,
        ques: "TEAM COLLABORATION",
        answer: "Our law firm values teamwork and collaboration. We bring together a diverse team of legal experts, working in harmony to provide comprehensive and strategic solutions tailored to our clients' unique needs.",
    },
    {
        key: 4,
        ques: "RESULTS-DRIVEN",
        answer: "We are committed to achieving tangible results for our clients. Our focus on delivering positive outcomes, combined with diligence and ownership, sets us apart as a law firm dedicated to success and client satisfaction.",
    },
];

  const [highestHeight, setHighestHeight] = useState(400);
  useEffect(() => {
    const findHighestHeight = () => {
      const elements = document.getElementsByClassName('whycard');
      
      let maxHeight = 0;

      // Loop through elements and find the highest height
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementHeight = element.offsetHeight;
        maxHeight = Math.max(maxHeight, elementHeight);
      }
      console.log("element="+ maxHeight);
      setHighestHeight(maxHeight);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.height = maxHeight + 'px';
        element.addEventListener('mouseover', () => {
          element.style.height = 'auto';
        });
    
        element.addEventListener('mouseout', () => {
          element.style.height = maxHeight + 'px';
        });
      }    
    };

    // Call the function when the component mounts
    findHighestHeight();
  }, []);


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
      <div id="services" className="w-[90%] my-[5%] mx-auto">
                <div className="px-7 pt-24 text-[24px] md:text-[48px] font-bold text-center pb-6 text-[#342E37]">Our Services</div>
                <div className=" my-4">
                        <div className="flex flex-wrap mx-auto w-[85%] justify-between">
                            <div className="w-[100%] md:w-[24%] px-4 mt-2 md:mt-0">
                                <div className="section3 bg-no-repeat w-[100%]  h-[230px] bg-center bg-[url('/Solution_pricing/services/bg3.svg')]">
                                <p id ="threeone" className=" ml-6 absolute ease-in-out duration-700 opacity-0 w-[220px] one text-[14px] md:text-[18px] pt-6 text-center  text-[#342E37]">System ranking legal cases for efficient resource allocation based on predefined criteria.</p>

                                    <Image id ="threetwo" className=' ease-in-out duration-700 wo w-[80%] mx-auto pt-6  h-[63%]  align-middle' src="/images/services/1.png" width={1000} height={1000} alt={''}  />
                                </div>
                                <p className="text-[16px] md:text-[18px] text-[#342E37] font-medium text-center">Case Prioritization</p>
                            </div>
                            <div className="w-[100%] md:w-[24%] px-4 mt-12 md:mt-0">
                                <div className="section3 bg-no-repeat w-[100%]  h-[230px] bg-center bg-[url('/Solution_pricing/services/bg3.svg')]">
                                <p id ="threeone" className=" ml-6 absolute ease-in-out duration-700 opacity-0 w-[22 0px] one text-[14px] md:text-[16px] pt-6 text-center  text-[#342E37]">Real-time notifications on legal case changes, ensuring timely information.</p>

                                    <Image id ="threetwo" className=' ease-in-out duration-700 wo w-[80%] mx-auto pt-6  h-[63%]  align-middle' src="/images/services/2.png" width={1000} height={1000} alt={''}  />
                                </div>
                                <p className="text-[16px] md:text-[18px] text-[#342E37] font-medium text-center">Automated Updates</p>
                            </div>
                            <div className="w-[100%] md:w-[24%] px-4 mt-12 md:mt-0">
                                <div className="section3 bg-no-repeat w-[100%]  h-[230px] bg-center bg-[url('/Solution_pricing/services/bg3.svg')]">
                                <p id ="threeone" className=" ml-6 absolute ease-in-out duration-700 opacity-0 w-[220px] one text-[14px] md:text-[18px] pt-6 text-center  text-[#342E37]">Electronic submission of legal documents, replacing traditional paper filings.</p>

                                    <Image id ="threetwo" className=' ease-in-out duration-700 wo w-[80%] mx-auto pt-6  h-[63%]  align-middle' src="/images/services/3.png" width={1000} height={1000} alt={''}  />
                                </div>
                                <p className="text-[16px] md:text-[18px] text-[#342E37] font-medium text-center">E-filings</p>
                            </div>
                            <div className="w-[100%] md:w-[24%] px-4 mt-12 md:mt-0">
                                <div className="section4 bg-no-repeat w-[100%]  h-[230px] bg-center bg-[url('/Solution_pricing/services/bg4.svg')]">
                                <p id ="fourone" className=" ml-6 absolute ease-in-out duration-700 opacity-0 w-[220px] one text-[14px] md:text-[19px] pt-6 text-center text-[#342E37]">Support services, including advice or representation, for those who can't afford legal assistance.</p>
                                    <Image id ="fourtwo" className=' ease-in-out duration-700 two w-[80%] mx-auto pt-6  h-[63%]  align-middle' src="/images/services/4.png" width={1000} height={1000} alt={''}  />
                                </div>
                                <p className="text-[16px] md:text-[18px] text-[#342E37] font-medium text-center">Legal Aids</p>
                            </div>
                        </div>
                </div>
              </div>
      <div id="testimonials" className="bg-white">
          <div className="pb-8 w-full m-[auto]">
            <div className="py-24">
              <p className="px-7 text-3xl pb-4 md:text-[48px] text-[#342E37] font-bold text-center">
                Testimonials
              </p>
              <Slider />
            </div>
          </div>
        </div>
        <div id="values" className='bg-[#04434e] mb-[3rem] hidden lg:block'>
        <p className='text-white text-[48px] text-center mx-auto pt-[5%]'>Values</p>
        <div className="w-[90%] lg:w-[72%] mx-auto mt-[5%]">
          <div className=" mx-auto flex">
            <div>
              <div className="h-[50%]"></div>
              <div className="h-[50%] w-[4px] bg-white mx-auto"></div>
            </div>
            <div className="mt-12 h-[40px] w-[40px] ml-[-22px] rounded-[50%] flex items-center justify-items-center bg-white">
                <div className="h-[50%] w-[50%] mx-auto rounded-full bg-[#6FABE2]"></div>
            </div>
            <div className="section3 w-[90%] flex lg:mx-[2%]">
              <p id='text5' className='text-white flex flex-wrap justify-center content-center ease-in-out duration-300 border-white border-2  w-[40%] py-3 text-[18px] md:text-[24px] text-center mt-[35px] mb-[3%] lg:mx-[2%] '>EXPERIENCE</p>
              <p id='text6' className='text-[#04434e] mx-[3%] text-[16px] w-[60%] my-[2%] hover:text-white ease-in-out duration-300  text-justify'>With years of dedicated legal practice, our team brings unparalleled experience to every case. We leverage our expertise to navigate through complex legal matters, ensuring the best possible outcomes for our clients.</p>
            </div>
          </div>
          <div className='border-b-4 border-white bg-white w-full mx-auto' ></div>
          <div className="flex flex-row-reverse">
            <div>
              <div className="h-[100%] w-[4px] bg-white mx-auto"></div>
            </div>
            <div className="mt-12 h-[40px] mr-[-22px] z-[1] w-[40px] rounded-[50%] flex items-center justify-items-center bg-white">
                <div className="h-[50%] w-[50%] mx-auto rounded-full bg-[#6FABE2]"></div>
            </div>
            <div className="section2 w-[90%] flex lg:mx-[2%]">
              <p id='text3' className='text-[#04434e] mx-[3%] text-[16px] w-[60%] my-[2%] ease-in-out duration-300  text-justify'>Transparency is the cornerstone of our legal approach. We believe in keeping our clients well-informed at every stage of their legal journey, fostering trust and confidence in our professional services. </p>
              <p id='text4' className='text-white flex flex-wrap justify-center content-center ease-in-out duration-300 border-white border-2  w-[40%] py-3 text-[18px] md:text-[24px] text-center mt-[35px] mb-[3%] lg:mx-[2%]   hover:bg[#EFA00B]  '>TRANSPARENCY</p>
            </div>
          </div>
          <div className='border-b-4 border-white bg-white w-full mx-auto' ></div>
          <div className="mx-auto flex">
            <div>
              <div className="h-[100%] w-[4px] bg-white mx-auto"></div>
            </div>
            <div className="mt-12 h-[40px] w-[40px] ml-[-22px] rounded-[50%] flex items-center justify-items-center bg-white">
                <div className="h-[50%] w-[50%] mx-auto rounded-full bg-[#6FABE2]"></div>
            </div>
            <div className="section3 w-[90%] flex lg:mx-[2%]">
              <p id='text5' className='text-white flex flex-wrap justify-center content-center ease-in-out duration-300 border-white border-2  w-[40%] py-3 text-[18px] md:text-[24px] text-center mt-[35px] mb-[3%] lg:mx-[2%]   hover:bg-[#1D7ADB] '>TEAM COLLABORATION</p>
              <p id='text6' className='text-[#04434e] mx-[3%] text-[16px] w-[60%] my-[2%] hover:text-white ease-in-out duration-300 text-justify'>Our law firm values teamwork and collaboration. We bring together a diverse team of legal experts, working in harmony to provide comprehensive and strategic solutions tailored to our clients' unique needs. </p>
            </div>
          </div>
          <div className='border-b-4 border-white bg-white w-full mx-auto' ></div>
          <div className="mx-auto flex pb-[4rem] flex-row-reverse">
          <div>
              <div className="h-[50%] w-[4px] bg-white mx-auto"></div>
            </div>
            <div className="mt-12 h-[40px] mr-[-22px] z-[1] w-[40px] rounded-[50%] flex items-center justify-items-center bg-white">
                <div className="h-[50%] w-[50%] mx-auto rounded-full bg-[#6FABE2]"></div>
            </div>
            <div className="section4 w-[90%] flex lg:mx-[2%]">
              <p id='text7' className='text-[#04434e] mx-[3%] text-[16px] w-[60%] my-[2%] hover:text-white ease-in-out duration-300 text-justify'>We are committed to achieving tangible results for our clients. Our focus on delivering positive outcomes, combined with diligence and ownership, sets us apart as a law firm dedicated to success and client satisfaction.</p>
              <p id='text8' className='text-white flex flex-wrap justify-center content-center ease-in-out duration-300 border-white border-2  w-[40%] py-2 text-[18px] md:text-[24px] text-center mt-[35px] mb-[3%] lg: mx-[2%] hover:bg-white '>RESULTS DRIVEN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;