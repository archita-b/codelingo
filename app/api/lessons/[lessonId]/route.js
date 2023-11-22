// import pool from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function GET(req, { params }) {
//   const result = await pool.query(
//     "SELECT * FROM mcq_questions WHERE lesson_id=$1",
//     [params.lessonId]
//   );
//   const questionsData = result.rows;

//   if (!questionsData)
//     return NextResponse.json({
//       error: "Failed to fetch questions",
//       status: 404,
//     });

//   return NextResponse.json(questionsData, { status: 200 });
// }

// export async function POST(req, { params }) {
//   const body = await req.json();

//   const result = await pool.query(
//     "INSERT INTO lesson_completion (user_email,lesson_id,is_completed) VALUES ($1,$2,$3) ON CONFLICT (user_email,lesson_id) DO NOTHING RETURNING *",
//     [body.email, params.lessonId, body.isCompleted]
//   );

//   if (result.rowCount !== 1)
//     return NextResponse.json({
//       error: "Failed to insert data in lesson_completion table",
//     });

//   return NextResponse.json(result.rows[0], { status: 201 });
// }
