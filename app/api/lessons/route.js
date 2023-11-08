import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const result = await pool.query("SELECT * FROM lessons");
  const lessonsData = result.rows;

  if (!lessonsData)
    return NextResponse.json({ error: "Lessons not found" }, { status: 404 });

  return NextResponse.json(lessonsData);
}
