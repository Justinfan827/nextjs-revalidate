import React from "react";

export const revalidate = 10;

export default function HomeLayout({ children }) {
  return (
    <div className="w-7xl mx-auto py-10 px-12">
      <h1 className="py-4">Main Layout with revalidate: {revalidate}</h1>
      <div classname="outline outline-red-200 outline-2">{children}</div>
    </div>
  );
}
