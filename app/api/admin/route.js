import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const question = await prisma.question.findUnique({
    where: { question: body.question },
  });

  if (question) {
    return NextResponse.json(
      { error: "Queston already exists" },
      { status: 400 }
    );
  }

  const newQuestion = await prisma.question.create({
    data: {
      question_type: body.question_type,
      lesson_id: parseInt(body.lesson_id),
      question: body.question,
      answers: body.answers,
      correct_ans: parseInt(body.correct_ans),
    },
  });

  return NextResponse.json(newQuestion, { status: 201 });
}
