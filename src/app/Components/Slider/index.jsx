import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick-slider-custom.css'; // Import your custom CSS file
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import SliderCard from "./SliderCard"

const index = () => {
  const reviews = [
    {
      "index": 1,
      "heading": "Expert Legal Counsel",
      "reviewshort": "Legal Saarthi, known for their expertise, impressed me with their comprehensive legal guidance.",
      "reviewfulltext": "Legal Saarthi, known for their expertise, impressed me with their comprehensive legal guidance and commitment to excellence. Their legal team navigated through complex legal issues with ease, providing valuable insights at every step. The attorneys at Legal Saarthi were responsive, professional, and exhibited a deep understanding of the law. The entire process, from consultation to resolution, was seamless. I appreciate their dedication to achieving positive outcomes for their clients. If you seek expert legal counsel, Legal Saarthi is the right choice.",
      "name": "Emily Johnson",
      "stars": 4,
      "designation": "Satisfied Client"
    },
    {
      "index": 2,
      "heading": "Efficient and Reliable Legal Services",
      "reviewshort": "Legal Saarthi proved to be an efficient and reliable choice for all my legal needs.",
      "reviewfulltext": "Legal Saarthi proved to be an efficient and reliable choice for all my legal needs. Their team demonstrated a high level of professionalism, handling my case with precision and attention to detail. The attorneys were proactive in addressing potential challenges and provided clear guidance throughout the legal process. The efficiency of their legal services, coupled with transparent communication, set Legal Saarthi apart. I am grateful for their commitment to delivering top-notch legal solutions. I highly recommend their services.",
      "name": "Robert Turner",
      "stars": 5,
      "designation": "Happy Client"
    },
    {
      "index": 3,
      "heading": "Dedicated Legal Team",
      "reviewshort": "Legal Saarthi has a dedicated legal team that goes above and beyond for their clients.",
      "reviewfulltext": "Legal Saarthi has a dedicated legal team that goes above and beyond for their clients. Their commitment to providing exceptional legal representation was evident from the start. The attorneys at Legal Saarthi are knowledgeable, thorough, and always put the client's best interests first. I was impressed with the personalized attention and prompt responses to my legal inquiries. Whether it was negotiation or courtroom representation, they handled it with skill and professionalism. Choosing Legal Saarthi was a wise decision for my legal needs.",
      "name": "Sophia Davis",
      "stars": 4,
      "designation": "Satisfied Customer"
    },
    {
      "index": 4,
      "heading": "Top-Tier Legal Expertise",
      "reviewshort": "Legal Saarthi provided top-tier legal expertise, ensuring a positive outcome for my case.",
      "reviewfulltext": "Legal Saarthi provided top-tier legal expertise, ensuring a positive outcome for my case. Their legal team exhibited a profound understanding of the law, coupled with strategic thinking that proved invaluable. The attorneys at Legal Saarthi were responsive, detail-oriented, and kept me informed throughout the legal process. They navigated through the complexities of my case with confidence and professionalism. I am grateful for their dedication to achieving the best possible results. If you need legal services backed by expertise, Legal Saarthi is the firm to choose.",
      "name": "Michael Anderson",
      "stars": 5,
      "designation": "Satisfied Client"
    }
  ]
  
  
  ;
  const [slidesToShow, setSlidesToShow] = useState(3);
  

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    

    // Initial update
    updateSlidesToShow();

    // Attach the event listener
    window.addEventListener('resize', updateSlidesToShow);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);
  useEffect(() => {
     // 3000 milliseconds (3 seconds)
     const carousel = document.querySelector('.carousel');
    for(let i = 0; i <10; i++)
    {
      const interval = setInterval(() => {
        // Replace this with the function you want to call
        if(carousel)
        {
          carousel.scrollLeft += 300;
        }
      }, 3500);
    }
    // Cleanup the interval when the component unmounts
  }, []);

  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    const scrollLeftButton = document.getElementById('scroll-left-button');
    const scrollRightButton = document.getElementById('scroll-right-button');
    const itemWidthElements = document.getElementsByClassName('carousel-item-width');
    // Check if any elements with the specified class are found
    let itemWidth = 300;
    if (itemWidthElements.length > 0) {
      // Assuming you want to get the width of the first matching element
      itemWidth = 300;

      // Now, itemWidth contains the width of the element
      console.log(itemWidth);
    } else {
      console.error('Element with class "carousel-item-width" not found.');
    }
    itemWidth = itemWidth*0.95;

    if (scrollLeftButton && carousel && scrollRightButton) {
        scrollLeftButton.addEventListener('click', function () {
            carousel.scrollLeft -= itemWidth;
        });

        scrollRightButton.addEventListener('click', function () {
            carousel.scrollLeft += itemWidth;
        });
    }

}, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  function renderSliderCards() {
    let renderedCards = [];
  
    for (let i = 0; i < 100; i++) {
      const review = reviews[i%7];
      if (review) {
        renderedCards.push(
          <SliderCard
            key={i}
            name={review.name}
            stars={review.stars}
            heading={review.heading}
            designation={review.designation}
            reviewfulltext={review.reviewfulltext}
            reviewshort={review.reviewshort}
          />
        );
      }
    }
    return renderedCards;
  }

  return (
    <div>
      <div className='w-full z-20 relative h-[50px] bg-white'></div>
      <div className='w-full  z-20 bg-white relative h-[30px] md:h-[100px] mt-[-15px] md:mt-[-50px] rounded-[100%]'></div>
      <div className='w-[95%] mx-auto carousel mt-[-50px] relative grid grid-flow-col gap-x-[1rem] overflow-y-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth'>
  {renderSliderCards()}
</div>
      <div className='w-full  z-20 bg-white relative h-[30px] md:h-[100px] mt-[-15px] md:mt-[-50px] rounded-[100%]'></div>
      <div className='w-full z-20 relative h-[50px] bg-white'></div>
      <div className='mt-[-30px] md:mt-[-100px] z-[60] relative flex justify-center'>
        <button id='scroll-left-button' className='scroll-button '><AiOutlineArrowLeft className="text-2xl font-bold"/></button>
        <button id='scroll-right-button' className='scroll-button'><AiOutlineArrowRight className="text-2xl font-bold"/></button>
      </div>
    </div>
  );
};

export default index;
