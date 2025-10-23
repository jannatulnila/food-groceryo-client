// // import { use, useState } from "react";
// // import { AuthContext } from "../contexts/AuthContext";
// // import { Link, NavLink } from "react-router";
// // import DarkModeToggoler from "../Components/DarkModeToggoler";


// // const Navbar = () => {
// //   const { user, logout } = use(AuthContext);


// //   const [isMenuOpen, setIsMenuOpen] = useState(false);


// //   const handleLogout = () => {
// //     logout()
// //       .then(() => {
// //         // Sign-out successful.
// //       }).catch((error) => {
// //         console.log(error);
// //       });
// //   }

// //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 

// //   const navLinks = (
// //     <>
// //       <NavLink to="/" className={({ isActive }) =>
// //         `px-3 py-2 rounded hover:bg-base-300 ${isActive ? "text-white font-semibold" : "text-black dark:text-[#FFC107]"}`
// //       }>Home</NavLink>
// //       <NavLink to="/fridge" className={({ isActive }) =>
// //         `px-3 py-2 rounded hover:bg-base-300 ${isActive ? "text-white font-semibold" : "text-black dark:text-[#FFC107]"}`
// //       }>Fridge</NavLink>
// //       <NavLink to="/support" className={({ isActive }) =>
// //         `px-3 py-2 rounded hover:bg-base-300 ${isActive ? "text-white font-semibold" : "text-black dark:text-[#FFC107]"}`
// //       }>Support</NavLink>

// //       {user ? (
// //         <>
// //           <NavLink to="/add-food" className={({ isActive }) =>
// //         `px-3 py-2 rounded hover:bg-base-300 ${isActive ? "text-white font-semibold" : "text-black dark:text-[#FFC107]"}`
// //       }>Add Food</NavLink>
// //           <NavLink to={`/my-foods/${user?.email}`} className={({ isActive }) =>
// //         `px-3 py-2 rounded hover:bg-base-300 ${isActive ? "text-white font-semibold" : "text-black dark:text-[#FFC107]"}`
// //       }>My Items</NavLink>
// //           <div className="flex items-center gap-2">
// //             <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
// //               <img
// //                 src={user?.photoURL}
// //                 alt="avatar"
// //                 className="w-8 h-8 rounded-full border border-gray-300"
// //               />
// //             </div>
// //             <button onClick={handleLogout} className="btn btn-sm bg-white dark:text-[#FFC107] text-primary">Logout</button>
// //           </div>
// //         </>
// //       ) : (
// //         <>
// //           <NavLink to="/login" className="btn btn-sm bg-white text-primary dark:text-[#FFC107] dark:bg-gray-200">Login</NavLink>
// //           <NavLink to="/register" className="btn btn-sm bg-white text-primary dark:text-[#FFC107] dark:bg-gray-200">Register</NavLink>
// //         </>
// //       )}
// //     </>
// //   );

// //   return (
// //     <header className="bg-primary shadow-md dark:bg-gray-900 sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
// //         {/* Logo */}
// //         <Link to="/" className="text-xl font-bold text-white md:text-[#FFC107] flex btn btn-ghost ">
// //           <img src="https://i.ibb.co/bgM4k74g/icons8-shopping-cart-100.png" alt=""
// //             className="w-[72px] h-[72px]" />FoodGroceryo
// //         </Link>

// //         {/* Desktop Menu */}
// //         <nav className="hidden md:flex items-center gap-4">
// //           {navLinks}
// //           <DarkModeToggoler />
// //         </nav>

// //         {/* Mobile Toggle */}
// //         <div className="md:hidden">
// //           <button onClick={toggleMenu} className="btn btn-ghost text-xl">
// //             ☰
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Dropdown */}
// //       {isMenuOpen && (
// //         <div className="md:hidden px-4 pb-4">
// //           <nav className="flex flex-col gap-2 bg-base-100 p-3 rounded shadow-md">
// //             {navLinks}
// //             <DarkModeToggoler />
// //           </nav>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Navbar;


// import { use, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { Link, NavLink } from "react-router"; // Fixed import
// import DarkModeToggoler from "../Components/DarkModeToggoler";

// const Navbar = () => {
//   const { user, logout } = use(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navLinks = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `px-4 py-2 rounded-lg transition-all duration-200 ${
//             isActive
//               ? "bg-primary/20 text-primary font-semibold"
//               : "text-primary/90 hover:bg-primary/10 hover:text-primary"
//           }`
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/fridge"
//         className={({ isActive }) =>
//           `px-4 py-2 rounded-lg transition-all duration-200 ${
//             isActive
//               ? "bg-primary/20 text-primary font-semibold"
//               : "text-primary/90 hover:bg-primary/10 hover:text-primary"
//           }`
//         }
//       >
//         Fridge
//       </NavLink>
//       <NavLink
//         to="/support"
//         className={({ isActive }) =>
//           `px-4 py-2 rounded-lg transition-all duration-200 ${
//             isActive
//               ? "bg-primary/20 text-primary font-semibold"
//               : "text-primary/90 hover:bg-primary/10 hover:text-primary"
//           }`
//         }
//       >
//         Support
//       </NavLink>

