import dancer from "../assets/dancer.mp4";
import "../styles/pane.css";
export default function PopperVid() {
  return (
    <>
      <video
        className="dance-video"
        src={dancer}
        autoPlay
        muted
        controls={false}
      />
    </>
  );
}
