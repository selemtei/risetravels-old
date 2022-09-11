import React from "react";

const ServiceItem = ({ title, imageUrl, description }) => {
  return (
    <>
      <div className="hover:shadow-lg group">
        <div className="h-1/2">
          <img className="" src={imageUrl} alt="" />
        </div>
        <div className="bg-card-bg group-hover:bg-primary rounded-t-3xl relative bottom-8">
          <h1 className="text-1xl border-b-2 px-8 text-primary group-hover:text-white border-red-600 py-4">
            {title}
          </h1>
          <div className="px-8 py-4">
            <p className="text-justify">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
