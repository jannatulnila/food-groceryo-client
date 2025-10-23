// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { motion } from "framer-motion";

// const RecentProducts = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/foods/recent`)
//       .then((res) => setFoods(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (


//     <div className="py-12 w-10/12 mx-auto px-4">
    
//                 <h2 className="text-3xl font-bold text-center text-primary dark:text-[#FFC107] mb-8">Recent Added Foods</h2>
//                 <div className="grid gap-6 md:grid-cols-2">
//                     {foods.map(({ _id, image, title, category, quantity, expiryDate, index }) => (
//                             <motion.div
//                                 key={_id}
//                                 className="bg-white rounded-xl dark:bg-gray-800  shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4"
//                                 initial={{ opacity: 0, y: 80 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{
//                                     duration: 0.8,
//                                     ease: "easeOut",
//                                     delay: index * 0.3
//                                 }}
//                             >
//                             <div className="w-40 h-40 overflow-hidden rounded-md flex-shrink-0">
//                                 <img src={image} alt={title} className="w-full h-40 object-contain rounded-md mb-4" />
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold">{title}</h3>
//                                 <p className="text-sm"><strong>Category:</strong> {category}</p>
//                                 <p className="text-sm"><strong>Quantity:</strong> {quantity}</p>
//                                 <p className="text-sm text-red-600">
//                                     <strong>Expiry:</strong> {new Date(expiryDate).toLocaleDateString()}
//                                 </p>
//                                 <Link to={`/foods/${_id}`} className="btn btn-sm btn-primary mt-3">See Details</Link>
//                             </div>
//                           </motion.div>
//                     ))}
//                 </div>
//             </div>
//   );
// };

// export default RecentProducts;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router"; // make sure react-router-dom
// import { motion } from "framer-motion";

// const RecentProducts = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/foods/recent`)
//       .then((res) => setFoods(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="py-12 w-11/12 mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-[#FFC107] mb-8">
//         Recent Added Foods
//       </h2>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {foods.map(({ _id, image, title, category, quantity, expiryDate }, index) => (
//           <motion.div
//             key={_id}
//             className="bg-white rounded-xl shadow-md dark:bg-gray-800 flex flex-col overflow-hidden"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             {/* Image on top */}
//             <div className="w-full h-48 overflow-hidden rounded-t-xl">
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Content below image */}
//             <div className="p-4 flex flex-col flex-grow">
//               <h3 className="text-lg font-semibold mb-2">{title}</h3>
//               <p className="text-sm mb-1">
//                 <strong>Category:</strong> {category}
//               </p>
//               <p className="text-sm mb-1">
//                 <strong>Quantity:</strong> {quantity}
//               </p>
//               <p className="text-sm mb-4 text-red-600">
//                 <strong>Expiry:</strong> {new Date(expiryDate).toLocaleDateString()}
//               </p>

//               {/* Button aligned at bottom */}
//               <div className="mt-auto">
//                 <Link
//                   to={`/foods/${_id}`}
//                   className="btn btn-primary dark:bg-[#FFC107] w-full text-center"
//                   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 >
//                   See Details
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProducts;


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router"; // Fixed import
import { motion } from "framer-motion";

const RecentProducts = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/foods/recent`)
      .then((res) => setFoods(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-12 w-11/12 mx-auto px-4">
      {/* Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center  bg-primary bg-clip-text text-transparent mb-2">
          Recent Added Foods
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Discover the freshest additions to our collection
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {foods.map(({ _id, image, title, quantity, expiryDate }, index) => (
          <motion.div
            key={_id}
            className="bg-white rounded-xl shadow-md dark:bg-gray-800 flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-[#FFC107]/20 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image on top */}
            <div className="w-full h-48 overflow-hidden rounded-t-xl relative">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
             
            </div>

            {/* Content below image */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary dark:group-hover:text-[#FFC107] transition-colors line-clamp-2">
                {title}
              </h3>
              
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Quantity:</span>
                  <span className="text-sm font-semibold text-primary dark:text-[#FFC107] bg-primary/10 dark:bg-[#FFC107]/20 px-2 py-1 rounded">
                    {quantity}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Expires:</span>
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">
                    {new Date(expiryDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>

              {/* Button aligned at bottom */}
              <div className="mt-auto">
                <Link
                  to={`/foods/${_id}`}
                  className="btn btn-primary bg-primary w-full text-center hover:scale-[1.02] transition-transform duration-200"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  See Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {foods.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
            No Recent Foods Found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Check back later for newly added items
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default RecentProducts;