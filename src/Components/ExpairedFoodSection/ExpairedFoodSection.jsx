import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Package, 
  Tag, 
  AlertTriangle, 
  Clock,
  ShoppingCart,
  Heart
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
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const displayedFoods = showAll ? expairedFood : expairedFood.slice(0, 8);

  const calculateDaysExpired = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = today - expiry;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden animate-pulse border border-slate-200 dark:border-slate-700">
          <div className="w-full h-52 bg-slate-200 dark:bg-slate-700"></div>
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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-500 rounded-2xl shadow-lg">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary dark:text-primary">
              Expired Food Items
            </h1>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow">
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
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {displayedFoods.map((food) => {
                  const daysExpired = calculateDaysExpired(food.expiryDate);
                  
                  return (
                    <div
                      key={food._id}
                      className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-500"
                    >
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={food.image}
                          alt={food.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-full text-xs font-semibold shadow">
                          <AlertTriangle className="w-3 h-3" />
                          EXPIRED
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-3 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                          {food.title}
                        </h3>

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
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>View All Expired Foods</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExpairedFoodSection;
