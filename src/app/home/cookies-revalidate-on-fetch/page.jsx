import React from "react";
import { cookies } from "next/headers";

export default async function TransactionsPage() {
  cookies();
  const revalidate = 10;
  const data = await fetch("http://localhost:3001/api/transactions", {
    next: {
      revalidate,
    },
  });
  const dataJson = await data.json();
  return (
    <div>
      <h1>Cookies + fetch with revalidate = {revalidate}</h1>
      <pre>{JSON.stringify(dataJson, null, 2)}</pre>
    </div>
  );
}
