

// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import Countdown from 'react-countdown';
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Clock, 
//   Calendar, 
//   Package, 
//   Tag,  
//   AlertCircle,
//   Timer,
//   Zap,
//   Star,
//   TrendingUp,
//   ArrowRight,
//   Sparkles,
//   Bell
// } from "lucide-react";
// import Spinner from "../../pages/loading";

// const NearlyExpairySection = () => {
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/foods/expiring-soon`);
//         setFoods(res.data);
//       } catch (err) {
//         setError("Failed to load data.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Calculate urgency level based on days left
//   const getUrgencyLevel = (expiryDate) => {
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     const diffTime = expiry - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
//     if (diffDays <= 1) return { level: 'critical', color: 'from-red-500 to-rose-600', bg: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20' };
//     if (diffDays <= 3) return { level: 'high', color: 'from-orange-500 to-amber-600', bg: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20' };
//     if (diffDays <= 7) return { level: 'medium', color: 'from-yellow-500 to-orange-500', bg: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20' };
//     return { level: 'low', color: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' };
//   };

//   // Custom countdown renderer
//   const countdownRenderer = ({ days, hours, minutes, completed }) => {
//     if (completed) {
//       return (
//         <div className="flex items-center gap-1 text-red-600 font-bold">
//           <AlertCircle className="w-4 h-4" />
//           <span>EXPIRED!</span>
//         </div>
//       );
//     }
    
//     return (
//       <div className="flex items-center gap-2 text-sm font-semibold">
//         <Timer className="w-4 h-4 text-amber-600" />
//         <div className="flex gap-1">
//           {days > 0 && (
//             <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-md text-xs">
//               {days}d
//             </span>
//           )}
//           <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded-md text-xs">
//             {hours}h
//           </span>
//           <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-md text-xs">
//             {minutes}m
//           </span>
//         </div>
//       </div>
//     );
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       scale: 0.9,
//       rotateX: 15
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       rotateX: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.46, 0.45, 0.94]
//       }
//     }
//   };

//   const LoadingSkeleton = () => (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {[...Array(8)].map((_, index) => (
//         <div key={index} className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden animate-pulse border border-slate-200/30 dark:border-slate-700/30">
//           <div className="w-full h-40 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"></div>
//           <div className="p-4 space-y-3">
//             <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded-lg w-4/5"></div>
//             <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-md w-3/5"></div>
//             <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-md w-2/3"></div>
//             <div className="h-8 bg-slate-200 dark:bg-slate-600 rounded-xl w-full mt-4"></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   if (loading) return <Spinner />;
//   if (error) return (
//     <div className="min-h-[400px] flex items-center justify-center">
//       <div className="text-center">
//         <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
//           <AlertCircle className="w-8 h-8 text-red-500" />
//         </div>
//         <p className="text-red-500 text-lg font-semibold">{error}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-red-50/40 dark:from-slate-900 dark:via-amber-900/10 dark:to-orange-900/20 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Stunning Header */}
//         <div 
//           className="text-center mb-16"
//         >
//           {/* Animated Icon */}
//           <div
//             className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-3xl shadow-2xl mb-4 relative overflow-hidden"
          
//           >
//             <Bell className="w-5 h-5 text-white relative z-10" />
//             <div
//               className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              
//             />
//           </div>

//           {/* Main Title */}
//           <h1 
//             className="text-xl md:text-2xl font-black mb-3 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
            
//           >
//              Expiring Soon
//           </h1>

//           {/* Subtitle */}
//           <p 
//             className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-2 leading-relaxed"
            
//           >
//             Act fast! These delicious items are approaching their expiry dates. 
          
//           </p>

//         </div>

//         {/* Content */}
//         <AnimatePresence mode="wait">
//           {foods.length === 0 ? (
//             <div
//               className="text-center py-20"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
//                 <Star className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4">
//                 All Fresh & Good! 
//               </h3>
//               <p className="text-slate-500 dark:text-slate-400 text-xl max-w-lg mx-auto">
//                 Great news! No items are expiring soon. Your food storage management is on point!
//               </p>
//             </div>
//           ) : (
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {foods.map((food, index) => {
//                 const urgency = getUrgencyLevel(food.expiryDate);
                
//                 return (
//                   <div
//                     key={food._id}
//                     variants={cardVariants}
//                     className={`group relative bg-gradient-to-br  backdrop-blur-lg rounded-2xl shadow-lg  border border-white/20 dark:border-slate-700/30 overflow-hidden transition-all duration-300 transform `}
                   
//                   >
//                     {/* Urgency Indicator */}
//                     <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${urgency.color}`}></div>
                    
//                     {/* Image Container */}
//                     <div className="relative h-40 overflow-hidden">
//                       <motion.img
//                         src={food.image}
//                         alt={food.title}
//                         className="w-full h-full object-cover"
                        
//                       />
                      
                      
//                       {/* Urgency Badge */}
//                       <motion.div 
//                         className={`absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r ${urgency.color} text-white rounded-full text-xs font-bold shadow-md backdrop-blur-sm flex items-center gap-1`}
//                         initial={{ scale: 0, rotate: 180 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         transition={{ 
//                           delay: index * 0.1 + 0.5,
//                           type: "spring",
//                           stiffness: 200,
//                           damping: 15
//                         }}
//                       >
//                         <Zap className="w-3 h-3" />
//                         {urgency.level.toUpperCase()}
//                       </motion.div>

