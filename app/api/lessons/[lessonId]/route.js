import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const questions = await prisma.question.findMany({
    where: { lesson_id: parseInt(params.lessonId) },
  });

  if (!questions)
    return NextResponse.json({ error: "Questions not found" }, { status: 404 });

  return NextResponse.json(questions);
}

export async function PATCH(req) {
  const body = await req.json();

  const question = await prisma.question.findUnique({
    where: { id: body.question_id },
  });

  if (!question)
    return NextResponse.json(
      { error: "Question does not exist" },
      { status: 404 }
    );

  const updatedQuestion = await prisma.question.update({
    where: { id: body.question_id },
    data: {
      question: body.question,
      answers: body.answers,
      correct_ans: parseInt(body.correct_ans),
    },
  });

  return NextResponse.json(updatedQuestion);
}
