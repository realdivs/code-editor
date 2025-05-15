import { useState, useRef } from "react";
import LineNumbers from "./LineNumbers";
import "./styles.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const editorRef = useRef();
  const linkRef = useRef();

  const handleScroll = () => {
    lineRef.current.scrollTop = editorRef.current.scrollTop;
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="editor-container">
      <div className="line-numbers" ref={linkRef}>
        <LineNumbers code={code} />
      </div>
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        onScroll={handleScroll}
        ref={editorRef}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
