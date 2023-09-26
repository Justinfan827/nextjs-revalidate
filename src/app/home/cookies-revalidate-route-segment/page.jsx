import React from "react";
import { cookies } from "next/headers";

export const revalidate = 10;
export default async function Page() {
  cookies();
  const data = await fetch("http://localhost:3001/api/transactions", {});
  const dataJson = await data.json();
  return (
    <div>
      <h1>Cookies + revalidate on route segment {revalidate}</h1>
      <pre>{JSON.stringify(dataJson, null, 2)}</pre>
    </div>
  );
}
