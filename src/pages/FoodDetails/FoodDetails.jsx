// import axios from "axios";
// import { use, useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../contexts/AuthContext";
// import Countdown from 'react-countdown';
// import { Link,  useNavigate, useParams } from "react-router";
// import { IoArrowBack } from "react-icons/io5";
// import Spinner from "../loading";


// const FoodDetails = () => {
//   const { id } = useParams();
//   const { user } = use(AuthContext);
//   const [food, setFood] = useState(null);
//   const [noteText, setNoteText] = useState('');
//   const [isOwner, setIsOwner] = useState(false);
//   const navigate = useNavigate(); 


//   useEffect(() => {
//     if (!user) return;

//     axios
//       .get(`${import.meta.env.VITE_API_URL}/foods/${id}`)
//       .then(res => {
//         setFood(res.data);
//         if (res.data.userEmail === user.email) {
//           setIsOwner(true);
        
//         }
//       })
//       .catch(err => {
//         console.error("Error fetching food:", err.message);
//         Swal.fire('Error', 'Food not found or server error', 'error');
//       });
//   }, [id, user]);

//   const handleAddNote = async () => {
//     if (!noteText.trim()) return;

//     try {
//       await axios.post(`${import.meta.env.VITE_API_URL}/foods/${id}/notes`, {
//         note: noteText,
//         userEmail: user.email
//       }, {
//         withCredentials: true
//       });
//       Swal.fire('Success', 'Note added successfully!', 'success');
//       setNoteText('');
//       const updatedFood = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${id}`);
//       setFood(updatedFood.data);
//     } catch (err) {
//       Swal.fire('Error', err.response?.data?.message || 'Could not add note', 'error');
//     }
//   };

//   if (!food) {
//     return (
//       <div className="text-center py-10 text-lg font-semibold text-gray-600">
//         Loading food details...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow space-y-4 my-5">
//       <Link onClick={() => navigate(-1)}className="flex"><IoArrowBack />Back</Link>
//       <div>
//         <img src={food.image} alt={food.title} className="w-full h-64 mx-auto  object-contain rounded" />
//       </div>
//       <h2 className="text-2xl font-bold">{food.title}</h2>
//       <p><strong>Category:</strong> {food.category}</p>
//       <p><strong>Quantity:</strong> {food.quantity}</p>
//       <p><strong>Expiry Date:</strong> {new Date(food.expiryDate).toLocaleDateString()}</p>

//       <div>
//         <strong> Time Left:</strong>{' '}
//         <Countdown date={new Date(food.expiryDate)} />
//       </div>
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Add Note</h3>
//         <textarea
//           className="w-full border p-2 rounded"
//           rows="4"
//           disabled={!isOwner}
//           placeholder={isOwner ? 'Write your note here...' : 'You are not allowed to add note to this item'}
//           value={noteText}
//           onChange={e => setNoteText(e.target.value)}
//         />
//         <button
//           onClick={handleAddNote}
//           disabled={!isOwner}
//           className="mt-2 btn btn-primary"
//         >
//           Add Note
//         </button>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Previous Notes:</h3>
//         {food.notes?.length ? (
//           <ul className="list-disc list-inside">
//             {food.notes.map((n, i) => (
//               <li key={i}>
//                 {n.note} <span className="text-sm text-gray-500">({new Date(n.postedAt).toLocaleString()})</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No notes yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };


// export default FoodDetails;


// import axios from "axios";
// import { useEffect, useState, useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../contexts/AuthContext";
// import Countdown from 'react-countdown';
// import { Link, useNavigate, useParams } from "react-router";
// import { IoArrowBack } from "react-icons/io5";

// const FoodDetails = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);  // make sure to use useContext here
//   const [food, setFood] = useState(null);
//   const [noteText, setNoteText] = useState('');
//   const [isOwner, setIsOwner] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch food details no matter if user is logged in or not
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/foods/${id}`)
//       .then(res => {
//         setFood(res.data);

//         // Set isOwner only if user is logged in and owns the food
//         if (user && res.data.userEmail === user.email) {
//           setIsOwner(true);
//         } else {
//           setIsOwner(false);
//         }
//       })
//       .catch(err => {
//         console.error("Error fetching food:", err.message);
//         Swal.fire('Error', 'Food not found or server error', 'error');
//       });
//   }, [id, user]);

//   const handleAddNote = async () => {
//     if (!noteText.trim()) return;

//     if (!user) {
//       Swal.fire('Unauthorized', 'You must be logged in to add notes.', 'warning');
//       return;
//     }

//     try {
//       await axios.post(`${import.meta.env.VITE_API_URL}/foods/${id}/notes`, {
//         note: noteText,
//         userEmail: user.email
//       }, {
//         withCredentials: true
//       });
//       Swal.fire('Success', 'Note added successfully!', 'success');
//       setNoteText('');
//       const updatedFood = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${id}`);
//       setFood(updatedFood.data);
//     } catch (err) {
//       Swal.fire('Error', err.response?.data?.message || 'Could not add note', 'error');
//     }
//   };

