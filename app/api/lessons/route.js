import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  const lessons = await prisma.lesson.findMany();

  const lessonCompletion = await prisma.lessonCompletion.findMany();

  return NextResponse.json(
    { lessonsData: lessons, lessonCompletionData: lessonCompletion },
    { status: 200 }
  );
}
