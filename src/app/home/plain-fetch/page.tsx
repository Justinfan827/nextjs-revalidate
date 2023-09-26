import React from "react";

export default async function TransactionsPage() {
  const data = await fetch("http://localhost:3001/api/transactions");
  const dataJson = await data.json();
  return (
    <div>
      <h1>Plain fetch</h1>
      <pre>{JSON.stringify(dataJson, null, 2)}</pre>
    </div>
  );
}
