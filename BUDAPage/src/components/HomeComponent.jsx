import dancer from "./assets/dancer.mp4";

export default function HomeComponent() {
  return (
    <>
      <div className="left-side">
        <video src={dancer} autoPlay muted controls={false} />
      </div>
    </>
  );
}
