import React from "react";

export const revalidate = 20;

export default async function TransactionsPage() {
  const fetchRevalidate = 2;
  const data = await fetch("http://localhost:3001/api/transactions", {
    next: {
      revalidate: fetchRevalidate, // this always takes precedence
    },
    headers: {
      random: new Date().toISOString(),
    },
  });
  const dataJson = await data.json();
  return (
    <div>
      <h1>Route Segment revalidate {revalidate} + fetch revalidate: 2</h1>
      <pre>{JSON.stringify(dataJson, null, 2)}</pre>
    </div>
  );
}
