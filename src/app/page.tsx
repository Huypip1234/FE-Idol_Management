import Image from "next/image";
import Table from "./components/Table";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-[5rem]">
      <div className="bg-primary p-[4rem] rounded-[16px] flex flex-col items-center shadow-container">
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
            className="border border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.05] focus:scale-[1.05]"
            placeholder="Find Idol"
            type="text"
          />
        </div>

        <button className="hover:bg-secondary bg-tertiary hover:scale-[1.05] shadow-deep transition-all duration-300 mt-[2rem] px-[20px] py-[12px] rounded-[8px] font-[700]">
          Add new Idol
        </button>

        {/* Table */}
        <div className="mt-[3rem]">
          <Table />
        </div>

        {/* End Table */}
      </div>
    </div>
  );
}
