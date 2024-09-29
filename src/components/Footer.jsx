import React from 'react';
import LOGO from "/swiggy-logo.png"

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 flex justify-center items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 w-fit gap-12">
                {/* Logo and Copyright */}
                <div >
                    <h1 className="text-white text-2xl font-bold flex items-center">
                        {/* Use an icon or logo */}
                        <span className="mr-2"></span> {/* Replace with Swiggy icon */}
                        <img src={LOGO} height={80} width={80} /><span className="text-[#f08221b6] -translate-x-4 text-2xl font-bold">wiggy</span>
                    </h1>
                    <p className="mt-4 text-sm">© 2024 Bundl Technologies Pvt. Ltd</p>
                </div>

                {/* Company Links */}
                <div >
                    <h3 className="text-white font-bold mb-4">Company</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">About</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Careers</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Team</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Swiggy One</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Swiggy Instamart</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Swiggy Genie</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Links */}
                <div >
                    <h3 className="text-white font-bold mb-4">Contact us</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Help & Support</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Partner with us</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Ride with us</a>
                        </li>
                    </ul>

                    <h3 className="text-white font-bold mt-6 mb-4">Legal</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Terms & Conditions</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Cookie Policy</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Investor Relations</a>
                        </li>
                    </ul>
                </div>

                {/* Delivery Cities */}
                <div >
                    <h3 className="text-white font-bold mb-4">We deliver to:</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Bangalore</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Gurgaon</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Hyderabad</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Delhi</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Mumbai</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Pune</a>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
                            589 cities
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

