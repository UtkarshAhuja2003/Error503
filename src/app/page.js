"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import Values from "./Components/Values";
// import SlickSlider from "./Components/Slider/SliderCard";
import Slider from "./Components/Slider";
import { FiRotateCcw } from "react-icons/fi";
import Link from "next/link";

function Home() {

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
        <div className="ml-24 absolute top-[300px] ">
          <h1 className="text-[#04434e] font-bold text-5xl">
            Legal सारथी
          </h1>
          <div className="flex  mt-4">  
          <Link href="/advocate/signin" onClick={() => setOpen(!open)} ><button className=" px-4 my-2 border-[#034488] md:border-white border-2 rounded-lg hover:bg-[#034488] font-bold hover:text-white  duration-300 easee-in-out text-[#034488] bg-white py-1  ">Login as Advocate</button></Link>
          <Link href="/litigant/signin" onClick={() => setOpen(!open)} ><button className="ml-4 px-4 my-2 border-[#034488] md:border-white border-2 rounded-lg hover:bg-[#034488] font-bold hover:text-white  duration-300 easee-in-out text-[#034488] bg-white py-1">Login as Litigant</button></Link>
          </div>
          <h1 className="text-white font-bold text-3xl"></h1>
        </div>

      </div>
      {displayWhyChoose()}
      <div id="services" className="w-[100%] my-[5%] mx-auto">
      <div className="bg-[#A8C7E7] w-full py-12 md:py-24 md:px-[10%]">
          <h1
            data-aos="fade-up"
            className="text-center text-black text-3xl md:text-[38px] font-[600]"
          >
            Our Services
          </h1>
          <p
            data-aos="fade-up"
            className="w-[90%] md:w-[60%] mx-auto text-center font-[300] mt-2"
          >
          </p>
          <div
            data-aos="fade-up"
            className="md:flex justify-between mt-8 md:mt-16"
          >
            <div className="flip-card mx-auto w-[80%] md:w-[23%] mt-8 md:mt-0">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[url('/images/services/1.jpg')] bg-cover bg-no-repeat bg-center rounded-[20px]">
                  <FiRotateCcw className="ml-[90%] mt-2 text-xl" />
                  <div className="bg-white opacity-90 rounded-b-[20px]">
                    <h1 className="py-2  text-[20px] mt-[118px] font-bold">
                      Case Prioritization
                    </h1>
                  </div>
                </div>

                <div className="flip-card-back rounded-[20px] bg-[url('/images/services/1.jpg')] bg-cover bg-no-repeat">
                  <p className="w-[80%] text-center mx-auto mt-8 text-[14px] text-black">
                  A system that assesses and ranks legal cases based on predefined criteria to determine their urgency or importance for efficient allocation of resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card mx-auto w-[80%] mt-8 md:mt-0 md:w-[23%]">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[url('/images/services/2.jpg')] bg-cover bg-no-repeat bg-center rounded-[20px]">
                  <FiRotateCcw className="ml-[90%] mt-2 text-xl" />
                  <div className="bg-white opacity-90 rounded-b-[20px]">
                    <h1 className="py-2 text-[20px] mt-[118px] font-bold">
                      Automated Updates
                    </h1>
                  </div>
                </div>

                <div className="flip-card-back rounded-[20px] bg-[url('/images/services/2.jpg')] bg-cover bg-no-repeat">
                  <p className="w-[80%] text-center mx-auto mt-8 text-[14px] text-black">
                  A service that automatically provides real-time information or notifications regarding changes, developments, or status updates in legal cases or processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card mx-auto w-[80%] md:w-[23%] mt-8 md:mt-0">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[url('/images/services/3.jpg')] bg-cover bg-no-repeat bg-center rounded-[20px]">
                  <FiRotateCcw className="ml-[90%] mt-2 text-xl" />
                  <div className="bg-white opacity-90 rounded-b-[20px]">
                    <h1 className="py-2 text-[20px] mt-[118px] font-bold">
                      E-Filings
                    </h1>
                  </div>
                </div>
                <div className="flip-card-back rounded-[20px] bg-[url('/images/services/3.jpg')] bg-cover bg-no-repeat">
                  <p className="w-[80%] text-center mx-auto mt-8 text-[14px] text-black">
                  The electronic submission of legal documents to courts or government agencies, replacing traditional paper filings and offering a more efficient and digital approach to legal proceedings.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card mx-auto w-[80%] md:w-[23%] mt-8 md:mt-0">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[url('/images/services/4.jpg')] bg-cover bg-no-repeat bg-center rounded-[20px]">
                  <FiRotateCcw className="ml-[90%] mt-2 text-xl" />
                  <div className="bg-white opacity-90 rounded-b-[20px]">
                    <h1 className="py-2 text-[20px] mt-[118px] font-bold">
                      Legal Aids
                    </h1>
                  </div>
                </div>

                <div className="flip-card-back rounded-[20px] bg-[url('/images/services/4.jpg')] bg-cover bg-no-repeat">
                  <p className="w-[80%] text-center mx-auto mt-6 text-[14px] text-black">
                  Support services, often including legal advice or representation, provided to individuals who may not afford legal assistance, aiming to ensure access to justice for all.
                  </p>
                </div>
              </div>
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
              <p id='text6' className='text-[#04434e] mx-[3%] text-[16px] w-[60%] my-[2%] hover:text-white ease-in-out duration-300 text-justify'>Our law firm values teamwork and collaboration. We bring together a diverse team of legal experts, working in harmony to provide comprehensive and strategic solutions tailored to our clients&apos; unique needs. </p>
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