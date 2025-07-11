import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';


const MyItems = () => {
    const { user } = use(AuthContext);
    const [foods, setFoods] = useState([])

    const [selectedFood, setSelectedFood] = useState(null);

    useEffect(() => {
        if (user?.email && user?.accessToken) {

            axios(`${import.meta.env.VITE_API_URL}/my-foods/${(user.email)}`,{
                withCredentials:true
            })
                .then((res) => setFoods(res.data))
                .catch((err) => console.error(err));
        }
    }, [user]);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const updatedFood = {
            title: form.title.value,
            quantity: form.quantity.value,
            category: form.category.value,
        }
        axios.patch(`${import.meta.env.VITE_API_URL}/foods/${selectedFood._id}`, updatedFood,{
                withCredentials:true
            })
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    const updateList = foods.map(food =>  food._id === selectedFood._id ? { ...food, ...updatedFood } : food
                    );
                    setFoods(updateList);
                    setSelectedFood(null)
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/foods/${id}`,{
                withCredentials:true
            }).then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire('Deleted!', 'Food item has been deleted.', 'success');
                        setFoods((prev) => prev.filter((food) => food._id !== id));
                    }
                })
            }
        });

    }

    return (
        <div className="overflow-x-auto p-4 mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-primary text-center">My Food Items</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Expiry</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food) => (
                        <tr key={food._id}>
                            <td>{food.title}</td>
                            <td>{food.quantity}</td>
                            <td>{food.category}</td>
                            <td>{food.expiryDate}</td>
                            <td>
                                <button onClick={() => setSelectedFood(food)} className="btn btn-sm btn-primary mr-2">Update</button>
                                <button onClick={() => handleDelete(food._id)} className="btn btn-sm btn-error">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedFood && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleUpdate}>
                            <h3 className="font-bold text-lg mb-2">Update Food</h3>
                            <input name="title" defaultValue={selectedFood.title} className="input input-bordered w-full mb-2" />
                            <input name="quantity" defaultValue={selectedFood.quantity} type="number" className="input input-bordered w-full mb-2" />
                            <input name="category" defaultValue={selectedFood.category} className="input input-bordered w-full mb-2" />
                            <div className="modal-action">
                                <button type="submit" className="btn btn-success">Save</button>
                                <button type="button" onClick={() => setSelectedFood(null)} className="btn">Cancel</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyItems;