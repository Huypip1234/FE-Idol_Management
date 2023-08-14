"use client";
import React, { useState } from "react";
import Login from "./Login";
import Registers from "./Registers";

const auth = () => {
  const [show, setShow] = useState("Login");
  return (
    <div className="flex justify-center">
      <div className="bg-primary p-[1rem] mt-[5rem] rounded-[16px] flex flex-col items-center shadow-container">
        <div className="rounded-lg flex w-full">
          <button
            onClick={() => {
              setShow("Login");
            }}
            className={`${show=="Login" && "!bg-[#a68bc6]"} basis-1/2 font-[500] p-[1rem] rounded-l-lg bg-[#b598d9] transition-all hover:bg-[#a68bc6]`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setShow("Register");
            }}
            className={`${show=="Register" && "!bg-[#a68bc6]"} basis-1/2 font-[500] p-[1rem] rounded-r-lg bg-[#b598d9] transition-all hover:bg-[#a68bc6]`}
          >
            Register
          </button>
        </div>
        {show === "Login" && <Login />}
        {show === "Register" && <Registers show={show} setShow={setShow} />}
      </div>
    </div>
  );
};

export default auth;
