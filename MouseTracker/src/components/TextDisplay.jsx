import logo from "../assets/camera.png";
export function TextDisplay() {
  return (
    <div className="text-display-container">
      <div className="text-display-logo-container">
        <img src={logo} className="text-display-logo-png" />
        <p className="m0">DreamLens Studios</p>
      </div>
      <h1 className="text-display-title">Thomas WilderHall</h1>
      <p className="text-display-text">Photographer, Motion Capture, Artist</p>
    </div>
  );
}
