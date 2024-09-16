import { useState } from "react";
import { blogCardData2 } from "../../data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Blog2 = () => {
  const cardsPerPage = 6; // Number of cards to show per page
  const totalPages = Math.ceil(blogCardData2.length / cardsPerPage); // Calculate total pages

  const [currentPage, setCurrentPage] = useState(1); // Track current page

  // Get the cards to display based on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = blogCardData2.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle the "Next" button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle the "Previous" button
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-green-300/35">
      <div className="min-h-screen text-center py-10 px-5">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg p-4 m-4 w-[15rem] md:w-80 h-96 flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-md h-40 object-cover mb-4"
              />
              <div className="flex-grow">
                <p className="text-yellow-400 font-semibold">{card.category}</p>
                <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{card.author}</p>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-4 justify-between items-center pb-10 md:px-10">
        {/* Previous Button */}
        <div
          onClick={handlePreviousPage}
          className={`flex gap-3 justify-center items-center text-2xl font-bold text-white cursor-pointer ${
            currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <div className="hidden md:flex justify-end">
            <FaArrowLeft />
          </div>
          <p className="hidden md:flex">Previous</p>
        </div>

        {/* Page Numbers */}
        <div className="flex gap-4 text-2xl font-bold text-green-900">
          {Array.from({ length: totalPages }, (_, i) => (
            <p
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`hover:bg-white px-3 py-2 cursor-pointer ${
                currentPage === i + 1 ? "bg-white" : ""
              }`}
            >
              {i + 1}
            </p>
          ))}
        </div>

        {/* Next Button */}
        <div
          onClick={handleNextPage}
          className={`flex gap-3 justify-center items-center text-2xl font-bold text-white cursor-pointer${
            currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <p className=" hidden md:flex">Next</p>
          <div className=" justify-end  hidden md:flex">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
