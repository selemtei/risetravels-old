import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="">
          <div className="flex">
            <span className="text-2xl font-Poppins border-l-4 px-2 border-primary">
              RISE
              <span>
                <i className="fas fa-plane-departure text-blue-500 animate-pulse"></i>
              </span>
              TRAVELS
            </span>
          </div>
          <p className="text-justify py-4">
            We are the leading trip advisors to ensure your trip is well planned out. 
            You will definetely enjoy working with us since we do care.
          </p>
          <div className="text-primary text-2xl flex">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/makenistz/"
            >
              <i className="fab fa-instagram-square  ml-2"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/makenistz">
              <i className="fab fa-twitter-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-Poppins uppercase border-primary border-l-4 px-2">
            Quick Links
          </h1>
          <ul className="py-4">
            <li className="py-1 hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/about">About Us</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/services">Services</Link>
            </li>
            <li className="py-1  hover:text-primary">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl uppercase font-Poppins uppercase border-primary border-l-4 px-2">
            CONTACT INFORMATION
          </h1>

          <div className="py-4">
            <p>
              <i className="fas fa-phone-alt text-primary"></i> +255-764-172-973
            </p>
            <p className="py-2">
              <i className="far fa-envelope text-primary"></i>{" "}
              info@makenis.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt text-primary"></i>{" "}
              Dar Free Market Mall, Office F-32, First Floor. Ali Hassan Mwinyi Road, Oysterbay
            </p>
          </div>
        </div>

        <div className="">
          <h1 className="text-2xl font-Poppins border-l-4 px-2 border-primary">
            SUBSCRIBE
          </h1>
          <p className="py-4">Subscribe for Our Weekly Newsletter.</p>
          <div className="py-4 flex">
            <input
              type="email"
              className="border px-4 border-primary border-r-0  py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="Your Email Address"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
