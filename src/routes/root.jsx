import CompanyIntro from "../components/CompanyIntro/CompanyIntro";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import OurShiningStar from "../components/OurShiningStar/OurShiningStar";
import OurWorkProcess from "../components/OurWorkProcess/OurWorkProcess";
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer";
import withPrimaryLayout from "../layout/primary-layout";

const Root = () => {
  return (
    <>
      <HeroCarousel />
      <CompanyIntro />
      <WhatWeOffer />
      <OurWorkProcess />
      <OurShiningStar />
    </>
  );
};

const PLRoot = withPrimaryLayout(Root);

export default PLRoot;
