import React from 'react';

const Banner = () => {
    return (
        <div className="bg-white shadow-sm min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">


        <img
          src="public/banner.png"
          className="max-w-sm rounded-lg"
        />

        {/* Text */}
        <div>
          <div className="flex items-center w-fit mb-4 bg-purple-100 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            <p className="text-sm text-purple-600 font-medium">New: AI-Powered Tools Available</p>
          </div>

          <h1 className="text-5xl font-bold leading-tight" style={{ color: '#627382FF' }}>
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="py-6 text-gray-500">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <p className="text-sm text-gray-600 mb-4">Explore Products</p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium hover:shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all">
              Explore Products
            </button>

            <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

      </div>
      </div>
    </div>
    );
};

export default Banner;