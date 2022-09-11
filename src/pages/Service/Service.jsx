import React from "react";
import ServiceItem from "../../components/ServiceItem/ServiceItem";

import visaAssistance from "../../images/services/visa-assistance.jpg";
import flightBooking from "../../images/services/flight-booking.jpg";
import passportAssistance from "../../images/services/passport-assistance.jpg";
import travelInsurance from "../../images/services/travel-insurance.jpg";
import carHire from "../../images/services/car-hire.jpg";
import vacation from "../../images/services/vacation.jpg";
import hotelBooking from "../../images/services/hotel-booking.jpg";

const listOfServices = [
  {
    title: "Visa Assistance",
    imageUrl: visaAssistance,
    description: "Bla Bla Bla..."
  },
  {
    title: "Flight Booking",
    imageUrl: flightBooking,
    description: `Corporate travel\n Leisure travel\n Medical travel\n Sports travel\n Groups, Events, and Conferences travel`
  },
  {
    title: "Passport Assistance",
    imageUrl: passportAssistance,
    description: "Bla Bla Bla..."
  },
  {
    title: "Travel Insurance",
    imageUrl: travelInsurance,
    description: "Bla Bla Bla..."
  },
  {
    title: "Car Hire",
    imageUrl: carHire,
    description: "Bla Bla Bla..."
  },
  {
    title: "Vacation",
    imageUrl: vacation,
    description: "Bla Bla Bla..."
  },
  {
    title: "Hotel Booking",
    imageUrl: hotelBooking,
    description: "Bla Bla Bla..."
  }
];

const Service = () => {
  return (
    <div className="container">
      <h1 id="services" className="text-center text-5xl font-semibold">OUR SERVICES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-20">
        {
          listOfServices.map((serviceItem) => <ServiceItem key={serviceItem.title} { ...serviceItem } />)
        }
      </div>
    </div>
  );
};

export default Service;