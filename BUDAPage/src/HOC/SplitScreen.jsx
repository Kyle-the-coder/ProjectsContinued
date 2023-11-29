import "../styles/splitScreen.css";

export default function SplitScreen({ children }) {
  const [leftPane, rightPane] = children;
  return (
    <>
      <div className="container">
        <div className="pane">{leftPane}</div>
        <div className="pane right-pane">{rightPane}</div>
      </div>
    </>
  );
}
