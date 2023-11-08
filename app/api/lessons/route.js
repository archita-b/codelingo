// import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  // const result = await pool.query("SELECT * FROM lessons");
  // const lessonsData = result.rows;
  return NextResponse.json(lessonsData);
}
