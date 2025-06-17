import React from 'react';
import { motion } from "framer-motion";

const facts = [
    "Over 1.3 billion tons of foods is wasted every year.",
    " 'Best before' dates indicate quality, not safety..",
    "Proper tracking can reduce food waste by up to 30%.",
];

const ExpiryFacts = () => {
    return (
        <div className='py-12 w-11/12 mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Expiry Facts</h2>
            <div className='max-w-4xl mx-auto space-x-4'>
                {
                    facts.map((fact, index) => (
                        <motion.p
                            key={index}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="text-lg p-4 bg-gray-300 rounded-md shadow"
                        >
                            {fact}
                        </motion.p>
                    )) }

            </div>
        </div>
    );
};

export default ExpiryFacts;