//   if (!food) {
//     return (
//       <div className="text-center py-10 text-lg font-semibold text-gray-600">
//         Loading food details...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow space-y-4 my-5">
//       <Link onClick={() => navigate(-1)} className="flex items-center gap-1 mb-4">
//         <IoArrowBack /> Back
//       </Link>
//       <div>
//         <img src={food.image} alt={food.title} className="w-full h-64 mx-auto object-contain rounded" />
//       </div>
//       <h2 className="text-2xl font-bold">{food.title}</h2>
//       <p><strong>Category:</strong> {food.category}</p>
//       <p><strong>Quantity:</strong> {food.quantity}</p>
//       <p><strong>Expiry Date:</strong> {new Date(food.expiryDate).toLocaleDateString()}</p>

//       <div>
//         <strong>Time Left:</strong>{' '}
//         <Countdown date={new Date(food.expiryDate)} />
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Add Note</h3>
//         <textarea
//           className="w-full border p-2 rounded"
//           rows="4"
//           disabled={!isOwner}
//           placeholder={isOwner ? 'Write your note here...' : 'You are not allowed to add note to this item'}
//           value={noteText}
//           onChange={e => setNoteText(e.target.value)}
//         />
//         <button
//           onClick={handleAddNote}
//           disabled={!isOwner}
//           className="mt-2 btn btn-primary"
//         >
//           Add Note
//         </button>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Previous Notes:</h3>
//         {food.notes?.length ? (
//           <ul className="list-disc list-inside">
//             {food.notes.map((n, i) => (
//               <li key={i}>
//                 {n.note} <span className="text-sm text-gray-500">({new Date(n.postedAt).toLocaleString()})</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No notes yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodDetails;



