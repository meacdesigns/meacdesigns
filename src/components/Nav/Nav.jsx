import { NavLink } from "react-router-dom";
import constants from "../../constants/common";
import logo from "./assets/logo-footer.png";

import { HomeFilled, PhoneFilled } from "@ant-design/icons";

const Nav = () => {
  return (
    <div className="fixed w-full bg-white px-2 py-3 shadow-md z-50">
      <div className="container flex justify-between w-full items-center">
        <div>
          <NavLink to={"/"}>
            <img className="w-12 lg:w-16" src={logo} alt={constants.ALT_DEFULT} />
          </NavLink>
        </div>
        <nav>
          <ul className="flex">
            <li className="text-black uppercase text-sm font-semibold pr-4">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-primary" : ""
                }
                to={"/"}
              >
                <HomeFilled className="lg:hidden block text-xl" title="Home"/>

                <span className="hidden lg:block">Home</span>
              </NavLink>
            </li>
            <li className="text-black uppercase text-sm font-semibold">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-primary" : ""
                }
                to={"/contact-us"}
              >
                <PhoneFilled className="lg:hidden block text-xl" title="Contact us"/>
                <span className="hidden lg:block ">Contact us</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
