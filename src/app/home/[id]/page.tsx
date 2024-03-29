"use client";
import React, { useContext, useState } from "react";
import Table, { IAllIdolData } from "../../components/Table";
import { useEffect } from "react";
import ModalAdd from "../../components/Modals/ModalAdd";
import { DataContext } from "../../layout";
import ModalDelete from "../../components/Modals/ModalDelete";
import ModalEdit from "../../components/Modals/ModalEdit";
import ModalDetail from "../../components/Modals/ModalDetail";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Home() {
  const [isShowModalInsert, setIsShowModalInsert] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [isShowModalDetail, setIsShowModalDetail] = useState(false);

  const params = useParams();
  const router = useRouter();

  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const getAPI = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user/detail/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        localStorage.setItem("userId", res.data.data._id);
        setUserData(res.data.data);
        toast.success(res.data.message);
        //console.log(res.data.data);
      } catch (err: any) {
        console.log(err);
        err.response && err.response.status != 404
          ? toast.error(err.response.data.message)
          : toast.error(err.message);
      }
    };
    getAPI();
  }, []);

  const { allIdolDataContext, setFilteredIdolContext } =
    useContext(DataContext);

  const handleSearch = (e: any) => {
    const filteredData = allIdolDataContext.filter((item: IAllIdolData) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredIdolContext(filteredData);
  };

  return (
    <div className="relative">
      <div className="m-[2rem] absolute">
        <p>Hello {userData?.fullName || "..."}!</p>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            router.push("/auth");
            toast.success("Log out success!");
          }}
          className="bg-slate-700 mt-[0.5rem] transition-all hover:bg-slate-950 text-white px-[16px] py-[8px] w-full rounded-[8px]"
        >
          Log out
        </button>
      </div>
      <ModalAdd
        open={isShowModalInsert}
        onClose={() => {
          setIsShowModalInsert(false);
        }}
      />
      <ModalDelete
        open={isShowModalDelete}
        onClose={() => {
          setIsShowModalDelete(false);
        }}
      />

      <ModalEdit
        open={isShowModalEdit}
        onOpen={() => {
          setIsShowModalEdit(true);
        }}
        onClose={() => {
          setIsShowModalEdit(false);
        }}
      />

      <ModalDetail
        open={isShowModalDetail}
        onOpen={() => {
          setIsShowModalDetail(true);
        }}
        onClose={() => {
          setIsShowModalDetail(false);
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
              spellCheck="false"
              className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.05] focus:scale-[1.05]"
              placeholder="Find Idol"
              type="text"
              onChange={handleSearch}
            />
          </div>

          <button
            onClick={() => {
              setIsShowModalInsert(true);
            }}
            className="bg-secondary hover:scale-[1.05] shadow-deep transition-all duration-300 mt-[2rem] px-[20px] py-[12px] rounded-[8px] font-[700]"
          >
            Add Idol
          </button>

          {/* Table */}
          <div className="mt-[3rem]">
            <Table
              setIsShowModalDelete={setIsShowModalDelete}
              setIsShowModalEdit={setIsShowModalEdit}
              setIsShowModalDetail={setIsShowModalDetail}
            />
          </div>
          {/* End Table */}
        </div>
      </div>
    </div>
  );
}
