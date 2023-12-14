import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { useCallback, useState } from "react";

export default function JSEditor({ value, onChange }) {
  return (
    <CodeMirror
      className="w-full h-60 border border-gray-400 rounded-md"
      value={value}
      height="200px"
      extensions={[javascript({ jsx: true })]}
      //   theme={okaidia}
      onChange={onChange}
    />
  );
}
