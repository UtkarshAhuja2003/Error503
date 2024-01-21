import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick-slider-custom.css'; // Import your custom CSS file
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import SliderCard from "./SliderCard"

const index = () => {
  const reviews = [
    {
      "index": 0,
      "heading": "Went above and beyond!",
      "reviewshort": "EL-FI Homes, a standout in solar panel installation and battery backups, caught my",
      "reviewfulltext": "EL-FI Homes, a standout in solar panel installation and battery backups, caught my attention for their high-quality products at competitive prices. Their detailed step-by-step process and round-the-clock support were impressive. The Installation Team's dedication was evident, completing the project in about a month despite electrical panel complications from my end. They offered swift maintenance, even matching conduit aesthetics, and managed permits meticulously. The Project Manager, Uday, displayed expertise, effective communication, and a friendly demeanor. EL-FI proved to be the ideal choice with exceptional customer service. The solar panels also exceeded energy expectations. If you’re looking for a swift installation and reliable customer service, I highly recommend them.",
      "name": " Vipin Tiwari",
      "stars": 5,
      "designation": "Customer"
    },
    {
      "index": 1,
      "heading": "Good service and bang for your buck",
      "reviewshort": "EL-FI Homes executed my Q Cell panel installation exceptionally well. They completed",
      "reviewfulltext": "EL-FI Homes executed my Q Cell panel installation exceptionally well. They completed it and obtained PTO within a month, adhering largely to the contract schedule. I now generate more energy than my household, including a Tesla Model 3, consumes. While SCE tracking isn't fully synchronized, I expect negligible or negative electricity bills.My only grievance is that EL-FI's energy tracking app isn't functional yet for monthly reports, but despite this, the system's value and quick installation met my expectations. I'm confident the investment will recoup its costs in under seven years.",
      "name": " Mohit Arora",
      "stars": 5,
      "designation": "Customer"
    },
    {
      "index": 2,
      "heading": "Excellent experience with this company",
      "reviewshort": "Thrilled to share my outstanding experience with EL-FI Homes' solar installation service. Their",
      "reviewfulltext": "Thrilled to share my outstanding experience with EL-FI Homes' solar installation service. Their comprehensive, detail-oriented approach stood out. Clear communication, on-time delivery, and uncompromised quality marked their work. After considering other options, EL-FI's tailored solution, financing help, and expertise shone. Responsive and knowledgeable, they ensured a smooth installation process. The team's professionalism, punctuality, and craftsmanship were impressive. System performance exceeded expectations, supported by their prompt responsiveness. Their friendly approach made the journey enjoyable. EL-FI Homes is highly recommended for their professionalism, expertise, and customer commitment. Thank you, EL-FI Homes, for an exceptional solar installation.",
      "name": " mikehoffnagle",
      "stars": 5,
      "designation": "Customer"
    },{
      "index": 3,
      "heading": "Fast installers, great panels",
      "reviewshort": "The contractor was responsive and got out to my home for an estimate quickly. I spoke with them",
      "reviewfulltext": "The contractor was responsive and got out to my home for an estimate quickly. I spoke with them about my future plans of getting an EV, so I needed a system that would be able to handle that eventually. I got a technical estimate, and they listened to my concerns about panel placement. I had some updates to my electrical panel and roofers at the same time that I was worried about. They had to coordinate with roofers, and I was impressed they went the extra mile to make sure the project got done on time and were there when they said they'd be. After installation, they cleaned up after themselves. Getting the panels was a stretch for the budget with the other work I'm having done, but the energy they're producing is within the estimate, and they're working like they're supposed to.",
      "name": " buffingtonchristina",
      "stars": 5,
      "designation": "Customer"
    },{
      "index": 4,
      "heading": "Electrify your home",
      "reviewshort": "Exploring solar options, we got quotes from various companies. ELFI Homes' Uday gave a valuable!",
      "reviewfulltext": "Exploring solar options, we got quotes from various companies. ELFI Homes' Uday gave a valuable second opinion, offering more power for the same price and lower interest. Email exchanges finalized the hassle-free agreement. They handled permits, installation, power company coordination, and inspections, a big help for my busy schedule. ELFI Homes, led by Uday, provides a great product, exceptional service, and financing. Thumbs up!",
      "name": " eltonalvarez",
      "stars": 5,
      "designation": "Customer"
    },{
      "index": 5,
      "heading": "Good value, got job done",
      "reviewshort": "Choosing EL-FI Homes for my solar panel installation needs was the best decision I made. EL-FI was",
      "reviewfulltext": "Choosing EL-FI Homes for my solar panel installation needs was the best decision I made. EL-FI was flexible when I requested them to use the panels that I preferred. Despite the NEM craze, they completed the project on time. Their team is always there to clarify questions and I am satisfied with the transparency displayed by EL-FI Homes. The workmanship was outstanding and their concern for my property was displayed throughout the project. EL-FI homes team inspected my attic before and after displaying utmost care for the property. EL-FI Homes' expertise and commitment to customer satisfaction are truly commendable!",
      "name": " badri.rama",
      "stars": 5,
      "designation": "Customer"
    },
    {
      "index": 6,
      "heading": "Orange county CA solar installation",
      "reviewshort": "Let me share my fantastic experience with EL-FI Homes' solar installation. Their knowledgeable sales",
      "reviewfulltext": "Let me share my fantastic experience with EL-FI Homes' solar installation. Their knowledgeable sales rep eased my concerns with detailed explanations about solar tech. I aimed for quality and chose EL-FI as they offered to match other contractors’ pricing. Their top panel warranties and patient guidance through rebates impressed me. Within a month, the solar panels transformed my bills and home appliances with green energy. Their exceptional customer service promptly addressed my queries. EL-FI Homes has my full endorsement; they're the go-to for solar!",
      "name": "andykoretoff",
      "stars": 5,
      "designation": "Customer"
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
      <div className='w-full z-50 relative h-[50px] bg-white'></div>
      <div className='w-full  z-50 bg-white relative h-[30px] md:h-[100px] mt-[-15px] md:mt-[-50px] rounded-[100%]'></div>
      <div className='w-[95%] mx-auto carousel mt-[-50px] relative grid grid-flow-col gap-x-[1rem] overflow-y-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth'>
  {renderSliderCards()}
</div>
      <div className='w-full  z-50 bg-white relative h-[30px] md:h-[100px] mt-[-15px] md:mt-[-50px] rounded-[100%]'></div>
      <div className='w-full z-50 relative h-[50px] bg-white'></div>
      <div className='mt-[-30px] md:mt-[-100px] z-[60] relative flex justify-center'>
        <button id='scroll-left-button' className='scroll-button '><AiOutlineArrowLeft className="text-2xl font-bold"/></button>
        <button id='scroll-right-button' className='scroll-button'><AiOutlineArrowRight className="text-2xl font-bold"/></button>
      </div>
    </div>
  );
};

export default index;
