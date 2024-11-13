import React from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceItemCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="h-full flex flex-col justify-between gap-5 bg-white hover:shadow-2xl transition-all duration-300 hover:bg-main group rounded-lg border border-black p-5"
    >
      <div className="flex flex-col gap-2 items-start max-h-56">
        <div className="group-hover:scale-[120%] truncate transition-all duration-300 w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
          <img
            src={item.icon}
            alt="icon"
            className="group-hover:scale-[120%] transition-all duration-300 w-[3rem] grayscale group-hover:invert"
          />
        </div>
        <h6 className="font-medium text-lg text-black group-hover:text-white">
          {item.title}
        </h6>
        <p className="text-gray-700 line-clamp-3   group-hover:text-black text-md">
          {item.description}
        </p>
      </div>
      <Link
        to={item.link}
        className="text-black group-hover:text-white transition-all duration-300 underline text-md flex gap-5 items-center"
      >
        Know More <PiCaretDoubleRightBold />
      </Link>
    </Link>
  );
};

export default ServiceItemCard;
