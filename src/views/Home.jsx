import React, { useState } from "react";
import "./Home.css";
import MacForm from "../components/MacForm";
import Loader from "../components/Loader";
import Result from "../components/Result";
import axios from "axios";
import FindDevices from "../components/FindDevices";

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");
  // const [mac, setMac] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    setLoader(true);
const data={}
    try {
      const response = await axios.post("/api/mac",data, {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      });
      console.log(response);
      setData(response?.data);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);

  };
  return (
    <div className="">
      {loader && <Loader />}
      <div className="text-white min-h-screen flex justify-center md:justify-end items-center md:p-32">
        {data === null ? (
          <FindDevices handleSubmit={handleSubmit} />
        ) : (
          // <MacForm handleSubmit={handleSubmit} mac={mac} setMac={setMac} />
          <Result data={data} setData={setData} />
        )}{" "}
      </div>
    </div>
  );
}
