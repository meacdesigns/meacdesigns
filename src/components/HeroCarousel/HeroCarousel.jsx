import { Carousel } from "antd";

import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";

import "./HeroCarousel.css";

const items = [
  {
    image: slide1,
    number: "01",
    title: "Designs to impress!",
    tagline: () => {
      return <>Experience your dream house in 3D elevation</>;
    },
  },
  {
    image: slide2,
    number: "02",
    title: "Transform your interior magic!",
    tagline: () => {
      return (
        <>
          Interior Designs that
          <br /> inspire awe
        </>
      );
    },
  },
  {
    image: slide3,
    number: "03",
    title: "Vaastu-compliant planning!",
    tagline: () => {
      return (
        <>Transform your space with expert Vaastu-compliant floor planning</>
      );
    },
  },
];

const HeroCarousel = () => {
  return (
    <div className="pt-16 lg:pt-0">
      <Carousel autoplay>
        {items.map(({ image, title, tagline }, index) => {
          return (
            <>
              <div key={index} className="relative lg:hidden ">
                <img className="w-full" src={image} alt="" />
                <div className="absolute bottom-6 w-full text-center">
                  <h5 className="text-primary font-semibold">{title}</h5>
                </div>
              </div>

              <div key={index} className="hidden lg:block relative">
                <img className="w-full" src={image} alt="" />
                <div className="absolute bottom-12 w-1/2 -translate-x-1/2 left-2/4 text-center">
                  <h5 className="text-primary font-semibold text-lg">
                    {title}
                  </h5>
                  <p className="text-white text-5xl font-semibold leading-tight">
                    {tagline()}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
