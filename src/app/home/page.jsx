import React from "react";

export const revalidate = 5;

export default async function Page() {
  const data = await fetch("http://localhost:3001/api/transactions", {
    headers: {
      // random integer
     random: Math.floor(Math.random() * 2),
    },
  });
  const dataJson = await data.json();
  return (
    <div>
      <h1>Home Page with just fetch</h1>
      <pre>{JSON.stringify(dataJson, null, 2)}</pre>
    </div>
  );
}
