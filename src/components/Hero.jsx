import { useRef } from "react";
import { curve } from "../assets";
import Button from "./Button";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <section className="pt-[12rem] -mt-[5.25rem]" id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-10">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full right-0 w-full xl:mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>
        {/* contiue from here */}
        {/* <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 bg-red-400">
          <div className="relative p"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
