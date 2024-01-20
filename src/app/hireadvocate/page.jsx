import Link from "next/link";

const Organisations = () => {
  const organisations = [
    {
      name: "Clap legal services",
      email: "ksdalk@gmail.com",
      mobile: "123123132131",
      dob: "12.12.1212",
      state:"usestate",
      courtType:"type 2",
      image: "/images/organisations/2.png",
    },
    {
        name: "Clap legal services",
        email: "ksdalk@gmail.com",
        mobile: "123123132131",
        dob: "12.12.1212",
        state:"usestate",
        courtType:"type 2",
        image: "/images/organisations/2.png",
      },
      {
        name: "Clap legal services",
        email: "ksdalk@gmail.com",
        mobile: "123123132131",
        dob: "12.12.1212",
        state:"usestate",
        courtType:"type 2",
        image: "/images/organisations/2.png",
      },
      {
        name: "Clap legal services",
        email: "ksdalk@gmail.com",
        mobile: "123123132131",
        dob: "12.12.1212",
        state:"usestate",
        courtType:"type 2",
        image: "/images/organisations/2.png",
      },
  ];
  return (
    <div>
      <div className="flex flex-wrap bg-[#f1f3f9] shadow-inner w-[95%] mx-auto mt-12 shadow-[rgba(0, 0, 0, 0.08)]">
        {organisations.map((data) => (
          <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <div
              className="c-card block bg-[#FFFFFF] shadow-md ease-in-out duration-300 hover:shadow-2xl   overflow-hidden"
            >
              <div className="">
                <img
                  className=" mx-auto object-cover w-40 h-40 mb-3 mt-7 rounded-full shadow-lg"
                  src={data.image}
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
                    <Link href={`/:id`}>
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
      </div>
    </div>
  );
};

export default Organisations;