import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Fridge = () => {
    const [foods, setFoods] = useState([]);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [query, setQuery]= useState("")
    const today = new Date();


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/foods`)
            .then((res) => {
                setFoods(res.data);
                setFilteredFoods(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        if (category === "All") {
            setFilteredFoods(foods);
        } else {
            const filtered = foods.filter(food => food.category === category);
            setFilteredFoods(filtered);
        }
    };
    const searchFilteredFoods = filteredFoods.filter(food=>food.title.toLowerCase().includes(query.toLowerCase()))
    return (
        <div className="p-6 max-w-7xl mx-auto ">
            <div >
                <h2 className="text-3xl font-bold text-center mb-6">Fridge Inventory</h2>
                
            </div>
            <div className="mb-6 text-center">
                <input value={query} onChange={(e)=>setQuery(e.target.value)} className='input' placeholder="Type here"/>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchFilteredFoods.map(food => {
                    const isExpired = new Date(food.expiryDate) < today;

                    return (
                        <div
                            key={food._id}
                            className=" relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4"
                        >
                            <div>
                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="w-full h-40 object-cover rounded mb-4"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{food.title}</h3>
                                <p className="text-gray-600">Category: {food.category}</p>
                                <p className="text-gray-600">Quantity: {food.quantity}</p>
                                <p className="text-gray-600">
                                    Expiry: {new Date(food.expiryDate).toLocaleDateString()}
                                </p>

                                {isExpired && (
                                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded font-bold">
                                        Expired
                                    </span>
                                )}

                                <Link to={`/foods/${food._id}`} className="btn btn-sm btn-primary mt-3">See Details</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Fridge;