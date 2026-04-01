import React from 'react';

const Stats = () => {
    return (
        <div className="bg-purple-600 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">

        <div className="border-r border-white border-opacity-50">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p>Active Users</p>
        </div>

        <div className="border-r border-white border-opacity-50">
          <h2 className="text-4xl font-bold">200+</h2>
          <p>Premium Tools</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p>Rating</p>
        </div>

      </div>
    </div>
    );
};

export default Stats;