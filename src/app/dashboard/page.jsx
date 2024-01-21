'use client'
import { CiMail } from "react-icons/ci";
import { FaMobileScreen, FaUser } from "react-icons/fa6";
import Image from 'next/image';
import { Client, Databases,Query} from 'appwrite';
export const client = new Client();
import { useEffect,useState } from 'react';
import Cookies from 'js-cookie';
import Card from '../Components/card'
import { FaBriefcase } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import Link from "next/link";

const index = () => {
  const id=Cookies.get('id');
    const [userdata,setuserdata]=useState();
    const [caseData,setcases]=useState();
    const [displayData, setDisplay] = useState(false);
    const [displaycases, setDisplaycases] = useState(false);
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
    useEffect(() => {
      const promise = databases.listDocuments(
          'legalsarthi',
          'cases',
          [
            Query.equal('litigantid', id)
        ]
      );
  
      promise.then(function (response) {
          setcases(response.documents);
          setDisplaycases(true);
      }, function (error) {
          console.log(error);
      });
  }, []);

    const display = () => {
      return <div className="flex w-[90%] justify-between mx-auto mt-12 pb-12">
      <div className='w-[20%]'>
          <div className='p-4 border-1 border-gray-300 shadow-md rounded-lg'>
              <img
                      src={`https://cloud.appwrite.io/v1/storage/buckets/profileimage/files/${userdata?.image}/view?project=legalsarthi&mode=admin`}
                      // height={250}
                      // width={250}
                      className="object-contain w-full shadow-md rounded-md" alt=""

                  />
                  <h1 className="mt-4 text-center ">{userdata?.name}</h1>
                  <div className='w-[80%] bg-gray-200 mx-auto h-[1px] my-2'></div>
                  <CiMail  className='mx-auto text-2xl'/>
                  <h1 className="mt-4 text-center ">{userdata?.email}</h1>
                  <div className="flex justify-center mt-3 ">
                      <FaMobileScreen  className='mt-1'/>
                      <h1 className="">{userdata?.mobile}</h1>
                  </div>
          </div>
      </div>
      <div className=" w-[78%]">
        <div className="flex justify-between w-[75%] mx-auto">
            <Link href="/choice" className="rounded-3xl w-[48%] bg-[#1d7adb] duration-300 ease-in-out hover:bg-[#04434e] text-white px-8 py-4 text-center shadow-lg">
              <FaBriefcase className="text-6xl text-white text-center mx-auto"/>
              <h1 className="text-2xl mt-2">File a Case</h1>
            </Link>
            <Link href="/hireadvocate" className="rounded-3xl w-[48%] bg-[#04434e] duration-300 ease-in-out hover:bg-[#1d7adb] text-white px-8 py-4 text-center shadow-lg">
            <GiInjustice className="text-6xl text-white text-center mx-auto"/>
            <h1 className="text-2xl mt-2">Hire a Advocate</h1>
            </Link>
        </div>
      <div className="shadow-lg w-full mt-6">
      <h1 className="text-3xl font-[500] text-center">Existing Cases</h1>
      <div className='w-[90%] md:w-[73%] p-0 md:p-4 mx-auto'>
        {
            caseData.map((data) => (
              <Card
                litigantName={data.litigantname}
                dateOfCase={data.dateofcase}
                caseId={data.caseid}
                caseType={data.casetype}
                caseStatus={data.casestatus}
                opposingLitigant={data.opposinglitigant}
              />
            ))
          }
</div>
      </div>
      </div>
 </div>
    }

  return (
    <div>
            {(displayData &&displaycases) ? display() : "Loading"}
        </div>
  )
}

export default index
