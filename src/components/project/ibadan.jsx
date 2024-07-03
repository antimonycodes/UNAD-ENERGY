import React from "react";

const Ibadan = () => {
  return (
    <div className=" px-4 md:px-12 py-12 flex flex-col gap-12 item-center">
      <h1 className="  text-2xl text-center font-semibold">Ibadan</h1>
      <div className=" grid items-center mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="ibadan1.png" alt="" />
        <img src="ibadan2.png" alt="" />
        <img src="ibadan3.png" alt="" />
        <img src="ibadan4.png" alt="" />
      </div>
    </div>
  );
};

export default Ibadan;
