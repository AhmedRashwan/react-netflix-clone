import React from "react";
import { Link, Navigate } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between p-4 absolute w-full z-20">
      <Link to="/" className="text-red-400 text-3xl font-bold cursor-pointer">
        NETFLIX
      </Link>
      <div className="text-white pr-4 ">
        <Link to="/login" className="text-white pr-4">
          Sign in
        </Link>
        <Link
          to="/signup"
          className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
