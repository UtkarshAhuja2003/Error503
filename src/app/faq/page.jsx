"use client";
import { useState, useEffect } from "react";
import Image from 'next/image'
import { RiCustomerService2Fill } from "react-icons/ri"
import { FaXTwitter } from "react-icons/fa6";
import Faqcard from "./faqcard"
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa"
import Link from "next/link";


function Contact() {
    //   const emptybox = isClicked ? (translate-y-4): '';
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [visiblefaqs, setVisiblefaqs] = useState(5);
    // const date=getCurrentDate();

    const faqques = [
        {
            key: 1,
            ques: "Why would I work with your company?",
            answer: "<b>Culture:</b> We are trustworthy, won’t change the pricing on the homeowners last minute, passionate to make a positive change in our customer’s life and our environment. We are built on a culture of being collaborative, flexible, transparent, and result-driven. This shows in our communication and our work. <br/>"
        },
        {
            key: 2,
            ques: "What documents can be submitted through the e-filing system?",
            answer: "Detail the process for users to search for advocates, including any matching algorithms or filters available, and provide information on how to initiate contact."
        },
        {
            key: 3,
            ques: "How can I find and contact an advocate for my case?",
            answer: "Detail the process for users to search for advocates, including any matching algorithms or filters available, and provide information on how to initiate contact."
        },
        {
            key: 4,
            ques: "How do I track the status of my case on the website?",
            answer: "Provide step-by-step instructions on how users can check the real-time status of their cases and any notifications or alerts they might receive."
        },
        {
            key: 5,
            ques: "Is my personal and case information secure on this platform?",
            answer: "Assure users about the security measures in place to protect their sensitive information, including encryption, secure connections, and adherence to data privacy regulations."
        },
        {
            key: 6,
            ques: "Can I access the website from my mobile device?",
            answer: "Confirm the mobile responsiveness of your website and provide guidance on accessing and using the platform on smartphones or tablets."
        },
        {
            key: 7,
            ques: "What legal resources are available on the website?",
            answer: "Highlight the legal resources, guides, and FAQs available to users for self-help and understanding the legal process better."
        },
        {
            key: 8,
            ques: "How can I provide feedback or report issues with the website?",
            answer: "Instruct users on how to submit feedback, report technical issues, or seek assistance, fostering a user-centric approach to improving the platform."
        }
    ]
    const openOverlay = () => {
        setIsOverlayVisible(true);
        // scrollToMyDiv();
    };

    const faqques2 = faqques.slice(0, visiblefaqs);

    const closeOverlay = () => {
        setIsOverlayVisible(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 450,
            once: true,
        });
    }, []);
    // Function to scroll to an element with an offset
    //   const scrollToElement = (elementId:string, offset = 100) => {
    //     const element = document.getElementById(elementId);
    //     if (element) {
    //       const elementPosition = element.getBoundingClientRect().top;
    //       const offsetPosition = elementPosition - offset;
    //       window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
    //     }
    //   };


    return (
        <div className="py-[5%] w-[80%] mx-auto">
            <div className="">
                <h1 className='text-center text-[22px] md:text-[64px]'>We Are <span className="text-[#1D7ADB]" > Here </span> To <span className='text-[#1D7ADB]'>Serve</span></h1>
                <p className="text-center text-[#6D6A6A] text-[18px] font-medium">Let us know how we can help.</p>
                <Image className=" pt-[2%] w-[100%] mx-auto" src="/images/ContactUs2.svg" width={100} height={100} alt={''} />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap my-[10%] lg:my-[5%] w-[95%] md:w-[80%] mx-auto ">
                
            </div>
            {/* FAQ's */}
            <div id="faqs" className="pt-2 lg:mt-0">
                <h1 className="text-[#342E37] text-[22px] md:text-[36px] font-bold text-center">Frequently Asked Questions</h1>
                <div className="w-[98%] lg:w-[80%] mx-auto my-[1.5rem] lg:my-[4rem] ">
                    <div className="">
                        {
                            faqques2.map((faq) => (<Faqcard id={faq.key} key={faq.key} ques={faq.ques} answer={faq.answer} />))
                        }
                        {visiblefaqs < 20 && <div className="text-center mt-6"><button onClick={() => { setVisiblefaqs(visiblefaqs + 4) }} className='mx-auto rounded-md bg-[#1D7ADB] hover:bg-[#0B5198] ease-in-out duration-300 px-4 py-2 text-white'>Load More</button></div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Contact;