export function SplitScreen({ children }) {
  const [leftPane, rightPane] = children;
  return (
    <>
      <div className="container">
        <div className="left-pane">{leftPane}</div>
        <div className="right-pane">{rightPane}</div>
      </div>
    </>
  );
}
