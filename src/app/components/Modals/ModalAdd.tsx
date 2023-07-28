import React, { useContext, useState } from "react";
import Modals from ".";
import axios from "axios";
import { DataContext } from "@/app/layout";
import { toast } from "react-toastify";

const ModalAddChildren = () => {
  return (
    <div className="my-[32px] flex flex-col gap-[1rem]">
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Name"
        type="text"
        required
      />
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Age"
        type="text"
        required
      />
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Height"
        type="text"
        required
      />
      <input
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Weight"
        type="text"
        required
      />
    </div>
  );
};

const ModalAdd = ({ open, onClose }: { open: boolean; onClose: any }) => {
  const { reRender, setReRender } = useContext(DataContext);
  const [okText, setOkText] = useState("Confirm");

  const handleSubmit = async (e: any) => {
    setOkText("Calling API...");
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      age: e.target[1].value,
      height: e.target[2].value,
      weight: e.target[3].value,
    };
    // console.log(data);
    const postAPI = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/idol/insert`,
          data
        );
        console.log(res.data.data);
        toast.success(res.data.message);
        setReRender(!reRender);
      } catch (err: any) {
        console.log(err);

        err.response && err.response.status != 404
          ? toast.error(err.response.data.message)
          : toast.error(err.message);
      }
    };
    await postAPI();
    setOkText("Confirm");
    onClose();
  };

  return (
    <Modals
      onSubmit={handleSubmit}
      open={open}
      onClose={onClose}
      okText={okText}
      children={<ModalAddChildren />}
    />
  );
};

export default ModalAdd;
