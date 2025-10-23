// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion";
// import { FaExclamationTriangle, FaUtensils, FaCalendarAlt, FaLayerGroup, FaHashtag } from 'react-icons/fa';

// const AllExpiredFoods = () => {
//     const [expiredFoods, setExpiredFoods] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchExpiredFoods = async () => {
//             try {
//                 const response = await axios(`${import.meta.env.VITE_API_URL}/foods/expired`);
//                 setExpiredFoods(response.data);
//             } catch (error) {
//                 console.error('Error fetching expired foods:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchExpiredFoods();
//     }, []);

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-400 border-t-transparent mx-auto mb-4"></div>
//                     <p className="text-lg bg-primary bg-clip-text text-transparent font-semibold">
//                         Loading expired foods...
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <motion.div
//                     className="text-center mb-8"
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h2 className="text-xl md:text-2xl font-bold mb-2">
//                         <span className="bg-primary bg-clip-text text-transparent">
//                             All Expired Food Items
//                         </span>
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-300 text-md mb-2">
//                         Keep track of expired items to reduce food waste
//                     </p>
//                     <div className="inline-flex items-center bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full px-4 py-2 shadow-lg">
//                         <FaExclamationTriangle className="mr-2" />
//                         <span className="text-sm font-semibold">Total Expired Items: {expiredFoods.length}</span>
//                     </div>
//                 </motion.div>

//                 {/* Expired Foods Grid */}
//                 {expiredFoods.length === 0 ? (
//                     <motion.div
//                         className="text-center py-16"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 max-w-md mx-auto">
//                             <FaUtensils className="text-6xl text-green-400 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
//                                 No expired foods found!
//                             </h3>
//                             <p className="text-gray-500 dark:text-gray-500">
//                                 Great job managing your food inventory!
//                             </p>
//                         </div>
//                     </motion.div>
//                 ) : (
//                     <motion.div
//                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         {expiredFoods.map((food, index) => (
//                             <motion.div
//                                 key={food._id}
//                                 className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 relative"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ 
//                                     duration: 0.4, 
//                                     delay: index * 0.1 
//                                 }}
//                                 whileHover={{ y: -5 }}
//                             >
//                                 {/* Expired Badge */}
//                                 <div className="absolute top-3 right-3 z-10">
//                                     <span className="bg-red-500 text-white px-3 py-1 text-xs rounded-full font-bold shadow-lg flex items-center gap-1">
//                                         <FaExclamationTriangle className="text-xs" />
//                                         Expired
//                                     </span>
//                                 </div>

//                                 {/* Food Image */}
//                                 <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
//                                     <img
//                                         src={food.image}
//                                         alt={food.title}
//                                         className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                                     />
//                                 </div>

//                                 {/* Food Details */}
//                                 <div className="p-4">
//                                     <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
//                                         {food.title}
//                                     </h3>
                                    
//                                     <div className="space-y-2 mb-4">
//                                         <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                                             <FaLayerGroup className="text-amber-500 text-sm" />
//                                             <span className="text-sm"><strong>Category:</strong> {food.category}</span>
//                                         </div>
                                        
//                                         <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                                             <FaHashtag className="text-amber-500 text-sm" />
//                                             <span className="text-sm"><strong>Quantity:</strong> {food.quantity}</span>
//                                         </div>
                                        
//                                         <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
//                                             <FaCalendarAlt className="text-red-500 text-sm" />
//                                             <span className="text-sm font-semibold">
//                                                 Expired: {new Date(food.expiryDate).toLocaleDateString()}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Warning Message */}
//                                     <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-3 rounded">
//                                         <p className="text-red-800 dark:text-red-200 text-xs font-medium">
//                                             This item has expired and should not be consumed
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AllExpiredFoods;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaUtensils, FaCalendarAlt, FaLayerGroup, FaHashtag } from 'react-icons/fa';

const AllExpiredFoods = () => {
    const [expiredFoods, setExpiredFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchExpiredFoods = async () => {
            try {
                const response = await axios(`${import.meta.env.VITE_API_URL}/foods/expired`);
                setExpiredFoods(response.data);
            } catch (error) {
                console.error('Error fetching expired foods:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExpiredFoods();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-400 border-t-transparent mx-auto mb-4"></div>
                    <p className="text-lg bg-primary bg-clip-text text-transparent font-semibold">
                        Loading expired foods...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                        All Expired Food Items
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-md mb-2">
                        Keep track of expired items to reduce food waste
                    </p>
                    <div className="inline-flex items-center bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full px-4 py-2 shadow-lg">
                        <FaExclamationTriangle className="mr-2" />
                        <span className="text-sm font-semibold">Total Expired Items: {expiredFoods.length}</span>
                    </div>
                </motion.div>

                {/* Expired Foods Grid */}
                {expiredFoods.length === 0 ? (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                            <FaUtensils className="text-6xl text-green-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                No expired foods found!
                            </h3>
                            <p className="text-gray-500 dark:text-gray-500">
                                Great job managing your food inventory!
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {expiredFoods.map((food, index) => (
                            <motion.div
                                key={food._id}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.1 
                                }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Expired Badge */}
                                <div className="absolute top-3 right-3 z-10">
                                    <span className="bg-red-500 text-white px-3 py-1 text-xs rounded-full font-bold shadow-lg flex items-center gap-1">
                                        <FaExclamationTriangle className="text-xs" />
                                        Expired
                                    </span>
                                </div>

                                {/* Food Image */}
                                <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                    <img
                                        src={food.image}
                                        alt={food.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* Food Details */}
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                                        {food.title}
                                    </h3>
                                    
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                            <FaLayerGroup className="text-amber-500 text-sm" />
                                            <span className="text-sm"><strong>Category:</strong> {food.category}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                            <FaHashtag className="text-amber-500 text-sm" />
                                            <span className="text-sm"><strong>Quantity:</strong> {food.quantity}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                            <FaCalendarAlt className="text-red-500 text-sm" />
                                            <span className="text-sm font-semibold">
                                                Expired: {new Date(food.expiryDate).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Warning Message */}
                                    <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-3 rounded">
                                        <p className="text-red-800 dark:text-red-200 text-xs font-medium">
                                            This item has expired and should not be consumed
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AllExpiredFoods;


