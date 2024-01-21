import Link from 'next/link'
import React from 'react'
import { MdFamilyRestroom } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";


const index = () => {
  const cards = [
    {
      heading: "Employment",
      text: "Employment Discrimination, Termination, Wage Claims, Criminal Records, More Topics",
      link: "",
      icon: MdFamilyRestroom,
    },
    {
      heading: "Renters & Homeowners",
      text: "Your rights as a renter, homeowner, or someone looking for a home",
      link: "",
      icon: PiStudentBold,
    },
    {
      heading: "Your rights as a renter",
      text: "Your rights as a student, employee, ex-employee, or person looking for a job in Georgia",
      link: "",
      icon: IoMdHome,
    },
    {
      heading: "Money & Debt",
      text: "Your rights when you have a legal issue involving money or debt",
      link: "",
      icon: FaRegMoneyBillAlt,
    },
    {
      heading: "Health",
      text: "Your right to apply for public benefits and appeal benefit decisions",
      link: "",
      icon: MdHealthAndSafety,
    },
  ]
  return (
    <div className='flex text-[#04434E] mt-12'>
      <div>
        <div className='bg-[#A8C7E7] w-[30vw] m-[1rem] p-[1rem] rounded-lg mb-[0.7rem]'>
          <div className='text-[#04434E] font-[800] text-xl'>Most Popular Topics</div>
          <Link href="#">1. How do I evict a guest, roommate or family member?</Link>
          <br />
          <Link href="#">2. What is a Power of Attorney?</Link>
          <br />
          <Link href="#">3. FAQ: Guardianship and Conservatorship</Link>
          <br />

          <div className='text-[#04434E] font-[800] text-xl mb-[0.7rem] mt-[0.7rem]'>Quick Links</div>
          <Link href="#">1. FAQ: What if I&apos;m Picked up by Immigration and Customs Enforcement (ICE) in DC?</Link>
          <br />
          <Link href="#">2. FAQ: Late Fee Fairness Amendment Act Of 2016</Link>
          <br />
        </div>
      </div>
      <div className=' w-[70vw] mx-[1rem] px-[1rem] py-[0.6rem] rounded-lg mb-[0.7rem]'>

        <div className='flex flex-wrap justify-between'>
          {
            cards.map((card, i) => {
              return <div key={i} className='w-[49%] rounded-lg px-4 py-4 my-2 bg-[#A8C7E7] text-[#04434E] hover:bg-[#04434E] duration-300 ease-in-out hover:bg-[#A8C7E7] hover:text-white'>
                <div className='flex'>
                  {card.icon && React.createElement(card.icon, { className: 'text-3xl mt-1' })}
                  <div className=' font-[800] text-xl px-2 text-2xl py-2'>{card.heading}</div>
                </div>
                <Link href={card.link}><p className='ml-2'>{card.text}</p></Link>
              </div>
            })
          }

        </div>


      </div>
    </div>
  )
}

export default index
