import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link href="/profiledetail">Open Modal</Link>
    </div>
  );
};

export default Page;
