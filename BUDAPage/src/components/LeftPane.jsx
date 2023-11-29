import dancer from "../assets/dancer.mp4";
import "../styles/pane.css";
export default function LeftPane() {
  return (
    <>
      <div>
        <video
          className="dance-video"
          src={dancer}
          autoPlay
          muted
          controls={false}
        />
      </div>
    </>
  );
}
