import { Heading2 } from "../Heading/Heading";
import img1 from "./assets/img-1.jpg";
import instagram from "./../Footer/assets/Instagram.png";
import kolo from "./../Footer/assets/kolo_icon.webp";

import "./OurShiningStar.css";

const OurShiningStar = () => {
  return (
    <div className="OurShiningStar container pt-16 lg:pt-32">
      <div className="lg:w-2/4 text-center m-auto">
        <Heading2 className="pb-5" text={"Our Shining Star"} />
        <p className="pb-4">
          Having 9+ years of experience in construction industry, Mr. Puneet
          Ladhar is helping families to build their dream home. With motto in
          mind <strong>&quot; Makan Aapka Zimmedari Hamari&quot;</strong>
        </p>
        <p className="pb-14">
          Mr. Puneet has been delivering projects with great quality, high
          industry standards and more importantly in client&apos;s budget
        </p>
      </div>
      <div className="team-wrapper w-72 lg:w-96 m-auto pb-10">
        <div className="flex">
          <img src={img1} alt="..." className="rounded" />
        </div>
        <div className="team-info team-overlay">
          <h3 className="team-title">Puneet Ladhar</h3>
          <h6 className="team-position">Founder</h6>
          <ul className="flex ml-2 social-icon">
            <li>
              <a
                href="https://instagram.com/meacdesigns?igshid=NDk5N2NlZjQ="
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} className="w-6" />
              </a>
            </li>
            <li>
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
  );
};

export default OurShiningStar;
