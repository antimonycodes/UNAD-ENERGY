const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="px-4 py-8 md:px-12"
      style={{ background: "url(/footerbg.png)" }}
    >
      <div className="  flex flex-col md:flex-row gap-12 text-whiteText ">
        <div className="w-full md:basis-[20%]">
          <img src="/logo.png" alt="" width={100} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className=" col-span-2">
            <div className=" flex justify-between gap-0 md:gap-4">
              <div>
                <h2 className=" text-xl font-semibold pb-4">Information</h2>
                <ul className=" flex flex-col gap-4">
                  <li>OUr Company</li>
                  <li>Solar Energy Solution </li>
                  <li>Energy calculator</li>
                  <li>Contact</li>
                  <li>Careers</li>
                </ul>
              </div>
              {/*  */}
              <div>
                <h2 className=" text-xl font-semibold pb-4">Quick Links</h2>
                <ul className=" flex flex-col gap-4">
                  <li>News</li>
                  <li>Blogs</li>
                  <li>whitepaper</li>
                  <li>solarbase Login</li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <h1 className=" text-xl font-semibold pb-4">Support</h1>
            <ul className=" flex flex-col gap-4">
              <li>123 Road Lago,Nigeria</li>
              <li>07002288888</li>
              <li>kelvinclarkkent@gmail.com</li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h1 className=" text-xl font-semibold pb-4">Social Medias</h1>
            <div className=" flex gap-4">
              <img src="/insta.png" alt="" />
              <img src="/facebook.png" alt="" />
              <img src="/linkedin.png" alt="" />
              <img src="/youtube.png" alt="" />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className=" text-center flex flex-col md:flex-row md:justify-between gap-4 text-[#F9FDF980] pt-8">
        <p>&copy; {currentYear} UNAB. All Rights Reserved</p>

        <p className=" text-sm">Term and Condition Private Policy</p>
      </div>
    </div>
  );
};

export default Footer;
