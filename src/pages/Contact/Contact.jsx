import React from "react";
// import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Contact = () => {
  return (
    <div>
      {/* <Breadcrumbs title="Contact us" /> */}
      <h1 id="contact" className="text-center text-5xl font-semibold">CONTACT US</h1>
      <div className="container py-16 ">
        <div className="pb-8">
          <h1 className="text-4xl font-bold font-Roboto">
            Drop a <span className="text-primary">Message</span>{" "}
          </h1>
          <p className="text-gray-400 py-2">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 justify-between">
          <div className="">
            <div className="">
              <fieldset>
                <label htmlFor="fname">First name:</label>
                <input
                  className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                  type="text"
                  id="name"
                  name="name"
                />
                <br />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                  className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                  type="email"
                  id="email"
                  name="email"
                />
                <br />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea
                  className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                  rows="4"
                  cols="50"
                />
                <br />
                <button className="bg-white mt-4 border border-primary text-black py-3 px-6 rounded-md hover:bg-transparent hover:bg-primary hover:text-white transition">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
          <div className="inset-0 lg:px-16 px-8">
            <h1 className="text-4xl py-2 font-Poppins font-semibold">
              Get In <span className="text-primary"> Touch</span>
            </h1>
            <div className="flex py-4">
              <div className="">
                <i className="fas fa-map-marker-alt text-3xl text-secondary"></i>
              </div>
              <div className="px-8">
                <p>Dar Free Market Mall, Office F-32, First Floor. Ali Hassan Mwinyi Road, Oysterbay</p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="">
                <i className="far fa-envelope text-3xl text-secondary"></i>
              </div>
              <div className="px-8">
                <p>info@makenis.com</p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="">
                <i className="fas fa-phone text-3xl text-secondary"></i>
              </div>
              <div className="px-8 font-bold">
                <p>+255-764-172-973</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
