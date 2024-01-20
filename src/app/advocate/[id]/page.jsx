'use client';
import { BiShoppingBag } from 'react-icons/bi'
import { Client, Databases} from 'appwrite';
export const client = new Client();
import { useEffect,useState } from 'react';
import { CgProfile } from 'react-icons/cg'

const Index = ({ params }) => {
    const id=params.id;
    const [data,setdata]=useState();
    const [displayData, setDisplay] = useState(false);
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('legalsarthi');

    const databases = new Databases(client);

    useEffect(() => {
        const promise = databases.getDocument(
            'legalsarthi',
            'advocate',
            id
        );
    
        promise.then(function (response) {
            setdata(response);
            setDisplay(true);
        }, function (error) {
            console.log(error);
        });
    }, []);

    function display() {
        return <div className='bg-white'>
            <div className='mx-[10%] mt-[5rem] font-defaultFont'>
                <div className='bg-[#f5f7fb] w-full px-[10%] py-8'>
                    <div className='flex'>
                                <img
                                    src={`https://cloud.appwrite.io/v1/storage/buckets/profileimage/files/${data.image}/view?project=legalsarthi&mode=admin`}
                                    // height={150}
                                    // width={150}
                                    className="object-contain h-60 w-40" alt=""
                                />
                        <div className='px-[3%] w-full ml-[14%]'>
                            <h1 className='mt-16 mb-2 text-2xl font-bold'>{data?.name}</h1>
                            <div className='flex justify-between mt-4'>
                                <div className='text-md'>
                                    <p>Bar Registration Number: {data.barregistrationnumber}</p>
                                    <p>Email: {data.email}</p>
                                </div>
                                <div className='text-md pl-6 border-l-[3px] border-[#DBE2EF]'>
                                    <p>Contact: {data.mobile}</p>
                                    <p>Gender: {data.gender}</p>
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
                                <h1 className="ml-4 mt-[4px] text-xl">Ordinary Place of Practice</h1>
                            </div>
                            <div className="text-[17px] mt-6">
                                <h2 className="font-bold text-xl">{data.courttype}</h2>
                                {
                                    data.courttype === 'High Court'?
                                    <div>
                                        <p className="mt-2">{data.highcourt}</p>
                                        <p className="mt-2">Bench: {data.bench}</p>
                                    </div>:
                                    <div>
                                    <p className="mt-2">State: {data.courtstate}</p>
                                    <p className="mt-2">District: {data.district}</p>
                                </div>
                                }
                            </div>
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
                            </div>
                            <div className='mt-6'>
                                <h1>Gender: {data.gender}</h1>
                                <h1>State: {data.state}</h1>
                                <h1>Mobile: {data.mobile}</h1>
                                <h1>DOB: {data.dob}</h1>
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
            {displayData ? display() : "Loading"}
        </div>
    )
}

export default Index