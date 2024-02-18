"use server";

import { redirect } from "next/navigation";

export const searchAction = async (formData: FormData) => {
  const searchTerm = formData.get("searchTerm");
  if (searchTerm) {
    redirect(`/search?searchTerm=${searchTerm}`);
  } else {
    redirect("/gallery");
  }
};
