"use client";
import Link from "next/link";
import React from "react";
import styles from "./SeeSpecifications.module.css";
import { useAccordionContext } from "@/context/AccordionContext";

export const SeeSpecifications = () => {
  const { state, setState } = useAccordionContext();

  const handleActiveStatus = () => {
    const newActive = state.map((item, i) => (i === 1 ? true : item));
    setState(newActive);
  };

  return (
    <Link
      href="#specifications"
      className={styles.link}
      onClick={handleActiveStatus}
    >
      See specifications
    </Link>
  );
};
