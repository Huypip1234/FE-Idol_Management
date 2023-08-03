import React from "react";

const Registers = () => {
  return (
    <div>
      <div className="mt-[15px] flex flex-col gap-[1rem]">
      <input
          spellCheck="false"
          className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
          placeholder="Full name"
          type="text"
          required
        />
        <input
          spellCheck="false"
          className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
          placeholder="UserName"
          type="text"
          required
        />
        <input
          spellCheck="false"
          className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
          placeholder="Password"
          type="password"
          required
        />
        <button
          type="submit"
          className="bg-[#b598d9] hover:bg-[#a07dc9] transition-all duration-300 text-[16px] font-[500] w-full py-[12px] rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Registers;
