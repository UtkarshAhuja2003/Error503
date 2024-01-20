'use client'
import { CiMail } from "react-icons/ci";
import { FaMobileScreen, FaUser } from "react-icons/fa6";
import Image from 'next/image';
import Card from '../Components/card'
import { FaBriefcase } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import Link from "next/link";

const index = () => {
  const caseData = [
    {
        "id": 1,
        "litigantName": "John Doe",
        "dateOfCase": "2019-01-01",
        "litigantContact": "1234567890",
        "caseId": "ABC123",
        "caseType": "Civil",
        "caseStatus": "Pending",
        "caseDescription": "Dispute over property rights",
        "caseCourt": "City Court",
        "state": "California",
        "district": "Los Angeles",
        "bench": "A",
        "opposingLitigant": "Jane Doe"
    },
    {
        "id": 2,
        "litigantName": "Jane Smith",
        "dateOfCase": "2020-05-15",
        "litigantContact": "9876543210",
        "caseId": "XYZ456",
        "caseType": "Criminal",
        "caseStatus": "Settled",
        "caseDescription": "Assault case",
        "caseCourt": "County Court",
        "state": "New York",
        "district": "Manhattan",
        "bench": "B",
        "opposingLitigant": "Johnathan Johnson"
    },
    {
        "id": 3,
        "litigantName": "Alice Johnson",
        "dateOfCase": "2018-11-20",
        "litigantContact": "5552223333",
        "caseId": "PQR789",
        "caseType": "Civil",
        "caseStatus": "Settled",
        "caseDescription": "Property dispute with Bob Johnson",
        "caseCourt": "City Court",
        "state": "Texas",
        "district": "Houston",
        "bench": "C",
        "opposingLitigant": "Bob Johnson"
    },
]
  return (
    <div>
           <div className="flex w-[90%] justify-between mx-auto mt-12 pb-12">
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
                          key={data._id}
                          _id={data._id}
                          litigantName={data.litigantName}
                          dateOfCase={data.dateOfCase}
                          caseId={data.caseId}
                          caseType={data.caseType}
                          caseStatus={data.caseStatus}
                          opposingLitigant={data.opposingLitigant}
                        />
                      ))
                    }
          </div>
                </div>
                </div>
           </div>
        </div>
  )
}

export default index
