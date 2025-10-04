import React from "react";

const Pagination = ({
  handleNext,
  handlePrev,
  page,
  pageRange,
  totalPages,
  setPage

}) => {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      <button
        type="button"
        onClick={handlePrev}
        disabled={page === 1}
        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {pageRange?.map(([start, end], idx) => (
          <div key={idx} className="flex items-center space-x-1">
            {page >= start &&
              page <= end &&
              Array.from({ length: end - start + 1 }, (_, index) => (
                <button
                  key={start + index}
                  onClick={() => setPage(start + index)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    page === start + index
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {start + index}
                </button>
              ))}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Next
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
