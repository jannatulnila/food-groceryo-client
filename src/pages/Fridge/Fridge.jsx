// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';

// const Fridge = () => {
//     const [foods, setFoods] = useState([]);
//     const [filteredFoods, setFilteredFoods] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [sortBy, setSortBy] = useState("title-asc");
//     const [query, setQuery] = useState("")
//     const today = new Date();


//     useEffect(() => {
//         axios.get(`${import.meta.env.VITE_API_URL}/foods`)
//             .then((res) => {
//                 setFoods(res.data);
//                 setFilteredFoods(res.data);
//             })
//             .catch((err) => console.error(err));
//     }, []);

//     const handleCategoryChange = (e) => {
//         const category = e.target.value;
//         setSelectedCategory(category);

//         if (category === "All") {
//             setFilteredFoods(foods);
//         } else {
//             const filtered = foods.filter(food => food.category === category);
//             setFilteredFoods(filtered);
//         }
//     };
//     const searchFilteredFoods = filteredFoods.filter(food => food.title.toLowerCase().includes(query.toLowerCase()));


//     // sort logic
//     const sortedFoods = [...searchFilteredFoods].sort((a, b) => {
//         const [field, order] = sortBy.split("-");
//         const titleA = a.title.toLowerCase();
//         const titleB = b.title.toLowerCase();
//         if (titleA < titleB) return order === "asc" ? -1 : 1;
//         if (titleA > titleB) return order === "asc" ? 1 : -1;
//         return 0;
//     });



//     return (
//         <div className="p-6 max-w-7xl mx-auto ">
//             <div >
//                 <h2 className="text-3xl font-bold text-primary dark:text-[#FFC107] text-center mb-6">Fridge Inventory</h2>

//             </div>
//             <div className="mb-6 text-center">
//                 <input value={query} onChange={(e) => setQuery(e.target.value)} className='input' placeholder="Type here" />
//                 <select
//                     value={selectedCategory}
//                     onChange={handleCategoryChange}
//                     className="select select-bordered w-full max-w-xs"
//                 >
//                     <option value="All">All Categories</option>
//                     <option value="Dairy">Dairy</option>
//                     <option value="Meat">Meat</option>
//                     <option value="Vegetables">Vegetables</option>
//                     <option value="Snacks">Snacks</option>
//                 </select>
//                 <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="select select-bordered"
//                 >
//                     <option value="title-asc">Title A-Z</option>
//                     <option value="title-desc">Title Z-A</option>
//                 </select>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 mx-auto">
//                 {sortedFoods.map(food => {
//                     const isExpired = new Date(food.expiryDate) < today;

//                     return (
//                         <div
//                             key={food._id}
//                             className=" relative bg-white dark:bg-gray-800 rounded-xl shadow-md  overflow-hidden flex flex-col md:flex-row gap-4 p-4"
//                         >
//                             <div className='w-40 h-40 overflow-hidden rounded-md flex-shrink-0'>
//                                 <img
//                                     src={food.image}
//                                     alt={food.title}
//                                     className="w-full h-40 object-contain rounded mb-4"
//                                 />
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold">{food.title}</h3>
//                                 <p className="text-gray-600 dark:text-gray-400">Category: {food.category}</p>
//                                 <p className="text-gray-600 dark:text-gray-400">Quantity: {food.quantity}</p>
//                                 <p className="text-gray-600 dark:text-gray-400">
//                                     Expiry: {new Date(food.expiryDate).toLocaleDateString()}
//                                 </p>

//                                 {isExpired && (
//                                     <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded font-bold">
//                                         Expired
//                                     </span>
//                                 )}

//                                 <Link to={`/foods/${food._id}`} className="btn btn-sm btn-primary dark:bg-[#FFC107] mt-3">See Details</Link>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Fridge;


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

//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_API_URL}/foods`)
//       .then(res => {
//         setFoods(res.data);
//         setFilteredFoods(res.data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);

