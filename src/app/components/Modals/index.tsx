"use client";
import { DataContext } from "@/app/layout";
import React, { useContext, useEffect, useRef } from "react";

const Modals = ({
  open,
  onClose,
  children,
  onSubmit,
  okText,
  title,
}: {
  open: boolean;
  onClose: any;
  children?: any;
  onSubmit: any;
  okText: string;
  title: string;
}) => {
  useEffect(() => {
    open && (document.body.style.overflow = "hidden");
    !open && (document.body.style.overflow = "unset");
  }, [open]);

  /* On click out side */
  const ref = useRef<any>(null);
  useEffect(() => {
    const handleOutSideClick = (e: any) => {
      //console.log(e.target);
      if (!ref.current?.contains(e.target)) {
        title != "Edit Idol" && onClose();
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  /* End On click out side */

  const { setMountInput } = useContext(DataContext);

  return (
    <div
      className={`transition-all duration-300 opacity-0 z-[-1] ${
        open && "opacity-100 !z-50"
      } bg-[rgba(0,0,0,0.80)] w-full h-screen fixed  text-white flex justify-center items-center`}
    >
      {/* Modal  */}
      <div
        ref={ref}
        className={`transition-all duration-300  mt-[8rem] ${
          open && "!mt-[0]"
        } w-[421px] bg-primary rounded-lg p-[24px] text-black`}
      >
        <h3 className="font-[600] text-[30px] text-white">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <div className="flex gap-[0.5rem]">
            <button
              onClick={() => {
                onClose();
                setMountInput(false);
              }}
              type="button"
              className="bg-tertiary hover:scale-[1.04] transition-all duration-300 text-[16px] font-[500] w-full py-[12px] rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-secondary hover:scale-[1.04] transition-all duration-300 text-[16px] font-[500] w-full py-[12px] rounded-lg"
            >
              {okText}
            </button>
          </div>
        </form>
      </div>
      {/* Modal */}
    </div>
  );
};

export default Modals;
