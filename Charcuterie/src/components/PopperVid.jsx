import popper from "../assets/popping.mp4";
import "../styles/pane.css";
export default function PopperVid() {
  return (
    <>
      <video
        className="dance-video"
        src={popper}
        autoPlay
        muted
        loop
        controls={false}
      />
    </>
  );
}
