'use client'
import Submitted from '../Components/filecase/submitted'
import Form from '../Components/filecase/form'
import { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { FaMobileScreen, FaUser } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import Image from 'next/image';

const filecase = () => {
    const [pageState, setPageState]  = useState(1);
    

    return (
        <div>
           <div className="flex w-[90%] justify-between mx-auto mt-6">
                <div className='w-[20%]'>
                    <div className='p-4 border-1 border-gray-300 shadow-md rounded-lg'>
                        <Image
                                src='/images/avneet.jpg'
                                height={250}
                                width={250}
                                className="object-contain w-full shadow-md rounded-md" alt=""

                            />
                            <h1 className="mt-4 text-center ">Utkarsh</h1>
                            <h1 className="text-center">(9832982384924)</h1>
                            <div className='w-[80%] bg-gray-200 mx-auto h-[1px] my-2'></div>
                            <CiMail  className='mx-auto text-2xl'/>
                            <h1 className="mt-4 text-center ">Utkarsh.mail.com</h1>
                            <div className="flex justify-center mt-3 ">
                                <FaMobileScreen  className='mt-1'/>
                                <h1 className="">32613131273</h1>
                            </div>
                    </div>
                </div>
                <div className='w-[78%]'>
                    {pageState == 1 && <Form setPageState={setPageState}/>}
                    {pageState == 2 && <Submitted />}
                </div>
           </div>
        </div>
    )
}

export default filecase