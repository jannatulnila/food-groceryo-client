// import React, { use } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import axios from 'axios'
// import { useNavigate } from 'react-router';
// import Swal from 'sweetalert2';

// const AddFood = () => {
//   const { loading, user } = use(AuthContext);
//   const navigate = useNavigate();

//   const handleAddFood = e => {
//     e.preventDefault();
//     const form = e.target;

//     const food = {
//       image: form.image.value,
//       title: form.title.value,
//       category: form.category.value,
//       quantity: form.quantity.value,
//       expiryDate: form.expiryDate.value,
//       description: form.description.value,
//       addedDate: new Date().toISOString(),
//       userEmail: user?.email,
//     };

//     axios.post(`${import.meta.env.VITE_API_URL}/add-food`, food,{
//       withCredentials:true
//     })
//       .then(data => {
//         console.log(data);
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: "Data added successfully",
//           showConfirmButton: false,
//           timer: 1000
//         });
//         navigate(`/my-foods/${user?.email}`);
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
//       <h2 className="text-2xl font-bold mb-4 text-primary dark:text-[#FFC107] text-center">Add New Food Item</h2>
//       <form onSubmit={handleAddFood} className="space-y-4">
//         <label className='lable text-gray-600'>Photo URL</label>
//         <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
//         <label className='lable text-gray-600'>Food Title</label>
//         <input type="text" name="title" placeholder="Food Title" className="input input-bordered w-full" required />

//         <label className='lable text-gray-600'>Category</label>
//         <select name="category" className="select select-bordered w-full" required>
//           <option value='' disabled>Select Category</option>
//           <option>Dairy</option>
//           <option>Meat</option>
//           <option>Vegetables</option>
//           <option>Snacks</option>
//         </select>

//         <label className='lable text-gray-600'>Quantity</label>
//         <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
//         <label className='lable text-gray-600'>Expiry Date</label>
//         <input type="date" name="expiryDate" className="input input-bordered w-full" required />
//         <label className='lable text-gray-600'>Description</label>
//         <textarea className="textarea w-full " name="description" placeholder="Bio"></textarea>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full bg-base-200 text-base-content" />
//           <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-base-200 text-base-content" />
//         </div>

//         <button type="submit" className="btn btn-primary dark:bg-[#FFC107] w-full" disabled={loading}> Added Food</button>
//       </form>
//     </div>
//   );
// };


// export default AddFood;


import React, { use, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaImage, FaUtensils, FaLayerGroup, FaHashtag, FaCalendarAlt, FaFileAlt, FaUser, FaEnvelope } from 'react-icons/fa';

const AddFood = () => {
  const { loading, user } = use(AuthContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddFood = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const food = {
      image: form.image.value,
      title: form.title.value,
      category: form.category.value,
      quantity: parseInt(form.quantity.value),
      expiryDate: form.expiryDate.value,
      description: form.description.value,
      addedDate: new Date().toISOString(),
      userEmail: user?.email,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/add-food`, food, {
        withCredentials: true
      });
      
      console.log(response.data);
      
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Food item added successfully!",
        text: "Your food item has been added to the inventory.",
        showConfirmButton: false,
        timer: 2000,
        backdrop: true
      });
      
      navigate(`/my-foods/${user?.email}`);
    } catch (error) {
      console.error('Error adding food:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to add food item. Please try again.',
        confirmButtonColor: '#f59e0b'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      name: 'image',
      type: 'text',
      placeholder: 'Enter image URL (e.g., https://example.com/image.jpg)',
      label: 'Photo URL',
      icon: FaImage,
      required: true
    },
    {
      name: 'title',
      type: 'text',
      placeholder: 'Enter food title (e.g., Fresh Apples)',
      label: 'Food Title',
      icon: FaUtensils,
      required: true
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'Enter quantity (e.g., 10)',
      label: 'Quantity',
      icon: FaHashtag,
      required: true,
      min: 1
    },
    {
      name: 'expiryDate',
      type: 'date',
      label: 'Expiry Date',
      icon: FaCalendarAlt,
      required: true
    }
  ];

  const categories = ['Dairy', 'Meat', 'Vegetables', 'Snacks', 'Fruits', 'Beverages', 'Grains', 'Others'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            <span className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Add New Food Item
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            Add fresh items to your food inventory
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleAddFood} className="space-y-6">
            {/* Dynamic Input Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              {inputFields.map((field, index) => {
                const IconComponent = field.icon;
                return (
                  <motion.div
                    key={field.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <IconComponent className="text-amber-500" />
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        min={field.min}
                        className="input input-bordered w-full pl-4 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 transition-all duration-200 bg-gray-50 dark:bg-gray-700"
                        required={field.required}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Category Dropdown */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <FaLayerGroup className="text-amber-500" />
                Category
              </label>
              <select
                name="category"
                className="select w-full py-3 border-2 border-gray-200 dark:border-gray-600  bg-gray-50 dark:bg-gray-700"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Description Textarea */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <FaFileAlt className="text-amber-500" />
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter a brief description of the food item (optional)"
                className="textarea textarea-bordered w-full min-h-[100px] border-2 border-gray-200 dark:border-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 transition-all duration-200 bg-gray-50 dark:bg-gray-700 resize-vertical"
                rows="4"
              />
            </motion.div>

            {/* User Information (Read-only) */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Added By
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FaEnvelope className="text-gray-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FaUser className="text-gray-400" />
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={user?.displayName || 'Anonymous User'}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed"
                  />
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <button
                type="submit"
                disabled={loading || isSubmitting}
                className={`w-full py-2 px-3 rounded-xl font-bold text-white text-lg shadow-lg  ${
                  loading || isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 hover:scale-105 hover:shadow-2xl active:scale-95'
                }`}
              >
                {loading || isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Adding Food Item...
                  </div>
                ) : (
                  'Add Food Item'
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Make sure to provide accurate information for better inventory management
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AddFood;