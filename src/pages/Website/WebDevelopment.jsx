import React from "react";
import img1 from "../../assets/images/servicewebdesignone.jpg";
import img2 from "../../assets/images/servicewebdesigntwo.jpg";
import { Link } from "react-router-dom";
import { services } from "../../constant";
import { IoIosArrowRoundForward } from "react-icons/io";

const WebDevelopment = () => {
  const next = services[1];
  const details = services[0];
  return (
    <div className="flex flex-col gap-10 text-black">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Web Designing
        </h2>
        <p data-aos="fade-up" className="description">
          We understand that your website is more than just an online
          presence—it’s a critical business asset that showcases your brand,
          engages your audience, and drives growth. That’s why we focus on
          delivering exceptional website development services that blend
          creativity, functionality, and cutting-edge technology to create
          websites that truly stand out. Whether you’re a growing business
          looking to establish a professional online presence or a large
          enterprise seeking a dynamic e-commerce platform, we tailor our
          website development solutions to meet your unique needs. We don’t just
          build websites; we create engaging digital experiences that convert
          visitors into loyal customers, helping your business thrive in a
          competitive digital landscape.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Key Features of Our Website Development Services
        </h2>
      </div>
      <div className="h-full w-full">
        <img
          loading="lazy"
          src={img2}
          className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
          alt="web development"
        />
      </div>
      <div className="grid lg:grid-cols-1 gap-7">
        <div className="flex flex-col gap-4">
          {details.keyPoints.points.map((item) => (
            <div key={item.heading} className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                  ✓
                </div>
                <h3 className="text-lg font-semibold">{item.heading}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <div className="flex flex-col sm:flex-row w-full justify-end gap-6">
        <Link to={next.link} className="flex items-center self-end gap-3">
          <img
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;
