const LineNumbers = ({ code }) => {
  const lines = code.split("\n").length;
  return (
    <pre>
      {Array.from({ length: lines }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </pre>
  );
};

export default LineNumbers;
