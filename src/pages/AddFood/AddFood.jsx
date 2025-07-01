import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddFood = () => {
  const { loading, user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddFood = e => {
    e.preventDefault();
    const form = e.target;

    const food = {
      image: form.image.value,
      title: form.title.value,
      category: form.category.value,
      quantity: form.quantity.value,
      expiryDate: form.expiryDate.value,
      description: form.description.value,
      addedDate: new Date().toISOString(),
      userEmail: user?.email,
    };

    axios.post(`${import.meta.env.VITE_API_URL}/add-food`, food,{
      withCredentials:true
    })
      .then(data => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data added successfully",
          showConfirmButton: false,
          timer: 1000
        });
        navigate(`/my-foods/${user?.email}`);
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">Add New Food Item</h2>
      <form onSubmit={handleAddFood} className="space-y-4">
        <label className='lable text-gray-600'>Photo URL</label>
        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
        <label className='lable text-gray-600'>Food Title</label>
        <input type="text" name="title" placeholder="Food Title" className="input input-bordered w-full" required />

        <label className='lable text-gray-600'>Category</label>
        <select name="category" className="select select-bordered w-full" required>
          <option value='' disabled>Select Category</option>
          <option>Dairy</option>
          <option>Meat</option>
          <option>Vegetables</option>
          <option>Snacks</option>
        </select>

        <label className='lable text-gray-600'>Quantity</label>
        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
        <label className='lable text-gray-600'>Expiry Date</label>
        <input type="date" name="expiryDate" className="input input-bordered w-full" required />
        <label className='lable text-gray-600'>Description</label>
        <textarea className="textarea w-full " name="description" placeholder="Bio"></textarea>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full bg-base-200 text-base-content" />
          <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-base-200 text-base-content" />
        </div>

        <button type="submit" className="btn btn-primary w-full" disabled={loading}> Added Food</button>
      </form>
    </div>
  );
};


export default AddFood;