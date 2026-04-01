import React from 'react';

const FinalPart = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Ready To Transform Your Workflow?
                </h2>
                <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                    <button className="px-8 py-3 rounded-full font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-600 transition">
                        Explore Products
                    </button>
                    <button className="px-8 py-3 rounded-full font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-600 transition">
                        View Pricing
                    </button>
                </div>

                {/* Small Text */}
                <p className="text-purple-100 text-sm">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default FinalPart;