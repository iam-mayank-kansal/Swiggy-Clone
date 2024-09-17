import { Link } from "react-router-dom"
import LOGO from "/swiggy-logo.png"
import { Cart_icon, Help_icon, Offer_icon, Search_icon, Sign_in_icon, Swiggy_corporate_icon } from "../utils/Icons"

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-center px-[20px] bg-white text-[16px] font-[100] py-[10px] w-full" style={{ fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif" , boxShadow:"0px 0px 15px #D3D3D3"}}>
            <div className="flex items-center justify-between max-w-[1300px] min-w-[1300px]">
                <Link to="/"><div className="flex gap-[1px] items-center text-[25px] ">
                    <img src={LOGO} alt="logo" className="h-[60px]" />
                    <span className="translate-x-[-10px] translate-y-[6px] font-semibold text-[#FC8019]"></span>
                </div>
                </Link>
                <ul className="flex items-center justify-center gap-[50px] text-[18px]">
                    <Link to="/swiggy-corporate">
                        <li className="group font-[500] flex gap-[5px] items-center ">
                            <span className="translate-y-[-2px]" ><Swiggy_corporate_icon /></span>
                            <span className="group-hover:text-[#FC8019] group-hover:duration-15000">Swiggy Corporate</span></li>
                    </Link>
                    <Link to="/search">
                        <li className="group font-[500] flex gap-[5px] items-center ">
                            <span><Search_icon /></span>
                            <span className="group-hover:text-[#FC8019] group-hover:duration-15000">Search</span>
                        </li>
                    </Link>
                    <Link to="/offers">
                        <li className="group font-[500] flex gap-[5px] items-center ">
                            <span ><Offer_icon /></span>
                            <span className="group-hover:text-[#FC8019] group-hover:duration-15000">Offers</span>
                        </li>
                    </Link>
                    <Link to="/help">
                        <li className="group font-[500] flex gap-[5px] items-center ">
                            <span><Help_icon /></span>
                            <span className="group-hover:text-[#FC8019] group-hover:duration-15000">Help</span>
                        </li>
                    </Link>
                    <Link to="/sign-in">
                        <li className="group font-[500] flex gap-[5px] items-center ">
                            <span><Sign_in_icon /></span>
                            <span className="group-hover:text-[#FC8019] group-hover:duration-15000">Sign In</span>
                        </li>
                    </Link>

                    <Link to="/cart">
                        <li className="group font-[500] flex gap-[5px] items-center">
                            <span className="relative">
                                <Cart_icon />
                                <span className="absolute top-[52%] left-[5px] translate-y-[-47%] text-[15px]">0</span>
                            </span>
                            <span className="group-hover:text-[#FC8019] group-hover:duration-15000">Cart</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}