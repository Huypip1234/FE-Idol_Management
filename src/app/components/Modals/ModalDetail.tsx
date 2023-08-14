import React, { useContext, useEffect, useState } from "react";
import Modals from ".";
import axios, { all } from "axios";
import { DataContext } from "@/app/layout";
import { toast } from "react-toastify";
import Image from "next/image";

const ModalDetailChildren = () => {
  const { currentId, activeAPIgetIdolDetail } = useContext(DataContext);
  const [data, setData] = useState<any>();
  useEffect(() => {
    setData(null);
    const getAPI = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/idol/detail/${currentId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
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
  }, [activeAPIgetIdolDetail]);

  return (
    <div className="">
      <div className="py-[2rem] rounded-lg flex bg-[#b598d9] justify-center mb-[32px] mt-[28px]">
        {data ? (
          <div className="flex font-[600] items-center flex-col gap-[1rem] ">
            <Image
              src={data?.image}
              alt="err"
              width={150}
              height={150}
              className="rounded-[8px]"
            />
            <p className="text-[1.5rem]">{data?.name}</p>
            <p>Age: {data?.age}</p>
            <p>
              Height: {data?.height}
              <span className="text-gray-700">Cm</span>
            </p>
            <p>
              Weight: {data?.weight}
              <span className="text-gray-700">Kg</span>
            </p>
          </div>
        ) : (
          <div className="flex justify-center py-[2rem]">
            <p className="font-[600] text-[25px]">Fetching Data...</p>
          </div>
        )}
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
