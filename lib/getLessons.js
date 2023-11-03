export default async function getLessons() {
  const res = await fetch("http://localhost:3000/api/lessons");
  if (!res.ok) throw new Error("Failed to fetch lessons");
  return res.json();
}
