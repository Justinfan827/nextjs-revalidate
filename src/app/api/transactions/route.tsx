import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("ENDPOINT IS HIT");
  return NextResponse.json({
    random: request.headers.get("random"),
    transactions: [
      {
        id: 1,
        created_at: new Date().toISOString(),
      },
      {
        id: 2,
        created_at: new Date().toISOString(),
      },
    ],
  });
}
