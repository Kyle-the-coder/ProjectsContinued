import dancer from "../assets/dancer2.mp4";
import "../styles/pane.css";
export default function BreakDancerVid() {
  return (
    <>
      <video
        className="dance-video"
        src={dancer}
        autoPlay
        muted
        loop
        controls={false}
      />
    </>
  );
}
