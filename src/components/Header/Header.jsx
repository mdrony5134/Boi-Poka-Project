import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <nav className="pt-7 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img className="w-10" src="./images/book.ico" alt="book icon" />
          <h2 className="text-[27px] font-bold">
            Book<span className="text-purple-800">Vibe</span>
          </h2>
        </div>
        <div className="flex items-center gap-10">
          <NavLink className="text-[18px] font-medium" to="/">Home</NavLink>
          <NavLink className="text-[18px] font-medium" to="/listed-read-books">Listed Books</NavLink>
          <NavLink className="text-[18px] font-medium" to="/pages-To-Read">Pages to Read</NavLink>
        </div>
        <div className="flex items-center gap-5">
          <button className="py-3 px-6 bg-[#23BE0A] text-white rounded-lg text-[18px] font-semibold">Singin</button>
          <button className="py-3 px-6 bg-[#59C6D2] text-white rounded-lg text-[18px] font-semibold">Singup</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
