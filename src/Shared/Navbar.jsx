import { use,  useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, NavLink} from "react-router";


const Navbar = () => {
  const { user, logout } = use(AuthContext);
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

 const handleLogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <>
      <NavLink to="/" className="px-3 py-2 rounded hover:bg-base-300">Home</NavLink>
      <NavLink to="/fridge" className="px-3 py-2 rounded hover:bg-base-300">Fridge</NavLink>

      {user ? (
        <>
          <NavLink to="/add-food" className="px-3 py-2 rounded hover:bg-base-300">Add Food</NavLink>
          <NavLink to={`/my-foods/${user?.email}`} className="px-3 py-2 rounded hover:bg-base-300">My Items</NavLink>
          <div className="flex items-center gap-2">
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
              <img
                src={user?.photoURL}
                alt="avatar"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
            </div>
            <button onClick={handleLogout} className="btn btn-sm btn-error text-white">Logout</button>
          </div>
        </>
      ) : (
        <>
          <NavLink to="/login" className="px-3 py-2 rounded hover:bg-base-300">Login</NavLink>
          <NavLink to="/register" className="px-3 py-2 rounded hover:bg-base-300">Register</NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary flex btn btn-ghost">
          <img src="https://i.ibb.co/bgM4k74g/icons8-shopping-cart-100.png" alt="" 
          className="w-18 h-18"/>FoodGroceryo
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost text-xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2 bg-base-100 p-3 rounded shadow-md">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
