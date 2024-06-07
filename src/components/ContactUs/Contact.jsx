const Contact = () => {
  const contacts = [
    {
      icon: "/location.png",
      heading: "UNAB OFFICE",
      paragraph: "22A, Adeleke Adedoyin Str. Victoria  Island, Lagos",
    },
    {
      icon: "/msg.png",
      heading: "Email Us",
      paragraph: "info@unab.comsales@unab.com",
    },
    {
      icon: "/phone.png",
      heading: "Let Us Talk",
      paragraph: "07002288888",
    },
  ];
  return (
    <div className=" bg-primary px-4 py-6 md:px-12 text-darkText">
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 items-center gap-16">
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
    </div>
  );
};

export default Contact;
