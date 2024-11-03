import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBookDetails = () => {
  const [singleBook, setSingleBook] = useState();
  const { bookId } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const fethData = await fetch("/data/booksData.json");
      const booksData = await fethData.json();
      //   console.log(booksData)
      const findBook = booksData.find(
        (book) => book.bookId === parseInt(bookId)
      );
      if (findBook) {
        setSingleBook(findBook);
      }
    };
    loadData();
  }, [bookId]);
  //   console.log(singleBook);
  //   console.log(bookId);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-12 mt-12">
        {singleBook && (
          <>
            <div className="w-[573px] bg-[#1313130D] rounded-2xl flex flex-col justify-center items-center">
              <img
                className="w-[425px] h-[564px] px-10 py-8 rounded-2xl"
                src={singleBook.image}
                alt=""
              />
            </div>
            <div className="w-[549px]">
              <h2 className="text-[#131313] text-[40px] font-bold">
                {singleBook.bookName}
              </h2>
              <h2 className="text-[#131313CC] text-[20px] font-sans border-b pb-4 mt-4">
                By : {singleBook.author}
              </h2>
              <p className="text-[#131313CC] text-[20px] font-medium border-b mt-4 pb-4 font-mono">
                {singleBook.category}
              </p>
              <p className="text-[#131313B3] font-sans mt-4">
                <span className="font-medium text-black text-[18px]">
                  Review :{" "}
                </span>
                {singleBook.review}
              </p>
              <div className="flex items-center gap-3 mt-6 pb-4 border-b">
                <span className="font-bold text-lg"> Tags</span>
                {singleBook.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-3 rounded-[30px] font-medium"
                  >
                    <span className="text-[20px] font-bold">#</span>
                    {tag}
                  </p>
                ))}
              </div>
              <div className="font-sans pt-5 space-y-3">
                <div className="grid grid-cols-2">
                  <h2 className="text-[#131313B3]">Number Of Pages:</h2>
                  <span className="text-black font-bold">
                    {singleBook?.totalPages}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <h2 className="text-[#131313B3]">Publisher:</h2>
                  <span className="text-black font-bold">
                    {singleBook?.publisher}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <h2 className="text-[#131313B3]">Year of Publishing:</h2>
                  <span className="text-black font-bold">
                    {singleBook?.yearOfPublishing}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <h2 className="text-[#131313B3]">Rating:</h2>
                  <span className="text-black font-bold">
                    {singleBook?.rating}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-10 font-sans">
                <button className="px-6 py-3 border border-[#1313134D] rounded-lg text-[18px] font-semibold">
                  Read
                </button>
                <button className="px-6 py-3 bg-[#50B1C9] text-white rounded-lg text-[18px] font-semibold">
                  WishList
                </button>
              </div> 
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleBookDetails;
