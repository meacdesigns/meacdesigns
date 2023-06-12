import constants from "../../constants/common";
import OurServices from "../OurServices/OurServices";
import FooterAddress from "./FooterAddress";
import footerLogo from "./assets/logo-footer.png";
import instagram from "./assets/instagram.png";
import kolo from "./assets/kolo_icon.webp";

const { COMPANY_NAME_SHORT, TAGLINE } = constants;

const Footer = () => {
  return (
    <footer>
      <div className="top-section bg-secondary py-16 lg:py-20">
        <div className="container flex justify-between text-white text-base flex-col lg:flex-row">
          <div className="footer-logo flex-1 flex justify-center mb-10 lg:mb-0">
            <div className="w-44 lg:w-52">
              <img
                className="max-w-full"
                src={footerLogo}
                alt={`${COMPANY_NAME_SHORT} | ${TAGLINE}`}
              />
            </div>
          </div>

          <div className="flex-1 mx-0 lg:mx-16 mb-10 lg:mb-0">
            <FooterAddress />
          </div>
          <div className="flex-1">
            <OurServices />
          </div>
        </div>
      </div>
      <div className="bottom-section bg-primary py-5 text-black">
        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center container">
          <div className="text-xs lg:text-sm">&copy; 2023 MEAC Designs</div>
          <div className="flex justify-center items-center mt-4 lg:mt-0">
            <span className="font-semibold">We are on:</span>
            <ul className="flex ml-2">
              <li>
                <a
                  href="https://instagram.com/meacdesigns?igshid=NDk5N2NlZjQ="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} className="w-6" />
                </a>
              </li>
              <li className="ml-2">
                <a
                  href="https://koloapp.in/pro/puneet-ladhar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={kolo} className="w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
