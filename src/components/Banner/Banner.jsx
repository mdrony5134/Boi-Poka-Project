import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#1313130D] px-[120px] py-[136px] rounded-lg flex items-center justify-between mt-12">
      <div className="">
        <h1 className="text-[56px] font-bold mb-12">Books to freshen up your bookshelf</h1>
        <button className="py-3 px-6 bg-[#23BE0A] text-white rounded-lg text-[18px] font-semibold">
          View The List
        </button>
      </div>
      <div>
        <img className="rounded-lg" src="./images/books.jpg" alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
