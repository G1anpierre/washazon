import { create } from "zustand";

type AccordionStoreType = {
  state: boolean[];
  setState: (status: boolean[]) => void;
};

export const useAccordionStore = create<AccordionStoreType>((set) => ({
  state: [true, false],
  setState: (state) => set({ state }),
}));
