import React, { useContext, useState } from "react";
import Modals from ".";
import axios from "axios";
import { DataContext } from "@/app/layout";
import { toast } from "react-toastify";

const ModalDeleteChildren = () => {
  return (
    <div className="my-[32px]">
      <p className="text-white">Do you really want to delete Idol?</p>
    </div>
  );
};

const ModalDelete = ({ open, onClose }: { open: boolean; onClose: any }) => {
  const { reRender, setReRender, currentId } = useContext(DataContext);
  const [okText, setOkText] = useState("Delete");

  const handleSubmit = async (e: any) => {
    setOkText("Calling API...");
    e.preventDefault();
    // console.log(data);
    const deleteAPI = async () => {
      try {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/idol/delete/${currentId}`
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
    await deleteAPI();
    setOkText("Delete");
    onClose();
  };

  return (
    <Modals
      title="Delete Idol"
      onSubmit={handleSubmit}
      open={open}
      onClose={onClose}
      okText={okText}
      children={<ModalDeleteChildren />}
    />
  );
};

export default ModalDelete;
