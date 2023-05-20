import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-64  ">
      <ul className="space-y-2 w-36">
        <li className=" hover:bg-gray-200 rounded-lg p-2">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Shorts</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Videos</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Watch Later</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Music</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Sport</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Gaming</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Movies</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">News</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Music</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Sport</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Gaming</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">Movies</li>
        <li className=" hover:bg-gray-200 rounded-lg p-2">News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
