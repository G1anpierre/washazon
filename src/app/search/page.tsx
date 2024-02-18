import { Products } from "@/components/products/Products";
import React from "react";
import { getSearchTerm } from "../api/search/search";

const SearchPage = ({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) => {
  return <Products fetchInfo={() => getSearchTerm(searchParams.searchTerm)} />;
};

export default SearchPage;
