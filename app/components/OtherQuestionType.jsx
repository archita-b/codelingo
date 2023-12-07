import JSEditor from "./JSEditor";

export default function OtherQuestionType({ currentQuestion }) {
  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <div>
        <JSEditor />
      </div>
      <div>
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
