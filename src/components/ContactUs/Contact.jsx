import React from "react";

const Contact = () => {
  const contacts = [
    {
      icon: "/location.png",
      heading: "UNAB OFFICE",
      paragraph: "House 89, Oba Ovarenwem Street,",
      sub: "Works and Housing Estate Gwarimpa, Abuja."
    },
    {
      icon: "/msg.png",
      heading: "Email Us",
      paragraph: "info@unabenergy.com",
      sub: "unabenergy04@gmail.com"
    },
    {
      icon: "/hrs.png",
      heading: "Working Hours",
      paragraph: "9am - 5pm",
      sub: "Monday to Friday"
    },
    {
      icon: "/phone.png",
      heading: "Let Us Talk",
      paragraph: "08027994029"
    },
  ];

  return (
    <div className="bg-primary px-4 py-6 md:px-12 text-darkText">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center gap-4 text-center">
            <img
              src={contact.icon}
              alt=""
              width={index === 0 ? 13 : 20} // Adjust size based on index
            />
            <h1 className="text-3xl font-semibold">{contact.heading}</h1>
            <div>
              <p className="font-medium">{contact.paragraph}</p>
              <p className="font-medium">{contact.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
