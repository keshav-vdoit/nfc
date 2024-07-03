import React from "react";

const Result = ({ data, setData }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly rounded-3xl w-[90vw] sm:w-[50vw] p-3 py-10 bg-gray-600 bg-opacity-60 border-[1px] font-mono tracking-wider my-10 md:my-0 border-white shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
      <img src={data?.url} className="md:w-[15vw]" alt="" />
      <div className="py-3 px-5 text-center text-white my-auto text-lg md:text-xl">
{console.log(data)}
        {/* <h1 className="text-center font-semibold p-4">
        {data?.message || data}
        </h1> */}
        <h1 className="text-center text-xl md:text-2xl font-semibold p-4">
          Painting Details
        </h1>
        <p>
          <span> Name:</span> <span>{data?.painting_name}</span>
        </p>
        <p className="my-4">
          <span>Painter:</span> <span>{data?.artist_name}</span>
        </p>
        <button
          className="bg-gray-600 text-white hover:bg-gray-500 shadow-[0_0_3px_1px_rgba(255,255,255,0.3)] my-6 mx-4 py-2 px-5 rounded-md"
          onClick={() => setData(null)}
        >
          Go Back
        </button>
        <button
          className="bg-gray-600 text-white hover:bg-gray-500 shadow-[0_0_3px_1px_rgba(255,255,255,0.3)] my-6 py-2 px-5 rounded-md"
        >
          Explore More
        </button>
      </div>
    
    </div>
  );
};

export default Result;
