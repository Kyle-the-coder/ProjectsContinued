import dancer from "../assets/dancer2.mp4";
import "../styles/pane.css";
export default function RightPane2() {
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
