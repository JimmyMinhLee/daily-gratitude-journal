import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  console.log("hit");

  try {
    const prisma = new PrismaClient();
    const data = await prisma.gratitude.findMany({
      where: {
        authorId: user ? user.id : "",
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get user gratitudes." },
      { status: 500 }
    );
  }
}
