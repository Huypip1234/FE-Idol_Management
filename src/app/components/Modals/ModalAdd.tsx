import React from "react";
import Modals from ".";

const ModalAddChildren = () => {
  return (
    <div className="my-[32px] flex flex-col gap-[1rem]">
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Idol's Name"
        type="text"
      />
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Idol's Age"
        type="text"
      />
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Idol's Height"
        type="text"
      />
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Idol's Weight"
        type="text"
      />
    </div>
  );
};

const ModalAdd = ({ open, onClose }: { open: boolean; onClose: any }) => {
  return (
    <Modals open={open} onClose={onClose} children={<ModalAddChildren />} />
  );
};

export default ModalAdd;
