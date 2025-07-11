import { use } from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";


const Footer = () => {
  const { user } = use(AuthContext);

  const navLinks = (
    <>
      <ul>
        <li>
          <NavLink to="/" className="px-3 py-2 rounded hover:text-white">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fridge" className="px-3 py-2 rounded hover:text-white">Fridge</NavLink>
        </li>
        <li>
          <NavLink to="/support" className="px-3 py-2 rounded hover:bg-base-300">Support</NavLink>
        </li>

        {user ? (
          <>
            <li>
              <NavLink to="/add-food" className="px-3 py-2 rounded hover:text-white">Add Food</NavLink>
            </li>
            <li>
              <NavLink to={`/my-foods/${user?.email}`} className="px-3 py-2 rounded hover:text-white">My Items</NavLink>
            </li>


          </>
        ) : (
          <div className="grid grid-col">
            <NavLink to="/login" className="px-3 py-2 rounded hover:text-white">Login</NavLink>
            <NavLink to="/register" className="px-3 py-2 rounded hover:text-white">Register</NavLink>
          </div>
        )}
      </ul>
    </>
  );
  return (
    <footer className="bg-primary  text-base-content pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <img
              src="https://i.ibb.co/bgM4k74g/icons8-shopping-cart-100.png"
              alt="FoodGroceryo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-white">FoodGroceryo</span>
          </Link>
          <p className="mt-2 text-sm">
            Smartly track expiry dates, reduce food waste, and organize your fridge with FoodGroceryo.
          </p>
        </div>


        <div>
          <h4 className="text-xl font-bold mb-2 text-white ">Quick Links</h4>
          {navLinks}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-white">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="https://facebook.com" className="btn btn-sm btn-circle bg-white text-primary hover:bg-white">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="btn btn-sm btn-circle bg-white text-primary hover:bg-white">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="btn btn-sm btn-circle bg-white text-primary hover:bg-white">
              <FaInstagram />
            </a>
            <a href="mailto:support@gardenhub.com" className="btn btn-sm btn-circle bg-white text-primary hover:bg-white">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <h4 className="font-semibold text-white text-lg mb-3">About</h4>
          <p className="text-sm">Built with by the Food Tracker Team</p>
          <p className="mt-4 text-xs text-gray-500">&copy; {new Date().getFullYear()} Food Expiry Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
