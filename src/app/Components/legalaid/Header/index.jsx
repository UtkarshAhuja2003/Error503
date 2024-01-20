"use client";
import Image from 'next/image'
import Link from 'next/link';

function index(){

  return (
    <div>
        <div className='md:flex flex-row-reverse w-[90%] justify-between mx-auto mt-12 md:mt-24'>
            <div className='w-[100%] mx-auto md:w-[55%]'><Image className="w-[80%] mx-auto" src="/images/aid.jpg" alt="JoinUs Hero" width={1000} height={1000}></Image></div>
            <div className='w-[90%] mx-auto md:w-[40%]'>
                <div className='text-3xl md:text-5xl font-bold mt-6 md:mt-24 text-center md:text-left'>Join Our Team</div>
                <div className='text-3xl md:text-5xl font-bold text-[#ffb500] text-center md:text-left mt-[20px]'>EL-FI Homes</div>
                <div className=' text-[18px] mt-[20px] text-center md:text-left'>Work At The Most Dynamic And Successful Company</div>
                <div className='md:w-[100%] mx-auto text-center md:text-left'>
                    <Link href="/legalAid#legalAidBody"><button className='bg-[#ffb500] hover:bg-white hover:text-[#ffb500] border border-1 border-[#ffb500] ease-in-out duration-300 text-white rounded-md w-[144px] h-[40px] mt-6 mx-auto'>Get Aid</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}





export default index