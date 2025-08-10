// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router';
// // import { motion } from "framer-motion";

// // const ExpairedFoodSection = () => {
// //     const [expairedFood, setExpairedFood] = useState([]);
// //     const [showAll, setShowAll] = useState(false);


// //     useEffect(() => {
// //         axios(`${import.meta.env.VITE_API_URL}/foods/expired`)
// //             .then((res) => {
// //                 setExpairedFood(res.data)
// //                 console.log(res.data)
// //             })
// //             .catch(err => {
// //                 console.log(err)
// //             })
// //     }, [])

// //     const displayedFoods = showAll ? expairedFood : expairedFood.slice(0, 6);


// //     return (
// //         <div className=" p-4 w-10/12 mx-auto">
// //             <h2 className="text-2xl font-bold text-primary dark:text-[#FFC107] text-center mb-4">Expired Food Items</h2>
// //             <p className=" text-semibold text-center mb-2">
// //                 Expired Food Items ({expairedFood.length})
// //             </p>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {displayedFoods.length === 0 ? (
// //                     <p>No expired foods found.</p>
// //                 ) : (
// //                     displayedFoods.map((food, index) => (
// //                         <motion.div
// //                             key={food._id}
// //                             className="bg-red-200 rounded-xl dark:bg-red-800 shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4"
// //                             initial={{ opacity: 0, y: 80 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true }}
// //                             transition={{
// //                                 duration: 0.8,
// //                                 ease: "easeOut",
// //                                 delay: index * 0.3
// //                             }}
// //                         >
// //                             <div className='w-40 h-40 overflow-hidden rounded-md flex-shrink-0'>
// //                                 <img
// //                                     src={food.image}
// //                                     alt={food.title}
// //                                     className="w-full h-48 object-contain rounded mb-3"
// //                                 />
// //                             </div>
// //                             <div className='flex flex-col mb-4 justify-between'>
// //                                 <h3 className="text-lg font-semibold">{food.title}</h3>
// //                                 <p><strong>Category:</strong> {food.category}</p>
// //                                 <p><strong>Quantity:</strong> {food.quantity}</p>
// //                                 <p><strong>Expiry Date:</strong> {new Date(food.expiryDate).toLocaleDateString()}</p>
// //                                 <span className="absolute top-2 right-2 bg-red-600 dark:bg-red-400 dark:text-black text-white px-2 py-1 rounded text-xs font-bold">
// //                                     Expired
// //                                 </span>
// //                             </div>
// //                         </motion.div>
// //                     ))
// //                 )}
// //             </div>


// //             {expairedFood.length > 6 && (
// //                 <div className="flex justify-center mt-6">
// //                     <Link
// //                         to="/allExpiredFoods"
// //                         className="px-5 py-2 border border-primary text-primary hover:bg-gray-100 rounded-md transition duration-300"
// //                     >
// //                         View All
// //                     </Link>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default ExpairedFoodSection;



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';  // make sure it's react-router-dom
// import { motion } from "framer-motion";

// const ExpairedFoodSection = () => {
//   const [expairedFood, setExpairedFood] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_API_URL}/foods/expired`)
//       .then((res) => {
//         setExpairedFood(res.data);
//         console.log(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const displayedFoods = showAll ? expairedFood : expairedFood.slice(0,8 );

//   return (
//     <div className="p-4 w-11/12 mx-auto">
//       <h2 className="text-2xl font-bold text-primary dark:text-[#FFC107] text-center mb-4">
//         Expired Food Items
//       </h2>
//       <p className="font-semibold text-center mb-6">
//         Expired Food Items ({expairedFood.length})
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
//         {displayedFoods.length === 0 ? (
//           <p className="col-span-full text-center">No expired foods found.</p>
//         ) : (
//           displayedFoods.map((food, index) => (
//             <motion.div
//               key={food._id}
//               className="relative bg-red-200 dark:bg-red-800 rounded-xl shadow-md overflow-hidden flex flex-col"
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//                 delay: index * 0.2
//               }}
//             >
//               {/* Image on top */}
//               <div className="w-full h-48 overflow-hidden rounded-t-xl">
//                 <img
//                   src={food.image}
//                   alt={food.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Badge */}
//               <span className="absolute top-2 right-2 bg-red-600 dark:bg-red-400 dark:text-black text-white px-2 py-1 rounded text-xs font-bold z-10">
//                 Expired
//               </span>

