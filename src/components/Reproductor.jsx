import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import { formatDescription } from "../functions/formatoDescripcion";
import "../styles/Reproductor.css";

function Reproductor({ songName, description, songUrl }) {
  const [playing, setPlaying] = useState(false);
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setDesc(formatDescription(description));
  }, [description]);

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

  // Si no existe songName mostramos la descripcion
  const displaySongName = songName || desc;

  return (
    <div className="reproductor-container">
      <p className="reproductor-text">{displaySongName}</p>
      <button className="btn btn-outline-primary" onClick={toggleSound}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default Reproductor;
