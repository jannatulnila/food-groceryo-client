import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const ExpairedFoodSection = () => {
    const [expairedFood, setExpairedFood] = useState([]);



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

    return (
        <div className="expired-food-section p-4 w-11/12 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Expired Food Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expairedFood.length === 0 ? (
                    <p>No expired foods found.</p>
                ) : (
                    expairedFood.map((food, index) => (
                        <motion.div
                            key={food._id}
                            className="bg-red-200 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: index * 0.3
                            }}
                        >
                            <div>
                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="w-full h-48 object-cover rounded mb-3"
                                />
                            </div>
                            <div className='flex flex-col mb-4 justify-between'>
                                <h3 className="text-lg font-semibold">{food.title}</h3>
                                <p><strong>Category:</strong> {food.category}</p>
                                <p><strong>Quantity:</strong> {food.quantity}</p>
                                <p><strong>Expiry Date:</strong> {new Date(food.expiryDate).toLocaleDateString()}</p>
                                <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                                    Expired
                                </span>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ExpairedFoodSection;



