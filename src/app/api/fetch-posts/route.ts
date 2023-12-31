import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const authorName = searchParams.get("ownerName");

  try {
    if (!!authorName) throw new Error("author name required");
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const gratitudes =
    await sql`SELECT * FROM gratitude WHERE name=${authorName};`;
  return NextResponse.json({ gratitudes }, { status: 200 });
}
