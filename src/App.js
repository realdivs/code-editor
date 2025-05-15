import "./styles.css";
import CodeEditor from "./components/CodeEditor";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Mini Code Editor</h2>
      <CodeEditor />
    </div>
  );
}
