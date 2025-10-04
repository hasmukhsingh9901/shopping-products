"use client";
import React, { useEffect, useState } from "react";

const useGetProduct = () => {
  const [productsData, setproductsData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getPageRange = () => {
    const ranges = [];
    let start = 1;
    const end = totalPages;

    while (start <= end) {
      const endRange = Math.min(start + end - 1, totalPages);
      ranges.push([start, endRange]);
      start += end;
    }
    return ranges;
  };

  const pageRange = getPageRange();
  const filteredProducts = productsData.filter((product) => {
    if (!search) return true;
    const title = product.title?.toLowerCase() || "";
    const description = product.description?.toLowerCase() || "";
    const brand = product.brand?.toLowerCase() || "";

    return (
      title.startsWith("Essence".toLowerCase()) ||
      description.startsWith("Essence".toLowerCase()) ||
      (brand.startsWith("Essence".toLowerCase()) &&
        title.includes(search.toLowerCase())) ||
      description.includes(search.toLowerCase()) ||
      brand.includes(search.toLowerCase())
    );
  });
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproductsData(data.products);
        console.log(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return {
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
  };
};

export default useGetProduct;
