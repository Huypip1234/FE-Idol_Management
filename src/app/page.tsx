"use client";
import React, { useState } from "react";
import Table from "./components/Table";
import Modals from "./components/Modals";
import ModalAdd from "./components/Modals/ModalAdd";

export default function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div className="relative">
      <ModalAdd
        open={isShowModal}
        onClose={() => {
          setIsShowModal(false);
        }}
      />
      <div className="flex flex-col items-center">
        <div className="bg-primary p-[4rem] mt-[5rem] rounded-[16px] flex flex-col items-center shadow-container">
          <div className="flex flex-col">
            <p className="bg-tertiary text-[black] rounded-[8px] text-[2rem] font-[700] px-[0.8rem] self-end mb-[1rem]">
              CRUD
            </p>
            <h1 className="text-[3rem] font-[700] flex gap-[1rem]">
              <span className="text-white">Idol</span>
              <span className="bg-secondary text-black rounded-[8px] px-[0.8rem]">
                Manager
              </span>
            </h1>
          </div>

          <div className="w-[30rem] mt-[1.5rem]">
            <input
              className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.05] focus:scale-[1.05]"
              placeholder="Find Idol"
              type="text"
            />
          </div>

          <button
            onClick={() => {
              setIsShowModal(true);
            }}
            className="bg-secondary hover:scale-[1.05] shadow-deep transition-all duration-300 mt-[2rem] px-[20px] py-[12px] rounded-[8px] font-[700]"
          >
            Add Idol
          </button>

          {/* Table */}
          <div className="mt-[3rem]">
            <Table />
          </div>

          {/* End Table */}
        </div>
      </div>
    </div>
  );
}
