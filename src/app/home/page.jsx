import React from "react";

// Additional revalidate values causes the route to use the lowest of all revalidate values
// export const revalidate = 5;

export default async function Page() {
  const data = await fetch("http://localhost:3001/api/transactions", {
    next: {
      // revalidate: 5,
    },
    headers: {
      // random integer causes cache misses, even with the next.revalidate set
      // random: new Date()
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
