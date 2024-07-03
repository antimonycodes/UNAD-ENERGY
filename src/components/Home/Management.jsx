const Management = () => {
  const cards = [
    { img: "/eclipse.png", name: "Bright Anita", position: "CTO" },
    { img: "/eclipse.png", name: "Timothy Ayodele", position: "CEO" },
    { img: "/eclipse.png", name: "Kasarachi Lekwauwa", position: "CFO" },
    { img: "/eclipse.png", name: "Jesse Joan", position: "HR/Admin" },
  ];
  return (
    <div className="  px-4 py-8">
      <h1 className=" text-center font-bold text-2xl pb-12">Management Team</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div key={index} className=" flex flex-col gap-8 items-center">
            <div>
              <img src={card.img} alt="" />
            </div>
            <h1 className=" font-semibold text-xl">{card.name}</h1>
            <p>{card.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
