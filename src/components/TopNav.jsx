const TopNav = () => {
  return (
    <div className="bg-[#003901] px-4 md:px-12 py-6 hidden md:flex  flex-wrap items-center justify-between">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-whiteText mb-4 md:mb-0">
        <div className="flex items-center gap-4">
          <img src="/phh.png" alt="" />
          <h2>08060400742</h2>
        </div>
        <div className="flex items-center gap-4">
          <img src="/phh.png" alt="" />
          <h2>08027994029</h2>
        </div>
        <div className="flex items-center gap-4">
          <img src="/emm.png" alt="" />
          <h2>www.unabenergy.com</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="flex items-center gap-4 md:gap-8">
          <img src="/yt.png" alt="YouTube" />
          <img src="/inn.png" alt="LinkedIn" />
          <img src="/igg.png" alt="Instagram" />
          <img src="/fbb.png" alt="Facebook" />
        </div>
        <div className="flex items-center gap-4 text-whiteText font-semibold">
          <h1>Contact Us</h1>
          <img src="/phh.png" alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
