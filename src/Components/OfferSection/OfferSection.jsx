import React from "react";
import { Link } from "react-router";

const OfferSection = () => {
  return (
    <section className="bg-yellow-50 dark:bg-gray-800 max-w-5xl py-12 rounded-xl mx-auto px-4 mt-5 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">🎁 Special Offer</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        Track 10 items this month and get exclusive food-saving tips and badges! Join our mission to reduce food waste.
      </p>
      <Link to='/fridge' className="btn btn-primary bg-[#FFC107]">Explore Now</Link>
    </section>
  );
};

export default OfferSection;
