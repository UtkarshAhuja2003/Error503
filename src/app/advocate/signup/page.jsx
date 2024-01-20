'use client'
import { useState } from 'react';
import Image from 'next/image';
import Details1 from './Details1';
import Details2 from './Details2';

const AdvocateSignup = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [barRegistrationNumber, setBarRegistrationNumber] = useState('');
    const [courtType, setCourtType] = useState('districtCourt');
    const [image, setImage] = useState('');
    const [district, setDistrict] = useState('');
    const [courtState, setCourtState] = useState('');
    const [highCourt, setHighCourt] = useState('');
    const [bench, setBench] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, mobile, dob, password, gender, state, barRegistrationNumber, courtType, image, district, courtState, highCourt, bench);
    }

    return (
        <div>
            <p className='py-4 text-4xl text-center font-bold text-[#04434E]'>Advocate Registration</p>
            <div className='flex md:w-[80%] mx-auto my-6 space-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>
                <div className='md:w-[60%] w-[90%]'>
                    {page === 1 && <Details1 page={page} setPage={setPage} name={name} email={email} mobile={mobile} dob={dob} password={password} image={image} setImage={setImage} setName={setName} setEmail={setEmail} setMobile={setMobile} setDob={setDob} setPassword={setPassword} />}
                    {page === 2 && <Details2 gender={gender}
                        setGender={setGender}
                        state={state}
                        setState={setState}
                        barRegistrationNumber={barRegistrationNumber}
                        setBarRegistrationNumber={setBarRegistrationNumber}
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
                </div>
                <Image src="/register.svg" alt='Registration'  className='hidden md:block h-full' width={500} height={1200} />
            </div>
        </div>
    )
}

export default AdvocateSignup