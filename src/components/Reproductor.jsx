import React, { useState } from "react";
import useSound from "use-sound";

function Reproductor({ songName, songUrl }) {
  const [playing, setPlaying] = useState(false);

  const [playSound, { stop }] = useSound(songUrl);

  const toggleSound = () => {
    if (playing) {
      stop();
      setPlaying(false);
    } else {
      playSound();
      setPlaying(true);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p style={{ flex: 1 }}>{songName}</p>
      <button className="btn btn-outline-primary" onClick={toggleSound}>
        {playing ? "Pausar" : "Sonar"}
      </button>
    </div>
  );
}

export default Reproductor;
