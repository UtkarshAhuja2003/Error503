'use client';
import { BiShoppingBag } from 'react-icons/bi'
import { SlGraduation } from 'react-icons/sl'
import { AiOutlineTrophy } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import Image from 'next/image';

const Index = () => {
    function display() {
        return <div className='bg-white'>
            <div className='mx-[10%] mt-32 font-defaultFont'>
                <div className='bg-[#f5f7fb] w-full px-[10%] py-8'>
                    <div className='flex'>
                        <Image
                            src='/images/avneet.jpg'
                            height={150}
                            width={150}
                            className="object-contain h-60 w-40" alt=""

                        />
                        <div className='px-[3%] w-full ml-[14%]'>
                            <h1 className='mt-16 mb-2 text-2xl font-bold'>Avneet Singh</h1>
                            <div className='flex justify-between mt-4'>
                                <div className='text-md'>
                                    <p>Role: ABC</p>
                                    <p>Company: QWE</p>
                                </div>
                                <div className='text-md pl-6 border-l-[3px] border-[#DBE2EF]'>
                                    <p>Course: B.Tech</p>
                                    <p>Branch: tyi</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[70%] px-[4%] py-12'>


                        <div>
                            <div className="flex text-3xl ">
                                <BiShoppingBag />
                                <h1 className="ml-4 mt-[4px] text-xl">Work Experience</h1>
                            </div>
                            <div className="text-[14px] mt-6">
                                <h2 className="font-bold text-lg">asdsf</h2>
                                <p className="mt-2">adsffe</p>
                                <p className="mt-2"></p>
                                <p className="mt-2">fnweia</p>
                            </div>
                        </div>
                        <div className='w-full h-[2px] rounded-xl my-8 bg-black'></div>
                        <div className='flex text-3xl '>
                            <SlGraduation />
                            <h1 className='ml-4 mt-[4px] text-xl'>Educational Details</h1>
                        </div>
                        <div className='text-[14px] mt-6'>
                            <h2 className='font-bold text-lg'>Maharaja Surajmal Institute of Technology</h2>
                            <p className='mt-2'>BTECH</p>
                        </div>


                        <div>
                            <div className='w-[40%] h-[2px] rounded-xl my-8 bg-[#DBE2EF]'></div>
                            <div className='text-[14px] mt-6'>
                                <h2 className='font-bold text-lg'>profile.universityName</h2>
                                <p className='mt-2'>profile.degreeName</p>
                            </div></div>

                        <div className='w-full h-[2px] rounded-xl my-8 bg-black'></div>
                        <div className='flex text-3xl '>
                            <AiOutlineTrophy />
                            <h1 className='ml-4 mt-[4px] text-xl'>Achievements</h1>
                        </div>
                        <p className="mt-2 text-[14px]">
                            profile.achievement
                        </p>
                        <div className='text-sm mt-6'>
                            <p className='mt-2'></p>
                        </div>

                    </div>
                    <div className='w-[30%] my-12'>
                        <div className='mx-2 p-8 bg-[#F9F7F7]'>
                            <div className='flex'>
                                <CgProfile className='text-2xl' />
                                <h1 className='ml-4 '>Personal Details</h1>
                            </div>
                            <div className='mt-6 flex text-md w-full'>
                                <div>
                                    <h3 className='w-[100px]'>About me:</h3>
                                </div>
                                <div>
                                    <h3>I am profile.name currently working as profile.designation at profile.company.</h3>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <h1>DOB: profile.dob</h1>
                            </div>
                            <div className='mt-6'>
                            </div>
                            <div className='mt-6'>
                                <div className='w-[50%] flex mx-auto justify-between text-3xl'>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            {display()}
        </div>
    )
}

export default Index