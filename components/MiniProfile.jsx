import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-center mt-14 ml-10 ">
      <img
        className="rounded-full w-16 h-16 
        border p-[2px]"
        src="https://i.ibb.co/rF4Zc3w/01.jpg"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">gopimudumal99</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
}

export default MiniProfile;
