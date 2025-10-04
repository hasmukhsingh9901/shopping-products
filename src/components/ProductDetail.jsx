import Link from "next/link";
import React from "react";

const ProductDetail = ({
  product,
  selectedImage,
  setSelectedImage,
  originalPrice,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="p-6">
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                {product.discountPercentage > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      -{product.discountPercentage}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Image Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6 lg:p-8">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {product.brand}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  {product.rating} ({product.stock} in stock)
                </span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-4xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  {originalPrice && (
                    <span className="text-2xl text-gray-500 line-through">
                      ${originalPrice}
                    </span>
                  )}
                </div>
                {product.discountPercentage > 0 && (
                  <p className="text-green-600 font-medium">
                    You save ${(originalPrice - product.price).toFixed(2)} (
                    {product.discountPercentage}% off)
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Add to Cart
                </button>
                <button className="w-full bg-gray-100 text-gray-800 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors">
                  Add to Wishlist
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Product Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Brand:</span>
                    <span className="ml-2 text-gray-900">{product.brand}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Category:</span>
                    <span className="ml-2 text-gray-900 capitalize">
                      {product.category}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Stock:</span>
                    <span className="ml-2 text-gray-900">
                      {product.stock} units
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">SKU:</span>
                    <span className="ml-2 text-gray-900">{product.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
