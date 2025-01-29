import React from "react";
import { Link } from "react-router-dom";
// import { companyDetails, logoImg, routes } from "../constant";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import logoImg from "../../assets/images/logo/logo1.png";
import { companyDetails, websitePagesLinks } from "../../constant";
import { FaInstagram } from "react-icons/fa";
// import asdf from "../../assets/images/logo/logo1.png";
const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-primary/70">
      <div className="py-4 top-0 w-full bg-black/50 backdrop-blur-md z-50 text-black">
        <div className="wrapper flex justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
            <Link to="/" className="cursor-pointer relative">
              <img src={logoImg} className="h-[4rem] md:h-[5rem] " alt="logo" />
              {/* <small className="text-sm font-light text-[#CAA562] absolute bottom-0 left-1/2 -translate-x-1/2">
                Parvesha
              </small> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper h-full flex flex-col  rounded-3xl items-center py-[8rem] gap-3 text-[#2e2e45] text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc !font-semibold">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r border border-transparent hover:border-slate-400 rounded-full px-5 text-sm font-medium py-3 from-orange-300 to-[#e98521]  hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-r hover:from-primary hover:to-primary cursor-pointer transition-all duration-300 w-fit mt-4 hover:text-black text-white"
        >
          Home
        </Link>
      </div>
      <div className="py-14 bg-[#000000]">
        <div className="wrapper text-white">
          <div className="flex md:flex-row flex-col justify-between gap-10">
            <div className="flex flex-col items-center">
              <img src={logoImg} className="h-[4rem] md:h-[5rem]" alt="" />
              <p className="desc md:max-w-[15rem] text-sm text-center mt-5">
                We have rapidly grown into a trusted partner for organizations
                seeking digital transformation, enhanced operational efficiency.
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h6 className="font-medium mb-1">Quick Links</h6>
                {websitePagesLinks.map(({ id, label, link }) => (
                  <Link
                    key={id}
                    to={link}
                    className="text-white/70 desc text-sm hover:text-primary transition-all duration-300"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="font-medium mb-1">Contact Us</h6>
                <div className="flex flex-col">
                  <h6 className="text-[.9rem] mb-1">Phone</h6>
                  <Link
                    to={`tel:${companyDetails.phone}`}
                    className="text-white/70 desc text-sm"
                  >
                    {companyDetails.phone}
                  </Link>
                </div>
                <div className="flex flex-col mt-2">
                  <h6 className="text-[.9rem] mb-1">Office Address</h6>
                  <p className="text-white/70 desc text-sm max-w-[15rem]">
                    {companyDetails.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-7 border-t text-gray-500 border-primary w-full">
            <div className="flex justify-center gap-5 w-full">
              <div className="flex gap-5 items-center mt-5">
                <Link>
                  <BsFacebook className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
                </Link>
                <Link
                  to={
                    "https://www.instagram.com/next_genaisystems1?igsh=YjQzMXB6dzN1c3E4"
                  }
                  className="text-xl text-gray-500 hover:text-primary transition-all duration-300"
                >
                  <BsInstagram />
                </Link>
                <Link>
                  <BsLinkedin className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
                </Link>
                <Link>
                  <BsYoutube className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
