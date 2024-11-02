import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [bookData, setBookData] = useState([]);

  const loadBookData = async () => {
    const fetchBookData = await fetch("./data/booksData.json");
    const bookData = await fetchBookData.json();
    setBookData(bookData);
  };

  // console.log(bookData)

  useEffect(() => {
    loadBookData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-[48px] text-orange-500 font-bold text-center pt-24 pb-9">
          Books
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookData.map((book)=> <Book key={book.bookId} book={book}/>)}
      </div>
    </div>
  );
};

export default Books;
