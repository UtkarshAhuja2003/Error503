'use client'
import { useState } from 'react';
import { Client, Databases, ID,Storage } from 'appwrite';
import Cookie from 'js-cookie';
export const client = new Client();
import Image from 'next/image';
import Details1 from './Details1';
import Details2 from './Details2';

const AdvocateSignup = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState();
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [courtType, setCourtType] = useState('districtCourt');
    const [image, setImage] = useState('');
    const [district, setDistrict] = useState('');
    const [courtState, setCourtState] = useState('');
    const [highCourt, setHighCourt] = useState('');
    const [bench, setBench] = useState('');

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('legalsarthi');

    const databases = new Databases(client);
    const storage = new Storage(client);

    const handleSubmit = (e) => {
        e.preventDefault();
        const promise = databases.createDocument(
            'legalsarthi',
            'litigant',
            ID.unique(),
            {
                "name": name,
                "email": email,
                "mobile": mobile,
                "dob": dob,
                "password": password,
                "gender": gender,
                "state": state,
                "courttype": courtType,
                "image": image,
                "district": district,
                "courtstate": courtState,
                "highcourt": highCourt,
                "bench": bench
            }
        );

        promise.then(function (response) {
            Cookie.set('id', response.$id);
        }, function (error) {
            console.log(error);
        });
        Cookie.set('user', 'litigant');
        
        setPage(3);
    }

    return (
        <div>
            <p className='py-4 text-4xl text-center font-bold text-[#04434E]'>Litigant Registration</p>
            <div className='flex md:w-[80%] mx-auto my-6 space-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>
                <div className='md:w-[60%] w-[90%]'>
                    {page === 1 && <Details1 storage={storage} ID={ID} page={page} setPage={setPage} name={name} email={email} mobile={mobile} dob={dob} password={password} image={image} setImage={setImage} setName={setName} setEmail={setEmail} setMobile={setMobile} setDob={setDob} setPassword={setPassword} />}
                    {page === 2 && <Details2 gender={gender}
                        setGender={setGender}
                        state={state}
                        setState={setState}
                        courtType={courtType}
                        setCourtType={setCourtType}
                        district={district}
                        setDistrict={setDistrict}
                        courtState={courtState}
                        setCourtState={setCourtState}
                        highCourt={highCourt}
                        setHighCourt={setHighCourt}
                        bench={bench}
                        setBench={setBench}
                        handleSubmit={handleSubmit}
                    />}
                    {
                        page == 3 && <div className="w-full font-defaultFont">
                            <div className="mt-24"></div>
                            <div className="mb-12 w-[70%] mx-auto pt-8 pb-12 rounded-lg shadow-xl">
                                {/* <img className="mx-auto w-[90%] md:w-[43%]" src={img1} alt="" /> */}
                                <img className=" w-32 md:w-56 mx-auto" src="/img2.png" alt="" />
                                <h1 className="mt-3 text-center font-bold">You are succesfully registered</h1>
                                {/* <h2 className="mt-2 text-center">We will send you an email upon verification soon.</h2> */}
                            </div>
                        </div>

                    }
                </div>
                <Image src="/register.svg" alt='Registration' className='hidden md:block h-full' width={500} height={1200} />
            </div>
        </div>
    )
}

export default AdvocateSignup