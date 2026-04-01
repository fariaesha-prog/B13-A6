import React from 'react';

const PriceSection = () => {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-3 text-black">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-500">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Starter</h3>
                        <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-black">$0</span>
                            <span className="text-gray-500">/Month</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Access to 10 free tools
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Basic templates
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Community support
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                1 project per month
                            </li>
                        </ul>
                        <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                            Get Started Free
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 shadow-lg text-white relative md:scale-105">
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-orange-300 px-4 py-1 rounded-full text-sm font-bold">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Pro</h3>
                        <p className="text-purple-100 text-sm mb-6">Best for professionals</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="text-purple-100">/Month</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm">
                                <span className="mr-3">✓</span>
                                Access to all premium tools
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-3">✓</span>
                                Unlimited templates
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-3">✓</span>
                                Priority support
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-3">✓</span>
                                Unlimited projects
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-3">✓</span>
                                Cloud sync
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-3">✓</span>
                                Advanced analytics
                            </li>
                        </ul>
                        <button className="w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                            Start Pro Trial
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Enterprise</h3>
                        <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-black">$99</span>
                            <span className="text-gray-500">/Month</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Everything in Pro
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Team collaboration
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Custom integrations
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Dedicated support
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                SLA guarantee
                            </li>
                            <li className="flex items-center text-gray-700 text-sm">
                                <span className="text-green-500 mr-3">✓</span>
                                Custom branding
                            </li>
                        </ul>
                        <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceSection;