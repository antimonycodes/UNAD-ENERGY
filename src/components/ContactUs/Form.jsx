const Form = () => {
  return (
    <div className=" bg-secondary px-4 py-6 md:px-32 text-whiteText">
      <h1 className=" text-center font-semibold text-3xl pb-8">
        Get in touch with us
      </h1>
      <form action="" className=" flex flex-col md:items-center w-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <label htmlFor="" className=" block py-4 text-lg font-semibold">
              Full Name/Business Name
            </label>
            <input
              type="text"
              name="name"
              className=" bg-primary w-full py-2 rounded-md text-darkText "
            />
          </div>
          <div>
            <label htmlFor="" className=" block py-4  text-lg font-semibold ">
              Phone Number
            </label>
            <input
              type="text"
              name="name"
              className=" bg-primary w-full py-2 rounded-md text-darkText"
            />
          </div>
          <div>
            <label htmlFor="" className=" block py-4 text-lg font-semibold">
              Email address
            </label>
            <input
              type="text"
              name="name"
              className=" bg-primary w-full py-2 rounded-md text-darkText"
            />
          </div>
          <div>
            <label htmlFor="" className=" block py-4 text-lg font-semibold">
              Address
            </label>
            <input
              type="text"
              name="name"
              className=" bg-primary w-full py-2 rounded-md text-darkText"
            />
          </div>
        </div>
        {/*  */}
        <div className=" w-full md:w-[80%]">
          <label htmlFor="" className=" block py-4 text-lg font-semibold">
            How can we help you
          </label>
          <input
            type="text"
            name="name"
            className=" bg-primary w-full rounded-md h-[200px]  mb-4 text-darkText"
          />
          <button className=" bg-[#e27b16] w-full py-2 rounded-md">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
