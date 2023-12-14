import { useCallback, useState } from "react";
import JSEditor from "./JSEditor";

export default function OtherQuestionType({ currentQuestion }) {
  const [value, setValue] = useState("console.log('hi')");

  const onChange = useCallback((val) => {
    setValue(val);
  }, []);

  function evaluateCode(code) {
    try {
      const func = new Function(code);
      return func();
    } catch (err) {
      console.error("Error: ", err.message);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <h1>{currentQuestion.question}</h1>
      <div>
        <JSEditor value={value} onChange={onChange} />
      </div>
      <div>
        <textarea
          className="w-full h-20 border border-gray-400 rounded-md p-3"
          value={evaluateCode(value)}
        />
      </div>
    </div>
  );
}
