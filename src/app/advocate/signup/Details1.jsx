import Link from 'next/link';

const Details1 = ({storage,ID,page,setPage,name,email,mobile,dob,password,image,setImage, setName, setEmail, setMobile, setDob, setPassword}) => {
    const uploadImage = (file) => {
        const promise = storage.createFile(
            'profileimage',
            ID.unique(),
            file
        );
        
        promise.then(function (response) {
            setImage(response.$id);
        }, function (error) {
            console.log(error);
        });
    }
    return (
        <div>
            <div className='py-6 mx-12'>
                <h1 className='text-center'>Logo</h1>
                <div className="flex mt-2">
                    <h3 className="mr-6">Upload profile image:</h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {uploadImage(e.target.files[0])}}
                    />
                </div>
                <div className="mt-2">
                    <h6>Name</h6>
                    <input
                        type="text"
                        placeholder="Enter Advocate Name"
                          value={name}
                        name="name"
                        autoComplete="off"
                          onChange={(e) => setName(e.target.value)}
                        className="border rounded border-gray-400 py-1 px-2 w-full"
                    />
                </div>
                <div className="mt-2">
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
                <div className="mt-2">
                    <h6>Mobile No</h6>
                    <input
                        type="number"
                        placeholder="Enter Mobile Number"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        name="mobile"
                        autoComplete="off"
                        className="border rounded border-gray-400 py-1 px-2 w-full"
                    />
                </div>
                <div className="mt-2">
                    <h6>Date of Birth</h6>
                    <input
                        type="date"
                        placeholder="Date of Birth"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        name="dob"
                        autoComplete="off"
                        className="border rounded border-gray-400 py-1 px-2 w-full"
                    />
                </div>
                <div className="mt-2">
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
                <div className="py-1"></div>
                <div>
                    <p className="text-[11px] font-dark text-black ">
                        By signing up, you agree to our{" "}
                        <Link href="/terms">
                            <span className="font-medium text-[#1D7ADB]">
                                terms and conditions
                            </span>
                        </Link>
                    </p>
                </div>
                <div className="flex">
                    <button onClick={()=>{setPage(2)}} disabled={false} className="w-full px-6 py-2 mt-4 text-white hover:shadow-md ease-in-out duration-300 bg-[#04434E] rounded-lg ">
                        Create Account
                    </button>
                </div>

                <p className="text-sm text-center mt-2 font-dark  text-black">
                    Already registered?{" "}
                    <Link href="/advocate/signin">
                        <span className="font-medium text-[#1D7ADB]">
                            Sign in
                        </span>
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Details1