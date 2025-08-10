// import React, { use, useEffect, useState } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import axios from 'axios';
// import Swal from 'sweetalert2';


// const MyItems = () => {
//     const { user } = use(AuthContext);
//     const [foods, setFoods] = useState([])

//     const [selectedFood, setSelectedFood] = useState(null);

//     useEffect(() => {
//         if (user?.email && user?.accessToken) {

//             axios(`${import.meta.env.VITE_API_URL}/my-foods/${(user.email)}`,{
//                 withCredentials:true
//             })
//                 .then((res) => setFoods(res.data))
//                 .catch((err) => console.error(err));
//         }
//     }, [user]);

//     const handleUpdate = e => {
//         e.preventDefault();
//         const form = e.target;

//         const updatedFood = {
//             title: form.title.value,
//             quantity: form.quantity.value,
//             category: form.category.value,
//         }
//         axios.patch(`${import.meta.env.VITE_API_URL}/foods/${selectedFood._id}`, updatedFood,{
//                 withCredentials:true
//             })
//             .then((res) => {
//                 if (res.data.modifiedCount > 0) {
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Your work has been saved",
//                         showConfirmButton: false,
//                         timer: 1000
//                     });
//                     const updateList = foods.map(food =>  food._id === selectedFood._id ? { ...food, ...updatedFood } : food
//                     );
//                     setFoods(updateList);
//                     setSelectedFood(null)
//                 }
//             })
//             .catch(error => {
//                 console.log(error)
//             })

//     }

//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axios.delete(`${import.meta.env.VITE_API_URL}/foods/${id}`,{
//                 withCredentials:true
//             }).then(res => {
//                     if (res.data.deletedCount > 0) {
//                         Swal.fire('Deleted!', 'Food item has been deleted.', 'success');
//                         setFoods((prev) => prev.filter((food) => food._id !== id));
//                     }
//                 })
//             }
//         });

//     }

//     return (
//         <div className="overflow-x-auto p-4 mx-auto">
//             <h2 className="text-2xl font-bold mb-4 text-primary text-center">My Food Items</h2>
//             <table className="table table-zebra w-full">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Quantity</th>
//                         <th>Category</th>
//                         <th>Expiry</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {foods.map((food) => (
//                         <tr key={food._id}>
//                             <td>{food.title}</td>
//                             <td>{food.quantity}</td>
//                             <td>{food.category}</td>
//                             <td>{food.expiryDate}</td>
//                             <td>
//                                 <button onClick={() => setSelectedFood(food)} className="btn btn-sm btn-primary mr-2">Update</button>
//                                 <button onClick={() => handleDelete(food._id)} className="btn btn-sm btn-error">Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {selectedFood && (
//                 <dialog open className="modal">
//                     <div className="modal-box">
//                         <form onSubmit={handleUpdate}>
//                             <h3 className="font-bold text-lg mb-2">Update Food</h3>
//                             <input name="title" defaultValue={selectedFood.title} className="input input-bordered w-full mb-2" />
//                             <input name="quantity" defaultValue={selectedFood.quantity} type="number" className="input input-bordered w-full mb-2" />
//                             <input name="category" defaultValue={selectedFood.category} className="input input-bordered w-full mb-2" />
//                             <div className="modal-action">
//                                 <button type="submit" className="btn btn-success">Save</button>
//                                 <button type="button" onClick={() => setSelectedFood(null)} className="btn">Cancel</button>
//                             </div>
//                         </form>
//                     </div>
//                 </dialog>
//             )}
//         </div>
//     );
// };

// export default MyItems;



import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash, FaCalendarAlt, FaLayerGroup, FaHashtag, FaUtensils, FaTimes, FaSave, FaExclamationTriangle, FaEye } from 'react-icons/fa';

