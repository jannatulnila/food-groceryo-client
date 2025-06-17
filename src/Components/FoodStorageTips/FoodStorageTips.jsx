import React from 'react';
import { motion } from "framer-motion";


const tips = [
    { id: 1, title: "Keep Dairy Cold", tip: "Store dairy products below 4°C to prevent spoilage." },
    { id: 2, title: "Freeze Meats", tip: "Freeze meat if not using within 2 days of purchase." },
    { id: 3, title: "Dry Store Grains", tip: "Keep rice, pasta, and flour in airtight containers." },
];
const FoodStorageTips = () => {

    return (
        <div className='py-12 mx-auto w-11/12 px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Food Storage Tips</h2>
            <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx auto'>
                {
                    tips.map(({ id, title, tip }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-300 p-6 rounded-xl shadow-md"
                        >
                            <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
                            <p className='text-center'>{tip}</p>
                        </motion.div>

                    ))
                }
            </div>

        </div>
    );
};

export default FoodStorageTips;