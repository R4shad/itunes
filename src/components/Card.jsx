import React from "react";
import "../styles/card.css";
import Reproductor from "./Reproductor";

function Card({ item, albumSongs }) {
  const uniqueSongNames = new Set();

  // Verifica si alguna canción tiene el atributo previewUrl para mostrar el p Album Tracks
  const hasPreview = albumSongs.some((song) => song.previewUrl);

  // Verificamos que solo se muestren canciones unicas
  const renderUniqueSongs = () => {
    return albumSongs.map((song, index) => {
      if (!uniqueSongNames.has(song.trackCensoredName) && song.previewUrl) {
        uniqueSongNames.add(song.trackCensoredName);
        return (
          <Reproductor
            key={index}
            songName={song.trackCensoredName}
            description={song.description}
            songUrl={song.previewUrl}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={item.artworkUrl100} alt="Artist" />
        <p className="card-text text-primary">{item.artistName}</p>
        <p className="card-title">Album Name: {item.collectionName}</p>
        {item.collectionPrice ? (
          <p className="card-text text-primary">
            Price: {item.collectionPrice} {item.currency}
          </p>
        ) : null}
        <hr style={{ borderBottom: "1px solid #ccc", width: "100%" }} />
        {hasPreview && <p className="album-tracks">Album Tracks</p>}
        {renderUniqueSongs()}
      </div>
    </div>
  );
}

export default Card;
