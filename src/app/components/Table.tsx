import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Yua Mikami", age: 25, height: 160, weight: 55 },
    { id: 2, name: "Yua Mikami", age: 25, height: 160, weight: 55 },
    { id: 3, name: "Yua Mikami", age: 25, height: 160, weight: 55 },
    { id: 4, name: "Yua Mikami", age: 25, height: 160, weight: 55 },
  ];
  return (
    <div className="relative overflow-x-auto sm:rounded-lg shadow-deep">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs uppercase bg-[#9a6cd4]">
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
          {data.map((item) => (
            <tr key={item.id} className="border-b bg-[#b598d9] ">
              <td
                scope="row"
                className="px-6 py-4 whitespace-nowrap "
              >
                {item.id}
              </td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.age}</td>
              <td className="px-6 py-4">{item.height} <span className="text-gray-700">Cm</span></td>
              <td className="px-6 py-4">{item.weight} <span className="text-gray-700">Kg</span></td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
