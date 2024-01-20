'use client'
import { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import './fileUpload.css'

const filecase = ({setPageState}) => {
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [casetype, setCaseType]  = useState('');
    const [contact, setContact]  = useState('');
    const [caseagainst, setCaseAgainst]  = useState('');
    const [desc, setDesc]  = useState('');
    const [files, setFiles]  = useState([]);
    const [state, setState]  = useState();
    const [court, setCourt]  = useState();


    return (
        <div>
            <div className='p-4 border-1 border-gray-300 shadow-md rounded-lg'> 
                            <div className='border-2 border-gra y-300 '>
                                <div className='mx-[ 1%]'>
                                    <div className=''>
                                        <div className='bg-[#1d7adb] text-center py-2 text-white'>Case Details</div>
                                        <div className='px-12 flex justify-between'>
                                        <div className='w-[50%]'>
                                            <div className="mt-6 flex justify-between">
                                                <h6 className='mt-1'>Litigant Name</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Litigant Name"
                                                    value={name}
                                                    name="name"
                                                    autoComplete="off"
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="border rounded border-gray-400 py-1 px-2 w-[300px] ml-4"
                                                />
                                            </div>
                                            <div className="mt-6 flex  justify-between">
                                                <h6 className='mt-1'>Contact No.</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Contact No"
                                                    value={contact}
                                                    name="contact"
                                                    autoComplete="off"
                                                    onChange={(e) => setContact(e.target.value)}
                                                    className="border rounded border-gray-400 py-1 px-2 w-[300px] ml-4"
                                                />
                                            </div>
                                            <div className="mt-6 flex justify-between">
                                                    <h6 className='mt-1'>Date</h6>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Litigant Name"
                                                        value={date}
                                                        name="date"
                                                        autoComplete="off"
                                                        onChange={(e) => setDate(e.target.value)}
                                                        className="border rounded border-gray-400 py-1 px-2 w-[300px] ml-4"
                                                    />
                                                </div>
                                                <div className='flex justify-between mt-3'>
                                        <div className="mt-3 flex">
                                            <h6>Case Type</h6>
                                            <label className='ml-8'>
                                                <input
                                                    type="radio"
                                                    value="civil"
                                                    checked={gender === 'civil'}
                                                    onClick={() => { setCaseType("civil") }}
                                                />
                                                Civil
                                            </label>

                                            <label className='ml-8'>
                                                <input
                                                    type="radio"
                                                    value="criminal"
                                                    checked={casetype === 'criminal'}
                                                    onClick={() => { setGender("criminal") }}
                                                />
                                                Criminal
                                            </label>
                                        </div>
                                        </div>
                                        <div className="mt-6 flex  justify-between">
                                                <h6 className='mt-1'>Opponent Litigant</h6>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={caseagainst}
                                                    name="caseagainst"
                                                    autoComplete="off"
                                                    onChange={(e) => setCaseAgainst(e.target.value)}
                                                    className="border rounded border-gray-400 py-1 px-2 w-[300px] ml-4"
                                                />
                                            </div>
                                        </div>
                                        <div className='w-[46%]'>
                                        <div className="mt-6 flex justify-between">
                                                <h6 className='mt-1'>Court</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Litigant Name"
                                                    value={court}
                                                    name="court"
                                                    autoComplete="off"
                                                    onChange={(e) => setCourt(e.target.value)}
                                                    className="border rounded border-gray-400 py-1 px-2 w-[300px] ml-4"
                                                />
                                            </div>
                                            <div className="mt-6 flex  justify-between">
                                                <h6 className='mt-1'>State</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter State"
                                                    value={state}
                                                    name="state"
                                                    autoComplete="off"
                                                    onChange={(e) => setState(e.target.value)}
                                                    className="border rounded border-gray-400 py-1 px-2 w-[300px] ml-4"
                                                />
                                            </div>
                                        </div>

                                        </div>
                                        <div className='ml-[6%]'>
                                        <div className="mt-6 flex">
                                                <h6 className='mt-1'>Description</h6>
                                                <textarea
                                                    type="text"
                                                    placeholder=""
                                                    value={desc}
                                                    name="description"
                                                    autoComplete="off"
                                                    onChange={(e) => setDesc(e.target.value)}
                                                    className="border rounded border-gray-400 py-1 px-2 w-[80%] h-[400px] ml-16"
                                                />
                                            </div>
                                        </div>
                                            <div className="container">
                                                <h1 className='py-3'>Upload Evidence Files</h1>
                                            </div>
                                            <div className="container">
                                                <div>
                                                    <label for="upload" className=' bg-[#3ac7e7] px-4 py-2 text-center rounded-md hover:bg-[#1d7adb] text-white ease-in-out duration-300'>
                                                        <input className='opacity-0 hidden right-[-9999px] absolute' onChange={(e) => {setFiles(e.target.files); console.log('helllo')}} type="file" id="upload" multiple/>
                                                    Upload Files
                                                    </label>
                                                </div>
                                                <div className="files">
                                                    <h2>Files Selected</h2>
                                                    <ul>
                                                        {console.log(files[0])}
                                                        {
                                                            files.length > 0 &&
                                                            (() => {
                                                                const elements = [];
                                                                for (let index = 0; index < files.length; index++) {
                                                                    const file = files[index];
                                                                    let suffix = "bytes";
                                                                    let size = file.size;

                                                                    if (size >= 1024 && size < 1024000) {
                                                                        suffix = "KB";
                                                                        size = Math.round(size / 1024 * 100) / 100;
                                                                    } else if (size >= 1024000) {
                                                                        suffix = "MB";
                                                                        size = Math.round(size / 1024000 * 100) / 100;
                                                                    }

                                                                    elements.push(
                                                                        <li key={index}>
                                                                            {file.name} <span className="file-size">{size} {suffix}</span>
                                                                            <i className="material-icons md-48"><MdDeleteOutline className='text-xl'/></i>
                                                                        </li>
                                                                    );
                                                                }
                                                                return elements;
                                                            })()
                                                        }


                                                    </ul>
                                                </div>
                                                <button onClick={()=>{setPageState(2)}} className=' px-4 py-2 bg-[#3ac7e7] text-center rounded-md hover:bg-[#1d7adb] text-white ease-in-out duration-300 mt-3 mb-6 ml-[45%]'>Submit</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                    </div>
        </div>
    )
}

export default filecase