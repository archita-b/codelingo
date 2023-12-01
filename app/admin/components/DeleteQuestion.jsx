export default function DeleteQuestion({ setDisplayPage }) {
  return (
    <div>
      <button onClick={() => setDisplayPage(null)}>Go back</button>
      <p>delete</p>
    </div>
  );
}
