const Contact = () => {
  const contacts = [
    {
      icon: "/location.png",
      heading: "UNAB OFFICE",
      paragraph: "House 89, Oba Ovarenwem Street, Works and Housing Estate Gwarimpa, Abuja.",
    },
    {
      icon: "/msg.png",
      heading: "Email Us",
      paragraph: "info@unabenergy.com  unabenergy04@gmail.com",
    },
    {
      icon: "/hrs.png",
      heading: "Working Hours",
      paragraph: "9am - 5pm Monday to Friday",
    },
    {
      icon: "/phone.png",
      heading: "Let Us Talk",
      paragraph: "+2348060400742",
    },
  ];
  return (
    <div className=" bg-primary px-4 py-6 md:px-12 text-darkText">
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 items-center gap-16">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className=" flex flex-col  items-center gap-4 text-center"
          >
            <img src={contact.icon} alt="" width={20} />
            <h1 className=" text-3xl font-semibold">{contact.heading}</h1>
            <p className=" font-medium">{contact.paragraph}</p>
          </div>
        ))}
      </div>
      <div>
        {/*  */}
        {/* <div className="svg-container">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="location-pin-svg"
          >
            <path d="M256,0C153.755,0,71,82.755,71,185c0,44.261,15.085,85.62,42.408,119.067l127.683,166.242c5.656,7.371,16.803,7.371,22.459,0 l127.683-166.242C425.915,270.62,441,229.261,441,185C441,82.755,358.245,0,256,0z M256,277c-50.691,0-92-41.309-92-92 s41.309-92,92-92s92,41.309,92,92S306.691,277,256,277z" />
          </svg>
        </div> */}
        {/* <div className="svg-container">
          <svg
            className="message-icon"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10v44h60V10H2zm56 4v2H6v-2h52zm-7 38H13v-4h38v4zm7-6H6V18h52v28z" />
            <path d="M11 25h42v2H11zM11 33h42v2H11zM11 41h28v2H11z" />
          </svg>
        </div> */}

        {/*  */}
      </div>
    </div>
  );
};

export default Contact;
