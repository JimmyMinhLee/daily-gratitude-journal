import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  try {
    const prisma = new PrismaClient();
    const data = await prisma.gratitude.findMany({
      where: {
        authorId: user ? user.id : "",
      },
    });
    prisma.$disconnect()
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get user gratitudes." },
      { status: 500 }
    );
  }
}
export async function POST(req: any) {
  const user = await currentUser();
  try {
    const prisma = new PrismaClient();
    const { content } = await req.json();
    const data = await prisma.gratitude.create({
      data: {
        content: content,
        authorId: user ? user.id : "",
      },
    });
    prisma.$disconnect()
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to post the gratitude." },
      { status: 500 }
    );
  }
}

