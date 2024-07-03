import React from "react";

const Ph = () => {
  return (
    <div className=" px-4 md:px-8 py-12 flex flex-col gap-12 item-center">
      <h1 className="  text-2xl text-center font-semibold">Porthacourt</h1>
      <div className=" grid items-center mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="ph1.png" alt="" />
        <img src="ph2.png" alt="" />
        <img src="ph3.png" alt="" />
        <img src="ph4.png" alt="" />
      </div>
    </div>
  );
};

export default Ph;
