import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.jpg";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      id="banner"
      loading="lazy"
      className="min-h-screen w-full relative flex justify-center bg-opacity-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
      }}
    >
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5">
        <div className="flex flex-col gap-4 items-start justify-center">
          {/* <p
            data-aos="fade-right"
            className="bg-[#ECECF2] p-1 text-gray-100 text-sm"
          >
            IT Services
          </p> */}
          <h1
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight"
          >
            NEXTGENAI SYSTEMS LLP - Innovating for a Smarter, Connected Future
          </h1>
          <p
            data-aos="fade-right"
            className="text-sm text-gray-400 focused-textno"
          >
            At NEXTGENAI SYSTEMS LLP, we ignite transformative digital solutions
            with our passionate team of expert developers, designers, and
            technologists. We specialize in crafting unique websites, mobile
            apps, and automation systems tailored to your business's DNA. Our
            approach blends innovation, strategy, and technology to deliver
            impactful, lasting results. We’re committed to not just meeting your
            needs but driving your business forward. Partner with us to create a
            digital legacy that unlocks new growth and paves the path to success
            in today’s digital era.
          </p>
          <Link
            to="/contact"
            data-aos="fade-right"
            className="primary-btn mt-10 hover:text-black"
          >
            Get Started
          </Link>
        </div>
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
          <img
            id="robot"
            src={robot}
            loading="lazy"
            alt="robot"
            className="h-[30vh] lg:h-[40vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
