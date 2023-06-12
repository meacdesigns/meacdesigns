import { useState } from "react";
import constants from "../../constants/common";
import CompanyIntroImg from "./assets/about-01.jpeg";

import "./CompanyIntro.css";
import { useEffect } from "react";

const CompanyIntro = () => {
  const [counter, setCounter] = useState(1);
  const counterValid = counter < 9;

  useEffect(() => {
    const intervalId =
      counterValid && setInterval(() => setCounter((t) => t + 1), 500);
    return () => clearInterval(intervalId);
  }, [counterValid]);

  return (
    <div className="container pt-16 lg:pt-32">
      <div className="flex justify-between w-full flex-col lg:flex-row">
        <div className="flex-1 w-11/12">
          <h2 className="text-primary uppercase font-semibold pb-3"> DESIGNING SPACES BUILDING DREAMS </h2>
          <div>
            <h1 className={`text-3xl lg:text-4xl font-semibold text-heading2`}>
              We specialize in Space <span className="text-primary">&</span>{" "}
              Resource Management
            </h1>
            <p className="pt-6 pb-11">
              With over 9+ years of experience, our team specializes in bringing
              out the best in every project while meeting budget and
              requirement.
            </p>
            <div className="counter-box">
              <div className="counter-border"></div>
              <div className="counter-content">
                <p className="counter-number mb-0 countup">{counter}</p>
                <span className="counter-info">
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end mt-12 lg:mt-0">
          <img
            className="flex"
            src={CompanyIntroImg}
            alt={constants.ALT_DEFULT}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
