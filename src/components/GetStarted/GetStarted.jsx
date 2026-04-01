import React from 'react';
import userIcon from '../../assets/products/user.png';
import packageIcon from '../../assets/products/package.png';
import rocketIcon from '../../assets/products/rocket.png';

const GetStarted = () => {
    return (
        <div className="py-20 text-center bg-white">
      <h2 className="text-4xl font-bold mb-2 text-black">
        Get Started In 3 Steps
      </h2>
      <p className="text-gray-500 mb-16">
        Start using premium digital tools in minutes, not hours
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
          <div className="absolute top-4 right-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
            1
          </div>
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img src={userIcon} alt="Create Account" className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3 text-black">Create Account</h3>
          <p className="text-gray-600 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
          <div className="absolute top-4 right-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
            2
          </div>
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img src={packageIcon} alt="Choose Products" className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3 text-black">Choose Products</h3>
          <p className="text-gray-600 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
          <div className="absolute top-4 right-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
            3
          </div>
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img src={rocketIcon} alt="Start Creating" className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3 text-black">Start Creating</h3>
          <p className="text-gray-600 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
    );
};

export default GetStarted;