//                     </div>

//                     {/* Content */}
//                     <div className="p-4 space-y-3">
//                       {/* Title */}
//                       <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
//                         {food.title}
//                       </h3>

//                       {/* Details Grid */}
//                       <div className="space-y-2">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
//                             <Tag className="w-3.5 h-3.5" />
//                             <span className="text-xs font-medium">Category</span>
//                           </div>
//                           <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-700/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
//                             {food.category}
//                           </span>
//                         </div>

//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
//                             <Package className="w-3.5 h-3.5" />
//                             <span className="text-xs font-medium">Quantity</span>
//                           </div>
//                           <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-700/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
//                             {food.quantity}
//                           </span>
//                         </div>

//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
//                             <Calendar className="w-3.5 h-3.5" />
//                             <span className="text-xs font-medium">Expires</span>
//                           </div>
//                           <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-0.5 rounded-full">
//                             {new Date(food.expiryDate).toLocaleDateString()}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Countdown Timer */}
//                       <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-3 border border-amber-200/30 dark:border-amber-700/30">
//                         <div className="flex items-center justify-between mb-1">
//                           <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
//                             <Clock className="w-3.5 h-3.5 text-amber-600" />
//                             Time Left
//                           </span>
//                         </div>
//                         <Countdown 
//                           date={new Date(food.expiryDate)} 
//                           renderer={countdownRenderer}
//                         />
//                       </div>

//                       {/* Action Button */}
//                       <Link
//                         to={`/foods/${food._id}`}
//                         className="block w-full"
//                       >
//                         <motion.button
//                           className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${urgency.color} text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-sm  text-sm`}
//                           whileHover={{ scale: 1.01, y: -0.5 }}
//                           whileTap={{ scale: 0.99 }}
//                         >
//                           <span>View Details</span>
//                           <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
//                         </motion.button>
//                       </Link>
//                     </div>

//                     {/* Animated Border */}
//                     <div
//                       className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${urgency.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
//                     />
//                   </div>
//                 );
//               })}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default NearlyExpairySection;

import { useEffect, useState } from "react";
import { Link } from "react-router";
import Countdown from "react-countdown";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Calendar,
  Package,
  Tag,
  AlertCircle,
  Timer,
  Zap,
  Star,
  ArrowRight,
  Bell,
} from "lucide-react";
import Spinner from "../../pages/loading";

const NearlyExpairySection = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/foods/expiring-soon`);
        setFoods(res.data);
      } catch (err) {
        setError("Failed to load data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Urgency level with flat colors
  const getUrgencyLevel = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 1)
      return { level: "critical", color: "bg-red-600", text: "text-red-600" };
    if (diffDays <= 3)
      return { level: "high", color: "bg-orange-500", text: "text-orange-600" };
    if (diffDays <= 7)
      return { level: "medium", color: "bg-yellow-500", text: "text-yellow-600" };
    return { level: "low", color: "bg-primary", text: "text-primary" };
  };

  // Countdown renderer (flat colors)
  const countdownRenderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return (
        <div className="flex items-center gap-1 text-red-600 font-bold">
          <AlertCircle className="w-4 h-4" />
          <span>EXPIRED!</span>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Timer className="w-4 h-4 text-primary" />
        <div className="flex gap-1">
          {days > 0 && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
              {days}d
            </span>
          )}
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
            {hours}h
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
            {minutes}m
          </span>
        </div>
      </div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  if (loading) return <Spinner />;
  if (error)
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-red-500 text-lg font-semibold">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-3xl mb-4">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-primary dark:text-primary mb-3">
            Expiring Soon
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Act fast! These items are approaching their expiry dates.
          </p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {foods.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4">
                All Fresh & Good!
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xl max-w-lg mx-auto">
                Great news! No items are expiring soon.
              </p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {foods.map((food, index) => {
                const urgency = getUrgencyLevel(food.expiryDate);

                return (
                  <motion.div
                    key={food._id}
                    variants={cardVariants}
                    className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 ${urgency.color}`}></div>

                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={food.image}
                        alt={food.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className={`absolute top-3 right-3 px-2.5 py-1 ${urgency.color} text-white rounded-full text-xs font-bold shadow-sm flex items-center gap-1`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <Zap className="w-3 h-3" />
                        {urgency.level.toUpperCase()}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-primary dark:group-hover:text-blue-400">
                        {food.title}
                      </h3>

                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                            <Tag className="w-4 h-4" />
                            Category
                          </div>
                          <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                            {food.category}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                            <Package className="w-4 h-4" />
                            Quantity
                          </div>
                          <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                            {food.quantity}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                            <Calendar className="w-4 h-4" />
                            Expires
                          </div>
                          <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                            {new Date(food.expiryDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Countdown */}
                      <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-3 border border-slate-200 dark:border-slate-600">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            Time Left
                          </span>
                        </div>
                        <Countdown date={new Date(food.expiryDate)} renderer={countdownRenderer} />
                      </div>

                      {/* Button */}
                      <Link to={`/foods/${food._id}`} className="block w-full">
                        <motion.button
                          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NearlyExpairySection;


