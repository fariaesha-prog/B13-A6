import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-3">DigiTools</h3>
                        <p className="text-sm text-gray-400">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Features</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition">Community</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Social Links</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-purple-600 transition">
                                <img src="/Facebook (1).png" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-purple-600 transition">
                                <span className="text-gray-900">𝕏</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-purple-600 transition">
                                <img src="/Instagram.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-700 my-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400 mb-4 md:mb-0">
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;