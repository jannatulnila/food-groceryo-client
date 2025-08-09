import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const ExpairedFoodSection = () => {
    const [expairedFood, setExpairedFood] = useState([]);
    const [showAll, setShowAll] = useState(false);


    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/foods/expired`)
            .then((res) => {
                setExpairedFood(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const displayedFoods = showAll ? expairedFood : expairedFood.slice(0, 6);


    return (
        <div className=" p-4 w-10/12 mx-auto">
            <h2 className="text-2xl font-bold text-primary dark:text-[#FFC107] text-center mb-4">Expired Food Items</h2>
            <p className=" text-semibold text-center mb-2">
                Expired Food Items ({expairedFood.length})
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedFoods.length === 0 ? (
                    <p>No expired foods found.</p>
                ) : (
                    displayedFoods.map((food, index) => (
                        <motion.div
                            key={food._id}
                            className="bg-red-200 rounded-xl dark:bg-red-800 shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: index * 0.3
                            }}
                        >
                            <div className='w-40 h-40 overflow-hidden rounded-md flex-shrink-0'>
                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="w-full h-48 object-contain rounded mb-3"
                                />
                            </div>
                            <div className='flex flex-col mb-4 justify-between'>
                                <h3 className="text-lg font-semibold">{food.title}</h3>
                                <p><strong>Category:</strong> {food.category}</p>
                                <p><strong>Quantity:</strong> {food.quantity}</p>
                                <p><strong>Expiry Date:</strong> {new Date(food.expiryDate).toLocaleDateString()}</p>
                                <span className="absolute top-2 right-2 bg-red-600 dark:bg-red-400 dark:text-black text-white px-2 py-1 rounded text-xs font-bold">
                                    Expired
                                </span>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>


            {expairedFood.length > 6 && (
                <div className="flex justify-center mt-6">
                    <Link
                        to="/allExpiredFoods"
                        className="px-5 py-2 border border-primary text-primary hover:bg-gray-100 rounded-md transition duration-300"
                    >
                        View All
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ExpairedFoodSection;



