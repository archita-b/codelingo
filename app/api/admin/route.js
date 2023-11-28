import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const question = await prisma.question.create({
    data: {
      question_type: body.question_type,
      lesson_id: body.lesson_id,
      question: body.question,
      answers: body.answers,
      correct_ans: body.correct_ans,
    },
  });

  return NextResponse.json(question, { status: 201 });
}
