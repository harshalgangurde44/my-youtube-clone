import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
const ButtonList = () => {
  const toggleSidebar = useSelector((store) => store.app.isMenuOpen);
  const btnList = [
    "All",
    "Sports",
    "News",
    "Songs",
    "Cooking",
    "Gaming",
    "Cricket",
    "Live",
    "Movies",
    "Tech",
    "Comedy",
    "Cars",
    "Stocks",
    "Fashion",
    "React JS",
    "tv9 marathi",
  ];

  return (
    <>
      <div
        className={`grid gap-1 ${
          toggleSidebar ? "grid-cols-2" : "grid-cols-3"
        } sm:grid-cols-${
          toggleSidebar ? "2" : "3"
        } md:grid-cols-4 lg:grid-cols-8`}
      >
        {btnList.map((item, index) => {
          return <Button name={item} key={item} />;
        })}
      </div>
    </>
  );
};

export default ButtonList;
