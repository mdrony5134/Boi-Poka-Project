import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({book}) => {
    const {image, bookName, author, rating, tags, category} = book;
  return (
    <div>
      <div className="w-[375px] h-fit border border-[#13131326] rounded-2xl">
        <div className="bg-[#F3F3F3] w-[326px] h-[250px] m-6 rounded-2xl">
          <img
            className="w-full h-full px-16 py-8"
            src={image}
            alt="book image"
          />
        </div>
        <div className="m-6">
          <div className="flex items-center gap-3 mt-6 mb-4">
            <p className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-3 rounded-[30px] font-medium">
              Young Adult
            </p>
            <p className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-3 rounded-[30px] font-medium">
              Identity
            </p>
          </div>
          <h2 className="text-[24px] text-[#131313] font-bold mb-3">
           {bookName}
          </h2>
          <h4 className="text-[#131313CC] font-medium border-b border-dashed border-[#13131326] pb-4">
            By : {author}
          </h4>
          <div className="pt-4 flex items-center justify-between">
            <p className="text-[#131313CC] font-medium font-mono">{category}</p>
            <p className="text-[#131313CC] font-medium flex items-center gap-2 font-mono">
              {rating} <FaRegStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
