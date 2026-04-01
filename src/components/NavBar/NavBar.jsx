import React, { useState } from 'react';
import cartIcon from '../../assets/products/shopping-cart.png';

const NavBar = () => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <nav className="bg-white shadow-sm border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                            DigiTools
                        </span>
                    </div>


                    <div className="hidden md:flex space-x-8">
                        <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                            Products
                        </a>
                        <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                            Features
                        </a>
                        <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                            Pricing
                        </a>
                        <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                            Testimonials
                        </a>
                        <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                            FAQ
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
                            <img src={cartIcon} alt="Shopping Cart" className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>


                        <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
                            Login
                        </button>
                        
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium hover:shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;