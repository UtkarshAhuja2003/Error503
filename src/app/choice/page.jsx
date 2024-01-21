"use client";
import "../Components/filecase/form/fileUpload.css";
import { MdDeleteOutline } from "react-icons/md";
import Ocr from '../Components/filecase/Ocr'
import { useEffect } from "react";
import Cookies from 'js-cookie';
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  const id=Cookies.get('id');
  useEffect(() => {
    if(!id){
        window.location.href='/litigant/signin'
    }
},);
  return (
    <div>
      <div className="mt-10 flex justify-center">
      <div className="w-[80%] mx-auto mt-6 shadow-lg border-[1px] border-gray-100 rounded-xl p-8">
        <h1 className="text-center font-semibold text-3xl mb-6">
          File Your Case
        </h1>
        <div className="ml-6 mt-6">
          <div className="flex justify-between w-[80%] mx-auto my-12">
            <div className="w-[160px]">
              <Image src="/images/download.png" width={1000} height={1000}></Image>
              <p className="mb-2 text-center">
                Download the template.
              </p>
              
            </div>
            <div className="w-[200px]">
              <Image src="/images/fill_form.png" width={1000} height={1000}></Image>
              <p className="mb-2 text-center mt-4">
              Fill out the form.
              </p>
              
            </div>
            <div className="w-[160px]">
              <Image src="/images/upload.png" width={1000} height={1000}></Image>
              <p className="mb-2 text-center">
                Upload the filled form with evidence.
              </p>
              
            </div>
          </div>
        </div>
        <Ocr/>
        <div className="flex justify-between mx-auto mt-6">
            <div className="w-[45%] h-[2px] bg-gray-300 mt-6"></div>
            <p className="bg-[#1dadb7] text-white rounded-full p-3">OR</p>
            <div className="w-[45%] h-[2px] bg-gray-300 mt-6"></div>
        </div>
        <h1 className="text-center font-[500] mt-6 text-2xl mb-6">File the case digitally</h1>
        <div className="flex">
            <div className="w-[50%]">
                <Image src="/images/choice.png" className="w-[60%] mx-auto" width={10000} height={10000}></Image>
            </div>
            <div className="w-1/2">
                <button className=" px-4 py-2 bg-[#3ac7e7] text-center rounded-md hover:bg-[#1d7adb] text-white ease-in-out duration-300 mt-32 ml-[35%]">
                <Link href="/filecase">
                        File Case
                    </Link>
            </button>
            </div>

        </div>

      </div>
    </div>
    </div>
  );
};

export default Page;
