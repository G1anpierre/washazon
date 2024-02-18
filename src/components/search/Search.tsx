"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Search.module.css";
import { searchAction } from "@/actions/search-actions";

export const Search = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  return (
    <div className={styles.container}>
      <form action={searchAction}>
        <input
          type="text"
          placeholder="Search"
          name="searchTerm"
          className={styles.input}
          defaultValue={searchTerm ?? ""}
        />
      </form>
    </div>
  );
};
