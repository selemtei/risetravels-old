import React from "react";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen py-36 bg-fixed"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="container">
        <h1 className="text-6xl capitalize text-gray-800 font-medium mb-4">
          Leading Travel Agency
        </h1>
        <p className="w-2/5">
          We are here to provide the best travel experiences to you.
        </p>
      </div>
    </div>
  );
};

export default Banner;
