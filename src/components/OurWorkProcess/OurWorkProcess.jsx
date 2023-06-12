import { Heading2, Heading3 } from "../Heading/Heading";
import img1 from "./assets/img-1.png";
import img2 from "./assets/img-2.png";
import img3 from "./assets/img-3.png";

const ourWorkProcess = [
  {
    title: "Request a meeting",
    icon: img1,
  },
  {
    title: "Needs and planning",
    icon: img2,
  },
  {
    title: "Let’s make it happen",
    icon: img3,
  },
];

const OurWorkProcess = () => {
  return (
    <div className="OurWorkProcess container pt-16 lg:pt-32">
      <Heading2 className="pb-5 lg:pb-8 text-center" text={"Our Work Process"} />
      <ul className="flex flex-col lg:flex-row justify-between lg:mx-20">
        {ourWorkProcess.map(({ title, icon }) => {
          return (
            <li
              key={title}
              className="flex flex-col justify-center items-center mt-10 lg:mt-0"
            >
              <img src={icon} alt={title} className="h-36 flex mb-6" />
              <Heading3 text={title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurWorkProcess;