//               {/* Content */}
//               <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-lg font-semibold mb-2">{food.title}</h3>
//                 <p className="mb-1"><strong>Category:</strong> {food.category}</p>
//                 <p className="mb-1"><strong>Quantity:</strong> {food.quantity}</p>
//                 <p className="mb-3">
//                   <strong>Expiry Date:</strong> {new Date(food.expiryDate).toLocaleDateString()}
//                 </p>
//                 {/* Optional: Add button or link if needed */}
//               </div>
//             </motion.div>
//           ))
//         )}
//       </div>

//       {expairedFood.length > 6 && (
//         <div className="flex justify-center mt-6">
//           <Link
//             to="/allExpiredFoods"
//             className="px-5 py-2 border border-primary text-primary hover:bg-gray-100 rounded-md transition duration-300"
//           >
//             View All
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpairedFoodSection;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Package, 
  Tag, 
  Trash2, 
  AlertTriangle, 
  Eye, 
  Clock,
  Archive,
  ShoppingCart,
  Heart,
  Share2
} from 'lucide-react';

const ExpairedFoodSection = () => {
  const [expairedFood, setExpairedFood] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/foods/expired`)
      .then((res) => {
        setExpairedFood(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const displayedFoods = showAll ? expairedFood : expairedFood.slice(0, 8);

  // Smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden animate-pulse border border-slate-200/50 dark:border-slate-700/50">
          <div className="w-full h-52 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"></div>
          <div className="p-5 space-y-3">
            <div className="h-5 bg-slate-200 dark:bg-slate-600 rounded-lg w-4/5"></div>
            <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-md w-3/5"></div>
            <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-md w-2/3"></div>
            <div className="h-8 bg-slate-200 dark:bg-slate-600 rounded-lg w-full mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const calculateDaysExpired = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = today - expiry;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Elegant Header */}
        <div 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold  bg-gradient-to-r from-amber-600 via-orange-600 to-red-600  bg-clip-text text-transparent">
              Expired Food Items
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
            <Clock className="w-4 h-4 text-amber-500" />
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
          </div>

          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            
          >
            <Package className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Total Items: 
            </span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              {expairedFood.length}
            </span>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <AnimatePresence mode="wait">
            {displayedFoods.length === 0 ? (
              <div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-3">
                  Excellent! No Expired Items
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md mx-auto">
                  All your food items are fresh and within their expiry dates. Keep up the good work!
                </p>
              </div>
            ) : (
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {displayedFoods.map((food, index) => {
                  const daysExpired = calculateDaysExpired(food.expiryDate);
                  
                  return (
                    <div
                      key={food._id}
                      variants={cardVariants}
                      className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden transition-all duration-500"
                      
                    >
                      {/* Image Container */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={food.image}
                          alt={food.title}
                          className="w-full h-full object-cover  "
                          
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Status Badge */}
                        <motion.div 
                          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: index * 0.1 + 0.4,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                        >
                          <AlertTriangle className="w-3 h-3" />
                          EXPIRED
                        </motion.div>

                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-3 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                          {food.title}
                        </h3>

                        {/* Details */}
                        <div className="space-y-3 mb-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                              <Tag className="w-4 h-4" />
                              <span className="text-sm">Category</span>
                            </div>
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
                              {food.category}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                              <Package className="w-4 h-4" />
                              <span className="text-sm">Quantity</span>
                            </div>
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
                              {food.quantity}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">Expired</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded-md block mb-1">
                                {new Date(food.expiryDate).toLocaleDateString()}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">
                                {daysExpired} days ago
                              </span>
                            </div>
                          </div>
                        </div>

                      
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        )}

        {/* View All Button */}
        {expairedFood.length > 8 && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              to="/allExpiredFoods"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>View All Expired Foods</span>
              <motion.div
                className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 bg-white rounded-full transform group-hover:translate-x-0.5 transition-transform"></div>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExpairedFoodSection;