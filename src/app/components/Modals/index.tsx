"use client";
import React, { useEffect } from "react";

const Modals = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: any;
  children?: any;
}) => {
  useEffect(() => {
    open && (document.body.style.overflow = "hidden");
    !open && (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <div
      className={`transition-all duration-300 opacity-0 z-[-1] ${
        open && "opacity-100 !z-50"
      } bg-[rgba(0,0,0,0.80)] w-full h-screen fixed  text-white flex justify-center items-center`}
    >
      {/* Modal  */}
      <div
        className={`transition-all duration-300 mt-[8rem] ${
          open && "!mt-[0]"
        } w-[421px] bg-primary rounded-lg p-[24px] text-black`}
      >
        <h3 className="font-[500] text-[24px] text-white">Add New Idol</h3>
        {children}
        <div className="flex gap-[0.5rem]">
          <button
            onClick={onClose}
            className="bg-tertiary hover:scale-[1.04] transition-all duration-300 text-[16px] font-[500] w-full py-[12px] rounded-lg"
          >
            Cancel
          </button>
          <button className="bg-secondary hover:scale-[1.04] transition-all duration-300 text-[16px] font-[500] w-full py-[12px] rounded-lg">
            Confirm
          </button>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export default Modals;
