import { useState } from "react";
import dancer from "./assets/dancer.mp4";

function App() {
  return (
    <>
      <video src={dancer} autoPlay muted controls={false} />
    </>
  );
}

export default App;
