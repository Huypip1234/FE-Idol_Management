import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [isloading, setIsloading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      userName: e.target[0].value,
      password: e.target[1].value,
    };

    const postAPI = async () => {
      try {
        setIsloading(true);
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`,
          data
        );
        localStorage.setItem("token", res.data.data.token);
        toast.success(res.data.message);
        console.log(res.data.data);
        router.push(`/home/${res.data.data._id}`);
        setIsloading(false);
      } catch (err: any) {
        toast.error(err.response.data.message);
        console.log(err);
        setIsloading(false);
      }
    };
    postAPI();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[15px] flex flex-col gap-[1rem]"
    >
      <input
        spellCheck="false"
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="UserName"
        type="text"
        defaultValue={"huypip1234"}
        required
      />
      <input
        spellCheck="false"
        className="bg-[#b598d9] placeholder:font-[500] font-[500] placeholder:text-gray-700 border-solid px-[1.2rem] py-[0.8rem] w-full rounded-[8px] shadow-deep outline-none transition-all duration-300 hover:scale-[1.03] focus:scale-[1.05]"
        placeholder="Password"
        type="password"
        defaultValue={"14120042003bB"}
        required
      />
      <button
        type="submit"
        className="bg-[#b598d9] hover:bg-[#a07dc9] transition-all duration-300 text-[16px] font-[500] w-full py-[12px] rounded-lg"
      >
        {isloading ? "Login..." : "Submit"}
      </button>
    </form>
  );
};

export default Login;
