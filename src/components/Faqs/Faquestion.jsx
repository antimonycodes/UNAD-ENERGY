const Faquestion = () => {
  const questions = [
    { Q: "How does solar energy save money?", icon: "/down.png" },
    {
      Q: "What are the environmental benefits of solar energy?",
      icon: "/down.png",
    },
    { Q: "How can i know how much I pay for electricity?", icon: "/down.png" },
    { Q: "How do I decide how big my system should be?", icon: "/down.png" },
    { Q: "What is net metering?", icon: "/down.png" },
    {
      Q: "How does installing solar impact the values of my property?",
      icon: "/down.png",
    },
    { Q: "How do solar photovoltaic (PV) panels work?", icon: "/down.png" },
    {
      Q: "Do my solar panels produce power when the sun isn’t shining?",
      icon: "/down.png",
    },
    { Q: "Can rain affect my solar panels?", icon: "/down.png" },
    { Q: "Can I go off grid with solar panels?", icon: "/down.png" },
    {
      Q: "Will I still receive an electric bill if I have solar panels?",
      icon: "/down.png",
    },
    { Q: "Do solar panels work in a blackout? ", icon: "/down.png" },
    { Q: "How can I maintain my solar energy system?", icon: "/down.png" },
    { Q: "How much will solar panel maintenance cost?", icon: "/down.png" },
    { Q: "Can I afford to go solar?", icon: "/down.png" },
    { Q: "Is my roof suitable for solar panels?", icon: "/down.png" },
    { Q: "What size solar energy system should I get?", icon: "/down.png" },
    { Q: "How long will my solar power system last?", icon: "/down.png" },
    { Q: "What happens if I sell my solar house?", icon: "/down.png" },
    { Q: "Can I sell or swap my solar system?", icon: "/down.png" },
    { Q: "How can I get a free solar consultation?", icon: "/down.png" },
    {
      Q: "What are the top benefits of installing a solar energy system?    ",
      icon: "/down.png",
    },
    {
      Q: "What is the difference between an AC-coupled battery and a DC-coupled battery configuration?",
      icon: "/down.png",
    },
    { Q: "What can I do with my old solar battery?", icon: "/down.png" },
    {
      Q: "What type of solar panel should I buy for my business space?",
      icon: "/down.png",
    },
    { Q: "What should I look for in an installer?", icon: "/down.png" },
    { Q: "How long does it take to install a system?", icon: "/down.png" },
  ];
  return (
    <div className=" bg-primary text-darkText">
      {questions.map((question, index) => (
        <div key={index} className=" ">
          <div className=" flex justify-between items-center p-4 ">
            <h3 className=" basis-[70%] text-md font-semibold">{question.Q}</h3>
            <img src={question.icon} alt="" width={20} />
          </div>
          <div className=" w-full h-[2px] bg-[#35A137]"></div>
        </div>
      ))}
    </div>
  );
};

export default Faquestion;
