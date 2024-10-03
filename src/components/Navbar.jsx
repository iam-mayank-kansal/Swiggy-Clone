import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "/swiggy-logo.png";
import useOnlineStatus from "../hooks/useOnlineStatus"
import { Cart_icon, Help_icon, Offer_icon, Search_icon, Sign_in_icon, Swiggy_corporate_icon } from "../utils/Icons";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Status = useOnlineStatus();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 z-50" style={{ fontFamily: "ProximaNova, Arial, Helvetica Neue, sans-serif" }}>
            <div className="max-w-[1300px] mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={LOGO} alt="Swiggy Logo" className="h-[60px]" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 items-center text-[18px] font-[500]">
                    <li>
                        {Status ? <div className="flex items-center gap-2">Online 
                            <div className="h-4 w-4 bg-green-500 rounded-[50%]"></div></div> : <div className="flex items-center gap-2">Offline
                            <div className="h-4 w-4 bg-red-600 rounded-[50%]"></div></div>}
                    </li>
                    <li>
                        <Link to="/swiggy-corporate" className="flex items-center gap-2 hover:text-[#FC8019]">
                            <Swiggy_corporate_icon /> Swiggy Corporate
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className="flex items-center gap-2 hover:text-[#FC8019]">
                            <Search_icon /> Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/offers" className="flex items-center gap-2 hover:text-[#FC8019]">
                            <Offer_icon /> Offers
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="flex items-center gap-2 hover:text-[#FC8019]">
                            <Help_icon /> Help
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-in" className="flex items-center gap-2 hover:text-[#FC8019]">
                            <Sign_in_icon /> Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="flex items-center gap-2 hover:text-[#FC8019] relative">
                            <Cart_icon />
                            <span className="absolute top-[50%] left-[6px] transform -translate-y-[50%] text-[15px]">0</span>
                            Cart
                        </Link>
                    </li>
                </ul>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                        {isMenuOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden bg-white w-full px-4 pb-4 text-[18px] font-[500]">
                    <li>
                        <Link to="/swiggy-corporate" className="flex items-center gap-2 py-2 border-b hover:text-[#FC8019]">
                            <Swiggy_corporate_icon /> Swiggy Corporate
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className="flex items-center gap-2 py-2 border-b hover:text-[#FC8019]">
                            <Search_icon /> Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/offers" className="flex items-center gap-2 py-2 border-b hover:text-[#FC8019]">
                            <Offer_icon /> Offers
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="flex items-center gap-2 py-2 border-b hover:text-[#FC8019]">
                            <Help_icon /> Help
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-in" className="flex items-center gap-2 py-2 border-b hover:text-[#FC8019]">
                            <Sign_in_icon /> Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="flex items-center gap-2 py-2 border-b hover:text-[#FC8019] relative">
                            <Cart_icon />
                            <span className="absolute top-[50%] left-[6px] transform -translate-y-[50%] text-[15px]">0</span>
                            Cart
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};