import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import Countdown from 'react-countdown';
import { Link, useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Package, 
  Tag, 
  Clock, 
  MessageSquarePlus, 
  MessageCircle,
  User,
  AlertTriangle,
  CheckCircle,
  Timer,
  Edit3,
  Send,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Sparkles
} from "lucide-react";

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/foods/${id}`)
      .then(res => {
        setFood(res.data);
        if (user && res.data.userEmail === user.email) {
          setIsOwner(true);
        } else {
          setIsOwner(false);
        }
      })
      .catch(err => {
        console.error("Error fetching food:", err.message);
        Swal.fire({
          title: 'Error',
          text: 'Food not found or server error',
          icon: 'error',
          background: '#1f2937',
          color: '#f9fafb',
          confirmButtonColor: '#ef4444'
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, user]);

  const handleAddNote = async () => {
    if (!noteText.trim()) {
      Swal.fire({
        title: 'Empty Note',
        text: 'Please write something before adding a note.',
        icon: 'warning',
        background: '#1f2937',
        color: '#f9fafb',
        confirmButtonColor: '#f59e0b'
      });
      return;
    }

    if (!user) {
      Swal.fire({
        title: 'Unauthorized',
        text: 'You must be logged in to add notes.',
        icon: 'warning',
        background: '#1f2937',
        color: '#f9fafb',
        confirmButtonColor: '#f59e0b'
      });
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/foods/${id}/notes`, {
        note: noteText,
        userEmail: user.email
      }, {
        withCredentials: true
      });
      
      Swal.fire({
        title: 'Success!',
        text: 'Note added successfully!',
        icon: 'success',
        background: '#1f2937',
        color: '#f9fafb',
        confirmButtonColor: '#10b981',
        timer: 2000,
        showConfirmButton: false
      });
      
      setNoteText('');
      const updatedFood = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${id}`);
      setFood(updatedFood.data);
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: err.response?.data?.message || 'Could not add note',
        icon: 'error',
        background: '#1f2937',
        color: '#f9fafb',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  // Calculate expiry status
  const getExpiryStatus = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { status: 'expired', color: 'from-red-500 to-rose-600', days: Math.abs(diffDays) };
    if (diffDays <= 1) return { status: 'critical', color: 'from-orange-500 to-red-500', days: diffDays };
    if (diffDays <= 3) return { status: 'warning', color: 'from-yellow-500 to-orange-500', days: diffDays };
    if (diffDays <= 7) return { status: 'caution', color: 'from-blue-500 to-indigo-500', days: diffDays };
    return { status: 'fresh', color: 'from-emerald-500 to-green-600', days: diffDays };
  };

  // Custom countdown renderer
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="flex items-center gap-2 text-red-500 font-bold">
          <AlertTriangle className="w-5 h-5" />
          <span>EXPIRED!</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center gap-2">
        <Timer className="w-5 h-5 text-amber-500" />
        <div className="flex gap-1">
          {days > 0 && (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
              {days}d
            </span>
          )}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
            {hours}h
          </span>
          <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
            {minutes}m
          </span>
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
            {seconds}s
          </span>
        </div>
      </div>
    );
  };

  if (isLoading || !food) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-2">
            Loading Food Details...
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Please wait while we fetch the information
          </p>
        </motion.div>
      </div>
    );
  }

  const expiryStatus = getExpiryStatus(food.expiryDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl border border-white/20 dark:border-slate-700/50 transition-all duration-300 group"
            whileHover={{ scale: 1.02, x: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Back to List
            </span>
          </motion.button>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Status Strip */}
          <div className={`h-2 bg-gradient-to-r ${expiryStatus.color}`}></div>

          <div className="p-8">
            {/* Header Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Image Section */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600">
                  <motion.img
                    src={food.image}
                    alt={food.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <motion.button
                        className="p-2.5 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-lg backdrop-blur-sm transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2.5 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-lg backdrop-blur-sm transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2.5 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-lg backdrop-blur-sm transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Bookmark className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <motion.div
                  className={`absolute -top-2 -right-2 px-4 py-2 bg-gradient-to-r ${expiryStatus.color} text-white rounded-full font-bold text-sm shadow-lg flex items-center gap-2`}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  {expiryStatus.status === 'expired' ? (
                    <AlertTriangle className="w-4 h-4" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {expiryStatus.status.toUpperCase()}
                </motion.div>
              </motion.div>

              {/* Info Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight">
                    {food.title}
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50/80 dark:bg-slate-700/50 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                        <Tag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Category</span>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-600/80 px-4 py-2 rounded-lg">
                      {food.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50/80 dark:bg-slate-700/50 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                        <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Quantity</span>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-600/80 px-4 py-2 rounded-lg">
                      {food.quantity}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50/80 dark:bg-slate-700/50 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg">
                        <Calendar className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Expiry Date</span>
                    </div>
                    <span className="font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-4 py-2 rounded-lg">
                      {new Date(food.expiryDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-amber-200/50 dark:border-amber-700/50">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    Time Remaining
                  </h3>
                  <Countdown date={new Date(food.expiryDate)} renderer={countdownRenderer} />
                </div>
              </motion.div>
            </div>

            {/* Notes Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Add Note Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <Edit3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  Add New Note
                  {isOwner && (
                    <span className="text-xs bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full font-semibold">
                      Owner Access
                    </span>
                  )}
                </h3>

                <div className="space-y-4">
                  <motion.textarea
                    className={`w-full p-4 border-2 rounded-xl bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm transition-all duration-300 resize-none ${
                      isOwner 
                        ? 'border-blue-200 dark:border-blue-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50' 
                        : 'border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 cursor-not-allowed'
                    }`}
                    rows="4"
                    disabled={!isOwner}
                    placeholder={isOwner ? 'Write your note here... Share your thoughts, reminders, or updates about this food item.' : 'Only the owner can add notes to this item'}
                    value={noteText}
                    onChange={e => setNoteText(e.target.value)}
                    whileFocus={{ scale: 1.01 }}
                  />
                  
                  <motion.button
                    onClick={handleAddNote}
                    disabled={!isOwner || !noteText.trim()}
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isOwner && noteText.trim()
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                    }`}
                    whileHover={isOwner && noteText.trim() ? { scale: 1.02 } : {}}
                    whileTap={isOwner && noteText.trim() ? { scale: 0.98 } : {}}
                  >
                    <Send className="w-4 h-4" />
                    Add Note
                  </motion.button>
                </div>
              </div>

              {/* Previous Notes */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-700/50 dark:to-slate-600/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-600/50">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-600 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </div>
                  Previous Notes
                  <span className="text-sm bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full font-semibold">
                    {food.notes?.length || 0}
                  </span>
                </h3>

                <AnimatePresence>
                  {food.notes?.length ? (
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                      {food.notes.map((note, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-xl border border-white/50 dark:border-slate-700/50 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex-shrink-0">
                              <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-2">
                                {note.note}
                              </p>
                              <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                {new Date(note.postedAt).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-16 h-16 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquarePlus className="w-8 h-8 text-slate-400 dark:text-slate-500" />
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-lg">
                        No notes yet. Be the first to add one!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FoodDetails;