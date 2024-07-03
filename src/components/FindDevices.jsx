import React, { useState } from "react";
import Result from "./Result";

const FindDevices = ({ handleSubmit }) => {
  return (
    <div className="rounded-3xl w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[25vw] p-3 py-10 bg-gray-600 bg-opacity-60 border-[1px] font-mono tracking-wider flex flex-col items-center justify-center border-white shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
      <h1>Search For Nearby Paintings</h1>
      <button
        className="bg-[#0130AA] hover:bg-[#3753a7] my-3 shadow-[0_0_3px_1px_rgba(255,255,255,0.3)] p-2 px-5 rounded-md"
        onClick={handleSubmit}
      >
        Start Search
      </button>
    </div>
  );
};

export default FindDevices;
