"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IAllIdolData {
  _id: String;
  name: String;
  age: String;
  height: String;
  weight: String;
}

const Table = () => {
  const [allIdolData, setAllIdolData] = useState<IAllIdolData[]>();
  const [status, setStatus] = useState("Fetching API...");

  useEffect(() => {
    const getAPI = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/idol/all`
        );
        setAllIdolData(res.data.data);
        console.log(res.data.data);
      } catch (err: any) {
        console.log(err);
        setStatus(err.message);
      }
    };
    getAPI();
  }, []);

  return (
    <>
      {!allIdolData ? (
        <p className="font-[500] text-[1.5rem] text-white">{status}</p>
      ) : (
        <div className="relative overflow-x-auto sm:rounded-lg shadow-deep">
          <table className="w-full text-sm text-left ">
            <thead className="text-xs uppercase bg-[#9a6cd4] text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Height
                </th>
                <th scope="col" className="px-6 py-3">
                  Weight
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="font-[500]">
              {allIdolData.map((item, index) => {
                //expression here
                return (
                  <tr
                    key={item._id as any}
                    className="border-b border-b-[#9a6cd4] bg-[#b598d9] font-[600] "
                  >
                    <td scope="row" className="px-6 py-4 whitespace-nowrap ">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.age}</td>
                    <td className="px-6 py-4">
                      {item.height} <span className="text-gray-700">Cm</span>
                    </td>
                    <td className="px-6 py-4">
                      {item.weight} <span className="text-gray-700">Kg</span>
                    </td>
                    <td className="px-6 py-4 text-right flex gap-[1rem]">
                      <button className="font-medium hover:scale-[1.1] transition-all duration-300 text-black bg-secondary rounded-lg px-[16px] py-[5px]">
                        Detail
                      </button>
                      <button className="font-medium hover:scale-[1.1] transition-all duration-300 text-black bg-tertiary rounded-lg px-[16px] py-[5px]">
                        Edit
                      </button>
                      <button className="hover:scale-[1.1] transition-all duration-300 font-medium text-black bg-[#E94949] rounded-lg px-[16px] py-[5px]">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