//     if (category === "All") {
//       setFilteredFoods(foods);
//     } else {
//       setFilteredFoods(foods.filter(food => food.category === category));
//     }
//   };

//   const searchFilteredFoods = filteredFoods.filter(food =>
//     food.title.toLowerCase().includes(query.toLowerCase())
//   );

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
//       <h2 className="text-3xl font-bold text-primary dark:text-[#FFC107] text-center mb-6">
//         Fridge Inventory
//       </h2>

//       <div className="mb-6 text-center flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
//         <input
//           value={query}
//           onChange={e => setQuery(e.target.value)}
//           className="input input-bordered max-w-xs mx-auto md:mx-0"
//           placeholder="Search foods..."
//         />
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="select select-bordered max-w-xs mx-auto md:mx-0"
//         >
//           <option value="All">All Categories</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Meat">Meat</option>
//           <option value="Vegetables">Vegetables</option>
//           <option value="Snacks">Snacks</option>
//         </select>
//         <select
//           value={sortBy}
//           onChange={e => setSortBy(e.target.value)}
//           className="select select-bordered max-w-xs mx-auto md:mx-0"
//         >
//           <option value="title-asc">Title A-Z</option>
//           <option value="title-desc">Title Z-A</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-10/12 mx-auto">
//         {sortedFoods.length === 0 && (
//           <p className="col-span-full text-center text-gray-500">
//             No foods found.
//           </p>
//         )}

//         {sortedFoods.map(({ _id, image, title, category, quantity, expiryDate }, index) => {
//           const isExpired = new Date(expiryDate) < today;
//           return (
//             <motion.div
//               key={_id}
//               className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
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
//                   src={image}
//                   alt={title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                 <p className="mb-1">Category: {category}</p>
//                 <p className="mb-1">Quantity: {quantity}</p>
//                 <p className="mb-2 text-red-600">
//                   Expiry Date: {new Date(expiryDate).toLocaleDateString()}
//                 </p>

//                 {isExpired && (
//                   <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded font-bold">
//                     Expired
//                   </span>
//                 )}

//                 <Link
//                   to={`/foods/${_id}`}
//                   className="btn btn-primary dark:bg-[#FFC107] w-full mt-auto self-start"
//                 >
//                   See Details
//                 </Link>
//               </div>
//             </motion.div>
//           );
//         })}
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
  
  const today = new Date();

  // Fetch foods data on component mount
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

  // Handle category filter change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    const filtered = category === "All" 
      ? foods 
      : foods.filter(food => food.category === category);
    
    setFilteredFoods(filtered);
  };

  // Filter foods based on search query
  const searchFilteredFoods = filteredFoods.filter(food =>
    food.title.toLowerCase().includes(query.toLowerCase())
  );

  // Sort foods based on selected criteria
  const sortedFoods = [...searchFilteredFoods].sort((a, b) => {
    const [field, order] = sortBy.split("-");
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    
    if (titleA < titleB) return order === "asc" ? -1 : 1;
    if (titleA > titleB) return order === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent text-center mb-8">
        Fridge Inventory
      </h2>

      {/* Search and Filter Controls */}
      <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
        </select>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {sortedFoods.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No foods found.</p>
          </div>
        ) : (
          sortedFoods.map(({ _id, image, title, category, quantity, expiryDate }, index) => {
            const isExpired = new Date(expiryDate) < today;
            const expiryDateFormatted = new Date(expiryDate).toLocaleDateString();
            
            return (
              <motion.div
                key={_id}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1
                }}
              >
                {/* Expired Badge */}
                {isExpired && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full font-semibold shadow-lg">
                      Expired
                    </span>
                  </div>
                )}

                {/* Food Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Food Details */}
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

                  {/* See Details Button with Gradient */}
                  <Link
                    to={`/foods/${_id}`}
                    className="btn bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 text-white border-none hover:scale-105 transition-transform duration-200 w-full mt-auto font-semibold shadow-lg"
                  >
                    See Details
                  </Link>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Fridge;