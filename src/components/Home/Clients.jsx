const Clients = ({ bgColor = "bg-primary", textColor = "text-darkText" }) => {
  return (
    <div
      className={`px-4 py-8 ${textColor} md:px-12 text-center flex flex-col items-center gap-8 ${bgColor}`}
    >
      <h1 className="font-bold text-2xl pt-8">Unab Clients</h1>
      <p>
        Join the thousands of businesses and homeowners across the nation that
        have flipped the switch to UNAB global energy limited.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20">
        <img src="/fireswitch.png" alt="" />
        <img src="/ulesson.png" alt="" />
        <img src="/dorlan.png" alt="" />
        <img src="/immigation.png" alt="" />
      </div>
    </div>
  );
};

export default Clients;
