import { useState } from "react";

const Counter = () => {
  console.log(useState());
  return (
    <section className="flex flex-col justify-center items-center gap-10 bg-[#468189] h-screen">
      <h1 className="text-6xl text-[#F4E9CD]">UseState Hook</h1>
      <p className="text-4xl text-[#F4E9CD]">Count</p>
      <button className="bg-[#F4E9CD] p-4 text-[#468189] font-bold text-2xl rounded-2xl shadow-2xl">
        Increment
      </button>
    </section>
  );
};
export default Counter;
