'use client'
import Submitted from '../Components/filecase/submitted'
import Form from '../Components/filecase/form'
import { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { FaMobileScreen, FaUser } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import Image from 'next/image';
import { useEffect } from "react";
import { Client, Databases} from 'appwrite';
export const client = new Client();
import Cookies from 'js-cookie';

const Filecase = () => {
    const id = Cookies.get('id');
    const [userdata,setuserdata]=useState();
    const [displayData, setDisplay] = useState(false);
    useEffect(() => {
        if (!id) {
        window.location.href = '/litigant/signin'
        }
    },);
    const [pageState, setPageState]  = useState(1);
    useEffect(() => {
        if(!id){
            window.location.href='/litigant/signin'
        }
    },);
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('legalsarthi');

    const databases = new Databases(client);

    useEffect(() => {
        const promise = databases.getDocument(
            'legalsarthi',
            'litigant',
            id
        );
    
        promise.then(function (response) {
            setuserdata(response);
            setDisplay(true);
        }, function (error) {
            console.log(error);
        });
    }, []);

    const display = () => {
        return <div className="flex w-[90%] justify-between mx-auto mt-6">
        <div className='w-[20%]'>
            <div className='p-4 border-1 border-gray-300 shadow-md rounded-lg'>
                <img
                        src={`https://cloud.appwrite.io/v1/storage/buckets/profileimage/files/${userdata.image}/view?project=legalsarthi&mode=admin`}
                        // height={250}
                        // width={250}
                        className="object-contain w-full shadow-md rounded-md" alt=""

                    />
                    <h1 className="mt-4 text-center ">{userdata.name}</h1>
                    <div className='w-[80%] bg-gray-200 mx-auto h-[1px] my-2'></div>
                    <CiMail  className='mx-auto text-2xl'/>
                    <h1 className="mt-4 text-center ">{userdata.email}</h1>
                    <div className="flex justify-center mt-3 ">
                        <FaMobileScreen  className='mt-1'/>
                        <h1 className="">{userdata.mobile}</h1>
                    </div>
            </div>
        </div>
        <div className='w-[78%]'>
            <Form setPageState={setPageState}/>
            {/* {pageState == 1 && <Form setPageState={setPageState}/>}
            {pageState == 2 && <Submitted />} */}
        </div>
   </div>
    }
    

    return (
        <div>
           {displayData ? display() : "Loading"}
        </div>
    )
}

export default Filecase