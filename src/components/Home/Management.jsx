const Management = () => {
  const cards = [
    { img: "/eclipse.png", name: "Bright Antia", position: "CTO" },
    { img: "/eclipse.png", name: "Timothy Ayodele", position: "CEO" },
    { img: "/eclipse.png", name: "Kasarachi Lekwauwa", position: "CFO" },
    { img: "/eclipse.png", name: "Jesse Joan", position: "HR/Admin" },
  ];

  return (
    <div className="px-4 py-8 text-darkText">
      <h1 className="text-center font-bold text-2xl pb-12">Management Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 items-center ${
              index === cards.length - 1
                ? "md:col-start-2 lg:col-start-auto"
                : ""
            }`}
          >
            <div>
              <img src={card.img} alt={card.name} />
            </div>
            <h1 className="font-semibold text-xl">{card.name}</h1>
            <p>{card.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
