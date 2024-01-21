'use client'
import Link from "next/link";
import { Client, Databases} from 'appwrite';
export const client = new Client();
import { useEffect,useState } from 'react';

const Organisations = () => {
  const [advocate, setAdvocate] = useState([]);
  const [displayData, setDisplay] = useState(false);
  client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('legalsarthi');

    const databases = new Databases(client);

    useEffect(() => {
        const promise = databases.listDocuments(
            'legalsarthi',
            'advocate'
        );
    
        promise.then(function (response) {
          console.log(response.documents);
            setAdvocate(response.documents);
            setDisplay(true);
        }, function (error) {
            console.log(error);
        });
    }, []);

    const display = () => {
      return advocate.map((data) => (

        <div key={data.$id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <div
            className="c-card block bg-[#FFFFFF] shadow-md ease-in-out duration-300 hover:shadow-2xl   overflow-hidden"
          >key={data.$id}
            <div className="">
              <img
                className=" mx-auto object-cover w-40 h-40 mb-3 mt-7 rounded-full shadow-lg"
                src={`https://cloud.appwrite.io/v1/storage/buckets/profileimage/files/${data.image}/view?project=legalsarthi&mode=admin`}
                alt=""
              />
            </div>
            <div className=" text-center ">
              <h1 className="mt-2  text-xl  font-Merriweather font-bold">
                {data.name}
              </h1>
              <h4 className="text-semibold text-lg font-Merriweather rounded-full text-[#3F72AF]">
                {data.email}{" "}
              </h4>
              <div className="  items-center">
                <p className=" text-gray-500 text-md font-Merriweather ">
                  {data.mobile}
                </p>
                <p className=" text-gray-500 text-md font-Merriweather ">
                  {data.state}
                </p>

                <div className="   mt-3 bg-[#FFFFFF] border-t-[2px] border-[#DBE2EF]   hover:bg-[#04434e] text-[#3F72AF] hover:border-[#3F72AF] hover:text-white ease-in-out duration-300">
                  <Link href={`/advocate/${data.$id}`}>
                    <button className="  text-lg  font-Merriweather py-2 px-2  font-Merriweather ">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

  return (
    <div>
      <div className="flex flex-wrap bg-[#f1f3f9] shadow-inner w-[95%] mx-auto mt-12 shadow-[rgba(0, 0, 0, 0.08)]">
      {displayData ? display() : "Loading"}
      </div>
    </div>
  );
};

export default Organisations;