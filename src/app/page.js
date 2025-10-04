"use client";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import Productcard from "@/components/Productcard";
import SearchBar from "@/components/Search";
import useGetProduct from "@/hooks/useGetProduct";

const page = () => {
  const {
    productsData,
    search,
    setSearch,
    page,
    setPage,
    currentItems,
    filteredProducts,
    totalPages,
    handleNext,
    handlePrev,
    handleChange,
    pageRange,
  } = useGetProduct();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Header />

          {/* Search Bar */}
          <SearchBar search={search} handleChange={handleChange} />
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {currentItems.length} of {filteredProducts.length} products
            {search && (
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                "{search}"
              </span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        <Productcard currentItems={currentItems} />

        {/* Pagination */}
        <Pagination
          handlePrev={handlePrev}
          handleNext={handleNext}
          page={page}
          pageRange={pageRange}
          totalPages={totalPages}
          setPage={setPage}
        />

        {/* Page Info */}
        <div className="text-center text-gray-500 text-sm">
          Page {page} of {totalPages} • {productsData.length} total products
        </div>
      </div>
    </div>
  );
};

export default page;