const MyItems = () => {
    const { user } = use(AuthContext);
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        const fetchMyFoods = async () => {
            if (user?.email && user?.accessToken) {
                try {
                    const response = await axios(`${import.meta.env.VITE_API_URL}/my-foods/${user.email}`, {
                        withCredentials: true
                    });
                    setFoods(response.data);
                } catch (error) {
                    console.error('Error fetching foods:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Failed to load your food items.',
                        confirmButtonColor: '#f59e0b'
                    });
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchMyFoods();
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        const form = e.target;

        const updatedFood = {
            title: form.title.value,
            quantity: parseInt(form.quantity.value),
            category: form.category.value,
        };

        try {
            const response = await axios.patch(
                `${import.meta.env.VITE_API_URL}/foods/${selectedFood._id}`,
                updatedFood,
                { withCredentials: true }
            );

            if (response.data.modifiedCount > 0) {
                await Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Food item updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });

                const updatedList = foods.map(food =>
                    food._id === selectedFood._id ? { ...food, ...updatedFood } : food
                );
                setFoods(updatedList);
                setSelectedFood(null);
            }
        } catch (error) {
            console.error('Error updating food:', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed!',
                text: 'Failed to update the food item. Please try again.',
                confirmButtonColor: '#f59e0b'
            });
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = (id, title) => {
        Swal.fire({
            title: "Are you sure?",
            html: `You are about to delete <strong>"${title}"</strong>.<br/>This action cannot be undone!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(
                        `${import.meta.env.VITE_API_URL}/foods/${id}`,
                        { withCredentials: true }
                    );

                    if (response.data.deletedCount > 0) {
                        await Swal.fire({
                            icon: 'success',
                            title: 'Deleted!',
                            text: 'Food item has been deleted successfully.',
                            confirmButtonColor: '#f59e0b'
                        });
                        setFoods((prev) => prev.filter((food) => food._id !== id));
                    }
                } catch (error) {
                    console.error('Error deleting food:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Delete Failed!',
                        text: 'Failed to delete the food item. Please try again.',
                        confirmButtonColor: '#f59e0b'
                    });
                }
            }
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const today = new Date();
        const isExpired = date < today;
        
        return {
            formatted: date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            isExpired
        };
    };

    const categories = ['Dairy', 'Meat', 'Vegetables', 'Snacks', 'Fruits', 'Beverages', 'Grains', 'Others'];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-400 border-t-transparent mx-auto mb-4"></div>
                    <p className="text-lg bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                        Loading your food items...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            My Food Items
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                        Manage your personal food inventory
                    </p>
                    <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
                        <FaUtensils className="text-amber-500 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Total Items:</span>
                        <span className="font-bold text-lg bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            {foods.length}
                        </span>
                    </div>
                </motion.div>

                {/* Table Container */}
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {foods.length === 0 ? (
                        <div className="text-center py-16">
                            <FaUtensils className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                No food items found
                            </h3>
                            <p className="text-gray-500 dark:text-gray-500">
                                Start adding food items to your inventory!
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                {/* Table Header */}
                                <thead className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-gray-700 dark:via-gray-700 dark:to-gray-700">
                                    <tr>
                                        <th className="px-6 py-4 text-left">
                                            <div className="flex items-center gap-2">
                                                <FaUtensils className="text-amber-500" />
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Food Title</span>
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-left">
                                            <div className="flex items-center gap-2">
                                                <FaHashtag className="text-amber-500" />
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Quantity</span>
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-left">
                                            <div className="flex items-center gap-2">
                                                <FaLayerGroup className="text-amber-500" />
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Category</span>
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-left">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-amber-500" />
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Expiry Date</span>
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-center">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Actions</span>
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {foods.map((food, index) => {
                                        const expiryInfo = formatDate(food.expiryDate);
                                        
                                        return (
                                            <tr
                                                key={food._id}
                                                className=""
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                            >
                                                {/* Food Title */}
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-full flex items-center justify-center">
                                                            <FaUtensils className="text-amber-600 dark:text-amber-400" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900 dark:text-white text-lg">
                                                                {food.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Quantity */}
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                                                        {food.quantity}
                                                    </span>
                                                </td>

                                                {/* Category */}
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                                                        {food.category}
                                                    </span>
                                                </td>

                                                {/* Expiry Date */}
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                                                            expiryInfo.isExpired 
                                                                ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' 
                                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                                        }`}>
                                                            {expiryInfo.isExpired && (
                                                                <FaExclamationTriangle className="mr-1 text-xs" />
                                                            )}
                                                            {expiryInfo.formatted}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* Actions */}
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => setSelectedFood(food)}
                                                            className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 text-white px-3 py-2 rounded-lg hover:scale-105 transition-transform duration-200 font-semibold text-sm flex items-center gap-1"
                                                            title="Update food item"
                                                        >
                                                            <FaEdit className="text-xs" />
                                                            Update
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(food._id, food.title)}
                                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 font-semibold text-sm flex items-center gap-1"
                                                            title="Delete food item"
                                                        >
                                                            <FaTrash className="text-xs" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </motion.div>

                {/* Update Modal */}
                {selectedFood && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-6">
                                {/* Modal Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold">
                                        <span className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                            Update Food Item
                                        </span>
                                    </h3>
                                    <button
                                        onClick={() => setSelectedFood(null)}
                                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                    >
                                        <FaTimes className="text-xl" />
                                    </button>
                                </div>

                                {/* Update Form */}
                                <form onSubmit={handleUpdate} className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            <FaUtensils className="text-amber-500" />
                                            Food Title
                                        </label>
                                        <input
                                            name="title"
                                            defaultValue={selectedFood.title}
                                            className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 transition-all duration-200 bg-gray-50 dark:bg-gray-700"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            <FaHashtag className="text-amber-500" />
                                            Quantity
                                        </label>
                                        <input
                                            name="quantity"
                                            defaultValue={selectedFood.quantity}
                                            type="number"
                                            min="1"
                                            className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 transition-all duration-200 bg-gray-50 dark:bg-gray-700"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            <FaLayerGroup className="text-amber-500" />
                                            Category
                                        </label>
                                        <select
                                            name="category"
                                            defaultValue={selectedFood.category}
                                            className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 transition-all duration-200 bg-gray-50 dark:bg-gray-700"
                                            required
                                        >
                                            {categories.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Modal Actions */}
                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="submit"
                                            disabled={isUpdating}
                                            className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                                                isUpdating
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 hover:scale-105'
                                            }`}
                                        >
                                            {isUpdating ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                                    Updating...
                                                </>
                                            ) : (
                                                <>
                                                    <FaSave />
                                                    Save Changes
                                                </>
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedFood(null)}
                                            className="flex-1 py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-200"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyItems;