'use client'
import Link from 'next/link';
import { useState } from 'react';

const Details2 = ({ gender,setGender,state,setState,courtType,setCourtType,district,setDistrict,courtState,setCourtState,highCourt,setHighCourt,bench,setBench,handleSubmit }) => {

    const handleRadioButtonChange = (event) => {
        setCourtType(event.target.value);
    };
    return (
        <div>
            <div className='py-6 mx-12'>
                <div className="mt-2">
                    <h6>Gender</h6>
                    <label className='ml-2'>
                        <input
                            type="radio"
                            value="male"
                            checked={gender === 'male'}
                            onClick={() => { setGender("male") }}
                        />
                        Male
                    </label>

                    <label className='ml-4'>
                        <input
                            type="radio"
                            value="female"
                            checked={gender === 'female'}
                            onClick={() => { setGender("female") }}
                        />
                        Female
                    </label>
                    <label className='ml-4'>
                        <input
                            type="radio"
                            value="other"
                            checked={gender === 'other'}
                            onClick={() => { setGender("other") }}
                        />
                        Other
                    </label>
                </div>
                <div className="mt-2">
                    <h6>State</h6>
                    <input
                        type="text"
                        placeholder="Enter state"
                          value={state}
                        name="state"
                        autoComplete="off"
                          onChange={(e) => setState(e.target.value)}
                        className="border rounded border-gray-400 py-1 px-2 w-full"
                    />
                </div>
                <h2 className='mt-4 text-center text-2xl'>Place of Litigation</h2>
                <div className='flex justify-around'>
                    <label className='ml-2'>
                        <input
                            type="radio"
                            value="districtCourt"
                            checked={courtType === 'districtCourt'}
                            onChange={handleRadioButtonChange}
                        />
                        District Court
                    </label>

                    <label className='ml-2'>
                        <input
                            type="radio"
                            value="highCourt"
                            checked={courtType === 'highCourt'}
                            onChange={handleRadioButtonChange}
                        />
                        High Court
                    </label>
                </div>
                <div>
                    {courtType === 'districtCourt' && <div>
                        <div className="mt-2">
                            <h6>District</h6>
                            <input
                                type="text"
                                placeholder="Enter District of Court"
                                  value={district}
                                name="courtDistrict"
                                autoComplete="off"
                                  onChange={(e) => setDistrict(e.target.value)}
                                className="border rounded border-gray-400 py-1 px-2 w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <h6>State</h6>
                            <input
                                type="text"
                                placeholder="Enter state of court"
                                  value={courtState}
                                name="courtState"
                                autoComplete="off"
                                  onChange={(e) => setCourtState(e.target.value)}
                                className="border rounded border-gray-400 py-1 px-2 w-full"
                            />
                        </div>
                    </div>}
                    {courtType === 'highCourt' && <div>
                        <div className="mt-2">
                            <h6>High Court</h6>
                            <input
                                type="text"
                                placeholder="Enter High"
                                  value={highCourt}
                                name="highCourt"
                                autoComplete="off"
                                  onChange={(e) => setHighCourt(e.target.value)}
                                className="border rounded border-gray-400 py-1 px-2 w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <h6>Bench</h6>
                            <input
                                type="text"
                                placeholder="Enter Bench"
                                  value={bench}
                                name="bench"
                                autoComplete="off"
                                  onChange={(e) => setBench(e.target.value)}
                                className="border rounded border-gray-400 py-1 px-2 w-full"
                            />
                        </div>
                    </div>}
                </div>
                <div className="flex">
                    <button onClick={(e)=>{handleSubmit(e)}} disabled={false} className="w-full px-6 py-2 mt-4 text-white hover:shadow-md ease-in-out duration-300 bg-[#04434E] rounded-lg ">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Details2