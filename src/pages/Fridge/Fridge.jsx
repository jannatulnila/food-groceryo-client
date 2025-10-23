


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import { motion } from "framer-motion";

// const Fridge = () => {
//   const [foods, setFoods] = useState([]);
//   const [filteredFoods, setFilteredFoods] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("title-asc");
//   const [query, setQuery] = useState("");
  
//   const today = new Date();

//   // Fetch foods data on component mount
//   useEffect(() => {
//     const fetchFoods = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
//         setFoods(response.data);
//         setFilteredFoods(response.data);
//       } catch (error) {
//         console.error('Error fetching foods:', error);
//       }
//     };

//     fetchFoods();
//   }, []);

//   // Handle category filter change
//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);

//     const filtered = category === "All" 
//       ? foods 
//       : foods.filter(food => food.category === category);
    
//     setFilteredFoods(filtered);
//   };

//   // Filter foods based on search query
//   const searchFilteredFoods = filteredFoods.filter(food =>
//     food.title.toLowerCase().includes(query.toLowerCase())
//   );

//   // Sort foods based on selected criteria
//   const sortedFoods = [...searchFilteredFoods].sort((a, b) => {
//     const [field, order] = sortBy.split("-");
//     const titleA = a.title.toLowerCase();
//     const titleB = b.title.toLowerCase();
    
//     if (titleA < titleB) return order === "asc" ? -1 : 1;
//     if (titleA > titleB) return order === "asc" ? 1 : -1;
//     return 0;
//   });

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Header */}
//       <h2 className="text-3xl font-bold bg-primary bg-clip-text text-transparent text-center mb-8">
//         Fridge Inventory
//       </h2>

//       {/* Search and Filter Controls */}
//       <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="input input-bordered w-full max-w-xs"
//           placeholder="Search foods..."
//         />
        
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="select select-bordered w-full max-w-xs"
//         >
//           <option value="All">All Categories</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Meat">Meat</option>
//           <option value="Vegetables">Vegetables</option>
//           <option value="Snacks">Snacks</option>
//         </select>
        
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="select select-bordered w-full max-w-xs"
//         >
//           <option value="title-asc">Title A-Z</option>
//           <option value="title-desc">Title Z-A</option>
//         </select>
//       </div>

//       {/* Food Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
//         {sortedFoods.length === 0 ? (
//           <div className="col-span-full text-center py-12">
//             <p className="text-gray-500 text-lg">No foods found.</p>
//           </div>
//         ) : (
//           sortedFoods.map(({ _id, image, title, category, quantity, expiryDate }, index) => {
//             const isExpired = new Date(expiryDate) < today;
//             const expiryDateFormatted = new Date(expiryDate).toLocaleDateString();
            
//             return (
//               <motion.div
//                 key={_id}
//                 className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                   delay: index * 0.1
//                 }}
//               >
//                 {/* Expired Badge */}
//                 {isExpired && (
//                   <div className="absolute top-3 right-3 z-10">
//                     <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full font-semibold shadow-lg">
//                       Expired
//                     </span>
//                   </div>
//                 )}

//                 {/* Food Image */}
//                 <div className="w-full h-48 overflow-hidden">
//                   <img
//                     src={image}
//                     alt={title}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>

//                 {/* Food Details */}
//                 <div className="p-4 flex flex-col flex-grow">
//                   <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
//                     {title}
//                   </h3>
                  
//                   <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
//                     <p><span className="font-medium">Category:</span> {category}</p>
//                     <p><span className="font-medium">Quantity:</span> {quantity}</p>
//                     <p className={`font-medium ${isExpired ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
//                       <span>Expiry:</span> {expiryDateFormatted}
//                     </p>
//                   </div>

//                   {/* See Details Button with Gradient */}
//                   <Link
//                     to={`/foods/${_id}`}
//                     className="btn bg-primary text-white border-none hover:scale-105 transition-transform duration-200 w-full mt-auto font-semibold shadow-lg"
//                   >
//                     See Details
//                   </Link>
//                 </div>
//               </motion.div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default Fridge;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const Fridge = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("title-asc");
  const [query, setQuery] = useState("");
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const foodsPerPage = 8; // Number of foods per page

  const today = new Date();

  // Fetch foods data
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
        setFoods(response.data);
        setFilteredFoods(response.data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  // Handle category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const filtered = category === "All" 
      ? foods 
      : foods.filter(food => food.category === category);
    setFilteredFoods(filtered);
    setCurrentPage(1); // Reset to first page
  };

  // Search filtering
  const searchFilteredFoods = filteredFoods.filter(food =>
    food.title.toLowerCase().includes(query.toLowerCase())
  );

  // Sorting
  const sortedFoods = [...searchFilteredFoods].sort((a, b) => {
    const [field, order] = sortBy.split("-");
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return order === "asc" ? -1 : 1;
    if (titleA > titleB) return order === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedFoods.length / foodsPerPage);
  const startIndex = (currentPage - 1) * foodsPerPage;
  const paginatedFoods = sortedFoods.slice(startIndex, startIndex + foodsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Fridge Inventory
      </h2>

      {/* Search + Filters */}
      <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="input input-bordered w-full max-w-xs"
          placeholder="Search foods..."
        />
        
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="All">All Categories</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Snacks">Snacks</option>
        </select>
        
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
        </select>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {paginatedFoods.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No foods found.</p>
          </div>
        ) : (
          paginatedFoods.map(({ _id, image, title, category, quantity, expiryDate }, index) => {
            const isExpired = new Date(expiryDate) < today;
            const expiryDateFormatted = new Date(expiryDate).toLocaleDateString();
            
            return (
              <motion.div
                key={_id}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                {/* Expired Badge */}
                {isExpired && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full font-semibold shadow-lg">
                      Expired
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Food Info */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    {title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <p><span className="font-medium">Category:</span> {category}</p>
                    <p><span className="font-medium">Quantity:</span> {quantity}</p>
                    <p className={`font-medium ${isExpired ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
                      <span>Expiry:</span> {expiryDateFormatted}
                    </p>
                  </div>

                  <Link
                    to={`/foods/${_id}`}
                    className="btn bg-primary text-white border-none hover:scale-105 transition-transform duration-200 w-full mt-auto font-semibold shadow-lg"
                  >
                    See Details
                  </Link>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-sm px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`btn btn-sm px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn btn-sm px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Fridge;
