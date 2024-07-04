const Form = () => {
  return (
    <div className="bg-secondary px-4 py-6 md:px-32 text-whiteText">
      <h1 className="text-center font-semibold text-3xl pb-8">
        Get in touch with us
      </h1>
      <form action="" className="flex flex-col md:items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <label
              htmlFor="fullName"
              className="block py-4 text-lg font-semibold"
            >
              Full Name/Business Name
            </label>
            <input
              type="text"
              id="fullName"
              name="name"
              className="bg-primary w-full p-2 rounded-md text-darkText outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent caret-orangee "
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block py-4 text-lg font-semibold"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="name"
              className="bg-primary w-full p-2 rounded-md text-darkText outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent caret-orangee"
            />
          </div>
          <div>
            <label htmlFor="email" className="block py-4 text-lg font-semibold">
              Email address
            </label>
            <input
              type="text"
              id="email"
              name="name"
              className="bg-primary w-full p-2 rounded-md text-darkText outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent caret-orangee"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block py-4 text-lg font-semibold"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="name"
              className="bg-primary w-full p-2 rounded-md text-darkText outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent caret-orangee"
            />
          </div>
        </div>
        {/*  */}
        <div className="w-full md:w-[80%]">
          <label htmlFor="message" className="block py-4 text-lg font-semibold">
            How can we help you
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-primary px-2 py-1 w-full rounded-md h-[200px] mb-4 text-darkText outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent caret-orangee"
          />
          <button className="bg-[#e27b16] w-full p-2 rounded-md">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
