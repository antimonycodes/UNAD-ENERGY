import React from "react";

const TopNav = () => {
  const handlePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className="bg-[#003901] px-4 md:px-12 py-6 hidden lg:flex flex-wrap items-center justify-between">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-whiteText mb-4 md:mb-0">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handlePhoneCall("08060400742")}>
          <img src="/phh.png" alt="Phone" />
          <h2>08060400742</h2>
        </div>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handlePhoneCall("08027994029")}>
          <img src="/phh.png" alt="Phone" />
          <h2>08027994029</h2>
        </div>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleEmailClick("info@unabenergy.com")}>
          <img src="/emm.png" alt="Email" />
          <h2>www.unabenergy.com</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="flex items-center gap-4 md:gap-8">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/yt.png" alt="YouTube" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/inn.png" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/igg.png" alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/fbb.png" alt="Facebook" />
          </a>
        </div>
        <div className="flex items-center gap-4 text-whiteText font-semibold cursor-pointer" onClick={() => handleEmailClick("info@unabenergy.com")}>
          <h1>Contact Us</h1>
          <img src="/phh.png" alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
