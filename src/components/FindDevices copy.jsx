import React, { useState } from "react";
import Loading from "./Loading";
import axios from "axios";

const FindDevices = () => {
  const [devices, setDevices] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleFind = async () => {
    setDevices([]);
    setLoader(true);
    // setTimeout(() => {
    //   setLoader(false);
    //   setDevices(["3C:19:5E:92:3C:BB", "D0:49:7C:D4:12:3E"]);
    // }, 2000);
    try {
      const response = await axios.get("/api/nearby", {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      });
      console.log(response);
      setDevices(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rounded-3xl w-[90vw] h-[60vh] md:h-unset sm:w-[70vw] md:w-[50vw] lg:w-[25vw] p-3 py-10 bg-gray-600 bg-opacity-60 border-[1px] font-mono tracking-wider flex flex-col items-center md:justify-center border-white shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
      <h1>Search Available Devices</h1>
      <button
        className="bg-[#0130AA] hover:bg-[#3753a7] shadow-[0_0_3px_1px_rgba(255,255,255,0.3)] p-2 px-5 rounded-md my-4"
        onClick={handleFind}
      >
        Find Devices
      </button>
      {loader && <Loading />}
      {/* {devices.length > 0 &&
        devices.map((item, index) => {
          return (
            <div key={item + index}>
              <p>{item}</p>
            </div>
          );
        })} */}
    </div>
  );
};

export default FindDevices;
