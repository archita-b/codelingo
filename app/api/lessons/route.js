import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  const lessons = await prisma.lesson.findMany();

  return NextResponse.json(lessons, { status: 200 });
}
