import React from "react";
import { Link } from "react-router";

const OfferSection = () => {
  return (
    <section className="bg-yellow-50 dark:bg-gray-800 max-w-5xl py-12 rounded-xl mx-auto px-4 mt-5 text-center">
      <h2 className="text-2xl font-bold bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">🎁 Special Offer</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        Track 10 items this month and get exclusive food-saving tips and badges! Join our mission to reduce food waste.
      </p>
      <Link to='/fridge' className="btn bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 text-white">Explore Now</Link>
    </section>
  );
};

export default OfferSection;
