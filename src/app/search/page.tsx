import { Products } from "@/components/products/Products";
import React from "react";
import { getSearchTerm } from "../api/search/search";
import styles from "./SearchPage.module.css";

const SearchPage = ({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) => {
  return (
    <section className={styles.container}>
      <Products fetchInfo={() => getSearchTerm(searchParams.searchTerm)} />
    </section>
  );
};

export default SearchPage;
