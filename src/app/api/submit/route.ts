import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Optional fields in body: content
//
export async function POST(req: any) {
  try {
    const prisma = new PrismaClient();
    const { content } = await req.json();
    const data = await prisma.gratitude.create({
      data: {
        content: content,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to post the gratitude." },
      { status: 500 }
    );
  }
}
