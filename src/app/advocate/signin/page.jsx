'use client'
import { useState } from 'react';
import { Client, Databases, Query } from 'appwrite';
import Cookie from 'js-cookie';
export const client = new Client();
import Image from 'next/image';

const AdvocateLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('legalsarthi');

    const databases = new Databases(client);

    const handleSubmit = (e) => {
        e.preventDefault();
        let promise = databases.listDocuments(
            "legalsarthi",
            "advocate",
            [
                Query.equal('email', email)
            ]
        );
        
        promise.then(function (response) {
            if(response.documents[0]?.password === password){
                Cookie.set('id', response.documents[0].$id);
                Cookie.set('user', 'advocate');
                window.location.href = '/advocate/profile'; 
            }
            else{
                alert('Incorrect Password');
            }
        }, function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <p className='py-4 text-4xl text-center font-bold text-[#04434E]'>Advocate Login</p>
            <div className='flex md:w-[80%] mx-auto my-6 space-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>
                <div className='md:w-[60%] w-[90%]'>
                <div className='py-6 mx-12'>
                <h1 className='text-center'>Logo</h1>
                <div className="mt-24">
                    <h6>E-mail</h6>
                    <input
                        type="text placeholder-gray-600 "
                        placeholder="Enter E-mail"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        className="border rounded border-gray-400 py-1 px-2 w-full"
                    />
                </div>
                <div className="mt-5">
                    <h6>Password</h6>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        autoComplete="off"
                        className="border rounded border-gray-400 py-1 px-2 w-full"
                    />
                </div>
                <div className="flex">
                    <button onClick={(e)=>handleSubmit(e)} disabled={false} className="w-full px-6 py-2 mt-12 text-white hover:shadow-md ease-in-out duration-300 bg-[#04434E] rounded-lg ">
                        Log In
                    </button>
                </div>
            </div>
                </div>
                <Image src="/register.svg" className='hidden md:block h-full' width={500} height={1200} />
            </div>
        </div>
    )
}

export default AdvocateLogin