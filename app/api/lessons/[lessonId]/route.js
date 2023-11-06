import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const result = await pool.query(
    "SELECT * FROM questions WHERE lesson_id=$1",
    [params.lessonId]
  );
  const questionsData = result.rows;
  return NextResponse.json(questionsData);
}
