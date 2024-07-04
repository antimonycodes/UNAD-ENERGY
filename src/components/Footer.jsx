import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="px-4 py-8 md:px-12 cursor-pointer"
      style={{ background: "url(/footerbg.png)" }}
    >
      <div className="flex flex-col md:flex-row gap-12 text-whiteText">
        <div className="w-full md:w-1/5">
          <Link to="/" onClick={scrollToTop}>
            <img src="/logo.png" alt="UNAB Logo" width={100} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 flex-grow">
          <div>
            <div>
              <h2 className="text-xl font-semibold pb-4">Information</h2>
              <ul className="flex flex-col gap-4">
                <li>Our Company</li>
                <li>
                  <Link to="/contactUs" onClick={scrollToTop}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold pb-4">Support</h1>
            <ul className="flex flex-col gap-4">
              <li>89 Oba Ovarenwen street, Gwarimpa, Abuja.</li>
              <li>
                <a href="tel:+2348027994029">+234 802 799 4029</a>
              </li>
              <li>
                <a href="mailto:unabenergy04@gmail.com">
                  unabenergy04@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold pb-4">Social Media</h1>
            <div className="flex gap-4">
              <img src="/insta.png" alt="Instagram" />
              <img src="/facebook.png" alt="Facebook" />
              <img src="/linkedin.png" alt="LinkedIn" />
              <img src="/youtube.png" alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col md:flex-row md:justify-between gap-4 text-[#F9FDF980] pt-16">
        <p>&copy; {currentYear} UNAB. All Rights Reserved</p>
        <p className="text-sm">Terms and Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
