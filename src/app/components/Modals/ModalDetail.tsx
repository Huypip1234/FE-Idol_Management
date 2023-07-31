import React, { useContext, useEffect, useState } from "react";
import Modals from ".";
import axios, { all } from "axios";
import { DataContext } from "@/app/layout";
import { toast } from "react-toastify";
import { IAllIdolData } from "../Table";
import Image from "next/image";

const ModalDetailChildren = () => {
  const { currentId } = useContext(DataContext);
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getAPI = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/idol/detail/${currentId}`
        );
        console.log(res.data.data);
        setData(res.data.data);
        toast.success(res.data.message);
      } catch (err: any) {
        console.log(err);
        err.response && err.response.status != 404
          ? toast.error(err.response.data.message)
          : toast.error(err.message);
      }
    };
    currentId && getAPI();
  }, [currentId]);

  return (
    <div className="">
      <div className="flex font-[600] flex-col gap-[1rem] py-[2rem] rounded-lg  bg-[#b598d9] items-center mb-[32px] mt-[28px]">
        <Image
          src={"/assets/images/avatar.jpg"}
          alt="err"
          width={100}
          height={100}
          className="rounded-full"
        />
        <p>{data?.name || "Fetching data..."}</p>
        <p>Age: {data?.age}</p>
        <p>
          Height: {data?.height || "Fetching data..."}{" "}
          <span className="text-gray-700">Cm</span>
        </p>
        <p>
          Weight: {data?.weight || "Fetching data..."}{" "}
          <span className="text-gray-700">Kg</span>
        </p>
      </div>
    </div>
  );
};

const ModalDetail = ({
  open,
  onClose,
  onOpen,
}: {
  open: boolean;
  onClose: any;
  onOpen: any;
}) => {
  return (
    <Modals
      title="Idol Detail"
      open={open}
      onClose={onClose}
      children={<ModalDetailChildren />}
    />
  );
};

export default ModalDetail;
