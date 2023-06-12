import { Heading2, Heading3 } from "../Heading/Heading";
import { Tagline2 } from "../Tagline/Tagline";

const labels = {
  heading: "What We Offer",
  tagline:
    "While focusing on your requirements, we deliver these services in your own budget",
};

const ourOfferings = [
  {
    title: "Floor Planning",
    description:
      "The base and the most important part of building design is floor planning. Get custom 2D and 3D floor plans",
    icon: "fa-layer-group",
  },
  {
    title: "3D Elevation",
    description:
      "Visualize your dream home, before it is built. Make a impression with our eye-catching 3D elevation designs",
    icon: "fa-layer-group",
  },
  {
    title: "Interior Design",
    description:
      "Get inspired and make your vision a reality with our top-notch interior design services",
    icon: "fa-layer-group",
  },
  {
    title: "Structure Design",
    description:
      "Build with confidence knowing that our expert team has your structure design needs covered",
    icon: "fa-layer-group",
    styleClass: "lg:mr-0",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="container pt-16 lg:pt-32">
      <div className="text-center w-11/12 m-auto">
        <Heading2 className={"pb-4"} text={labels.heading} />
        <Tagline2 className={"pb-8 lg:pb-12"}  text={labels.tagline} />
      </div>
      <div className="flex flex-col lg:flex-row">
        {ourOfferings.map(({ title, description, styleClass }, index) => {
          return (
            <div
              key={title}
              className={`flex-1 relative shadow-contactcard lg:mr-7 mb-7 lg:mb-0 ${styleClass}`}
            >
              <div className="absolute top-0 right-0 bg-gray-50 text-gray-400 p-2.5 text-2xl leading-0">
                0{index + 1}
              </div>
              <div className="px-7 py-14">
                <Heading3 text={title} />
                <div>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeOffer;