//       {user ? (
//         <>
//           <NavLink
//             to="/add-food"
//             className={({ isActive }) =>
//               `px-4 py-2 rounded-lg transition-all duration-200 ${
//                 isActive
//                   ? "bg-primary/20 text-primary font-semibold"
//                   : "text-primary/90 hover:bg-primary/10 hover:text-primary"
//               }`
//             }
//           >
//             Add Food
//           </NavLink>
//           <NavLink
//             to={`/my-foods/${user?.email}`}
//             className={({ isActive }) =>
//               `px-4 py-2 rounded-lg transition-all duration-200 ${
//                 isActive
//                   ? "bg-primary/20 text-primary font-semibold"
//                   : "text-primary/90 hover:bg-primary/10 hover:text-primary"
//               }`
//             }
//           >
//             My Items
//           </NavLink>
//           <div className="flex items-center gap-3">
//             <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
//               <img
//                 src={user?.photoURL}
//                 alt="avatar"
//                 className="w-8 h-8 rounded-full border-2 border-primary/30"
//               />
//             </div>
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-primary text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
//             >
//               Logout
//             </button>
//           </div>
//         </>
//       ) : (
//         <>
//           <NavLink
//             to="/login"
//             className="px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/register"
//             className="px-4 py-2 bg-primary/10 border border-primary/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
//           >
//             Register
//           </NavLink>
//         </>
//       )}
//     </>
//   );

//   return (
//     <header className="bg-white dark:bg-white/65 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-primary font-bold text-xl hover:scale-105 transition-transform duration-200"
//         >
//           <img
//             src="https://i.ibb.co/bgM4k74g/icons8-shopping-cart-100.png"
//             alt="FoodGroceryo"
//             className="w-10 h-10"
//           />
//           <span>FoodGroceryo</span>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex text-primary items-center gap-2">
//           {navLinks}
//           <div className="ml-4">
//             <DarkModeToggoler />
//           </div>
//         </nav>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="p-2 text-primary hover:bg-white/10 rounded-lg transition-colors duration-200"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-white/20 bg-white/10 backdrop-blur-sm">
//           <nav className="flex flex-col gap-2 p-4">
//             {navLinks}
//             <div className="pt-2 border-t border-white/20 mt-2">
//               <DarkModeToggoler />
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, NavLink } from "react-router";
import DarkModeToggoler from "../Components/DarkModeToggoler";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive
              ? "bg-primary/20 text-primary font-semibold"
              : "text-primary/90 hover:bg-primary/10 hover:text-primary"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/fridge"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive
              ? "bg-primary/20 text-primary font-semibold"
              : "text-primary/90 hover:bg-primary/10 hover:text-primary"
          }`
        }
      >
        Fridge
      </NavLink>
      <NavLink
        to="/support"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive
              ? "bg-primary/20 text-primary font-semibold"
              : "text-primary/90 hover:bg-primary/10 hover:text-primary"
          }`
        }
      >
        Support
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/add-food"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-primary/20 text-primary font-semibold"
                  : "text-primary/90 hover:bg-primary/10 hover:text-primary"
              }`
            }
          >
            Add Food
          </NavLink>
          <NavLink
            to={`/my-foods/${user?.email}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-primary/20 text-primary font-semibold"
                  : "text-primary/90 hover:bg-primary/10 hover:text-primary"
              }`
            }
          >
            My Items
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-primary font-bold text-xl hover:scale-105 transition-transform duration-200"
        >
          <img
            src="https://i.ibb.co/bgM4k74g/icons8-shopping-cart-100.png"
            alt="FoodGroceryo"
            className="w-10 h-10"
          />
          <span>FoodGroceryo</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-primary items-center gap-2">
          {navLinks}

          {/* User Avatar Dropdown */}
          {user ? (
            <div className="relative ml-4">
              <img
                src={user?.photoURL}
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-primary/30 cursor-pointer"
                onClick={toggleUserDropdown}
              />
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 p-2 flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                    {user?.displayName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-primary text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-primary/10 border border-primary/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                Register
              </NavLink>
            </>
          )}

          <div className="ml-4">
            <DarkModeToggoler />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {user && (
            <img
              src={user?.photoURL}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-primary/30 cursor-pointer"
              onClick={toggleUserDropdown}
            />
          )}
          <button
            onClick={toggleMenu}
            className="p-2 text-primary hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/10 backdrop-blur-sm">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks}
            <div className="pt-2 border-t border-white/20 mt-2">
              <DarkModeToggoler />
            </div>
          </nav>
        </div>
      )}

      {/* Mobile User Dropdown */}
      {isUserDropdownOpen && user && (
        <div className="md:hidden p-4 border-t border-white/20 bg-white/10 backdrop-blur-sm flex flex-col gap-2">
          <span className="text-sm font-semibold">{user.displayName}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-primary text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
