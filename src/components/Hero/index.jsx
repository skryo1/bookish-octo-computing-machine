import React from "react";
import HeroLogo from "../../assets/logo2.png";

const Hero = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="800">
      <div className="flex items-center justify-center">
        <img
          src={HeroLogo}
          width={600}
          height={600}
          alt="Lotus Arts"
          className="mt-[80px] select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Hero;
