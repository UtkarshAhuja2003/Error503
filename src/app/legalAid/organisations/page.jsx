import Link from "next/link";

const Organisations = () => {
  const organisations = [
    {
      name: "Clap legal services",
      contact: "9999569843",
      specialozation: "cases",
      address: "rajouri Garden",
      AidsProvided: "92",
      image: "/images/organisations/1.jpg",
    },
    {
      name: "Swift Consultancy",
      contact: "8887456321",
      specialization: "business",
      address: "Connaught Place",
      AidsProvided: "78",
      image: "/images/organisations/2.png",
    },
    {
      name: "Legal Eagles",
      contact: "7778123456",
      specialization: "family",
      address: "Saket",
      AidsProvided: "60",
      image: "/images/organisations/3.png",
    },
    {
      name: "Justice Hub",
      contact: "9112233445",
      specialization: "property",
      address: "Dwarka",
      AidsProvided: "85",
      image: "/images/organisations/4.png",
    },
    {
      name: "Pro Bono Legal",
      contact: "9876543210",
      specialization: "immigration",
      address: "Nehru Place",
      AidsProvided: "72",
      image: "/images/organisations/2.png",
    },
    {
      name: "Ace Advocates",
      contact: "8765432109",
      specialization: "employment",
      address: "Vasant Kunj",
      AidsProvided: "93",
      image: "/images/organisations/3.png",
    },
    {
      name: "Liberty Law Firm",
      contact: "9990001111",
      specialization: "personal injury",
      address: "Karol Bagh",
      AidsProvided: "45",
      image: "/images/organisations/4.png",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap bg-[#f1f3f9] shadow-inner w-[95%] mx-auto mt-12 shadow-[rgba(0, 0, 0, 0.08)]">
        {organisations.map((data) => (
          <div key={data.$id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
            key={data.$id}
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
                  {data.address}{" "}
                </h4>
                <div className="  items-center">
                  <p className=" text-gray-500 text-md font-Merriweather ">
                    {data.contact}
                  </p>

                  <div className="   mt-3 bg-[#FFFFFF] border-t-[2px] border-[#DBE2EF]   hover:bg-[#04434e] text-[#3F72AF] hover:border-[#3F72AF] hover:text-white ease-in-out duration-300">
                    <Link href={`/organisations/${data.name}`}>
                      <button className="  text-lg  font-Merriweather py-2 px-2  font-Merriweather ">
                        Contact Organisation
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
