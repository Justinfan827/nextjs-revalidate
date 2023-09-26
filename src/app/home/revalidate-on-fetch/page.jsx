import React from "react";

// ignored if there is a lower revalidate in route segment
export const revalidate = 20;

export default async function Page() {
  const fetchRevalidate = 15;
  const data = await fetch("http://localhost:3001/api/transactions", {
    next: {
      revalidate: fetchRevalidate, // this always takes precedence even if higher than route segment
    },
  });
  const dataJson = await data.json();
  return (
    <div>
      <h1>Route Segment revalidate {revalidate} + fetch revalidate: {fetchRevalidate}</h1>
      <pre>{JSON.stringify(dataJson, null, 2)}</pre>
    </div>
  );
}
