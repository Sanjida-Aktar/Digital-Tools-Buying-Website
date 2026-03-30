import React from "react";

const Rating = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-500 m-6">
      <div className="flex justify-around p-10">
        
        
        <div>
            <h2 className="text-4xl font-bold text-white">50k</h2>
            <p className="text-white">Active Users</p>
        </div>
        <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>
        <div>
            <h2 className="text-4xl font-bold text-white">4.9</h2>
            <p className="text-white">Rating</p>
        </div>
        <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>
        <div>
            <h2 className="text-4xl font-bold text-white">200+</h2>
            <p className="text-white">Premium Tools</p>
        </div>
        
      </div>
    </div>
  );
};

export default Rating;
