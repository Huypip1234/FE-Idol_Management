import React, { useContext, useEffect, useState } from "react";
import Modals from ".";
import axios, { all } from "axios";
import { DataContext } from "@/app/layout";
import { toast } from "react-toastify";
import { IAllIdolData } from "../Table";

const ModalEditChildren = () => {
  const { allIdolDataContext, currentId } = useContext(DataContext);
  const [defaultData, setDefaultData] = useState<any>();

  useEffect(() => {
    const data = allIdolDataContext?.find(
      (item: IAllIdolData) => item._id == currentId
    );
    setDefaultData(data);
  }, [currentId]);

  return (
    <div className="my-[32px] flex flex-col gap-[1rem]">
      <input
        id="modalInputName"
        spellCheck="false"
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder={defaultData?.name}
        type="text"
        required
      />
      <input
        id="modalInputAge"
        spellCheck="false"
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder={defaultData?.age}
        type="text"
        required
      />
      <input
        id="modalInputheight"
        spellCheck="false"
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder={defaultData?.height}
        type="text"
        required
      />
      <input
        id="modalInputweight"
        spellCheck="false"
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder={defaultData?.weight}
        type="text"
        required
      />
    </div>
  );
};

const ModalEdit = ({
  open,
  onClose,
  onOpen,
}: {
  open: boolean;
  onClose: any;
  onOpen: any;
}) => {
  const { reRender, setReRender, currentId } = useContext(DataContext);
  const [okText, setOkText] = useState("Confirm");

  const handleSubmit = async (e: any) => {
    setOkText("Calling API...");
    e.preventDefault();
    const data = {
      id: currentId,
      name: e.target[0].value,
      age: e.target[1].value,
      height: e.target[2].value,
      weight: e.target[3].value,
    };
    // console.log(data);
    const patchAPI = async () => {
      try {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/idol/update`,
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
    await patchAPI();
    setOkText("Confirm");
    onClose();
  };

  return (
    <Modals
      title="Edit Idol"
      onSubmit={handleSubmit}
      open={open}
      onClose={onClose}
      okText={okText}
      children={<ModalEditChildren />}
    />
  );
};

export default ModalEdit;
