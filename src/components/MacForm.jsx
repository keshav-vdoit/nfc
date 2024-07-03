import React from "react";
const MacForm = ({ handleSubmit, mac, setMac }) => {
  function formatMacAddress(input) {
    return (
      input
        .replace(/[^a-fA-F0-9]/g, "") // Remove all non-hexadecimal characters
        .match(/.{1,2}/g) // Match pairs of characters
        ?.join(":") // Join them with colons
        .slice(0, 17) || ""
    ); // Limit the length to 17 characters (12 characters + 5 colons)
  }

  const handleMacChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatMacAddress(value);
    setMac(formattedValue);
  };

  return (
    <div className="rounded-3xl w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[25vw] p-3 py-10 bg-gray-600 bg-opacity-60 border-[1px] font-mono tracking-wider flex flex-col items-center justify-center border-white shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
      <h1 className="text-xl font-semibold">Enter MAC Address</h1>
      <input
        type="text"
        className="my-4 rounded py-1 px-4 bg-opacity-20 bg-white placeholder:text-white placeholder:font-semibold text-lg uppercase"
        value={mac}
        onChange={handleMacChange}
        placeholder="A1:B2:C3:D4:E5"
      />
      <div className="flex gap-10 mt-5">
        <button
          className="bg-[#0130AA] hover:bg-[#3753a7] shadow-[0_0_3px_1px_rgba(255,255,255,0.3)] p-2 px-5 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button className="bg-[#6e0505] hover:bg-[#bb4040] shadow-[0_0_3px_1px_rgba(255,255,255,0.3)] p-2 px-5 rounded-md"
        onClick={()=>setMac("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default MacForm;
