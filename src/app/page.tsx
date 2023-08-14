"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push(`/home/${localStorage.getItem("userId")}`);
    } else {
      router.push("/auth");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="font-[600] text-[30px]">Loading...</p>
    </div>
  );
}
