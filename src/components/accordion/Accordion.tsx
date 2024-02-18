"use client";
import React from "react";
import styles from "./Accordion.module.css";
import { AccordionContent } from "../accordionContent/AccordionContent";
import { ArrowDown } from "../Icons/ArrowDown";
import { SpectType } from "@/types";
import { useAccordionContext } from "@/context/AccordionContext";

type AccordionProps = {
  description: string;
  specifications: SpectType[];
};

export const Accordion = ({ description, specifications }: AccordionProps) => {
  const { state, setState } = useAccordionContext();

  const accortionItems = [
    {
      title: "Product Description",
      content: description,
    },
    {
      title: "Specifications",
      content: specifications,
    },
  ];

  const handleActiveStatus = (index: number) => {
    const newActive = state.map((item, i) => (i === index ? !item : item));
    setState(newActive);
  };

  return (
    <section className={styles.container}>
      <ul>
        {accortionItems.map((accordionItem, index) => (
          <li
            key={index}
            className={`${state[index] ? styles.active : ""} ${styles.row}`}
          >
            <div
              className={styles.titleContainer}
              onClick={() => handleActiveStatus(index)}
            >
              <h2
                className={styles.title}
                id={
                  accordionItem.title === "Specifications"
                    ? "specifications"
                    : "productDescription"
                }
              >
                {accordionItem.title}
              </h2>
              <ArrowDown
                height={20}
                width={20}
                className={`${styles.open} ${styles.close}`}
              />
            </div>
            <div className={styles.contentContainer}>
              <AccordionContent content={accordionItem.content} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
