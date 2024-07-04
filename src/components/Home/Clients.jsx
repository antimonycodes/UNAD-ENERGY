const Clients = ({ bgColor = "bg-primary", textColor = "text-darkText" }) => {
  const clients = [
    { src: "/fireswitch.png", alt: "Fireswitch" },
    { src: "/ulesson.png", alt: "ULesson" },
    { src: "/dorlan.png", alt: "Dorlan" },
    { src: "/immigation.png", alt: "Immigation" },
  ];

  return (
    <div
      className={`px-4 py-8 ${textColor} md:px-12 text-center flex flex-col items-center gap-8 ${bgColor}`}
    >
      <h1 className="font-bold text-2xl pt-8">UNAB Clients</h1>
      <p>
        Join the thousands of businesses and homeowners across the nation that
        have flipped the switch to UNAB global energy limited.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`${
              index === clients.length - 1
                ? "md:col-start-2 lg:col-start-auto"
                : ""
            }`}
          >
            <img src={client.src} alt={client.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
