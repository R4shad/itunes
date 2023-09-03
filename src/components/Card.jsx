import React from "react";
import "../styles/card.css";
import Reproductor from "./Reproductor";

// Importa la imagen del icono desde tu carpeta de activos
import itunesIcon from "../assets/itunesIcon.png";

function Card({ item, albumSongs }) {
  const uniqueSongNames = new Set();

  // Verifica si alguna canción tiene el atributo previewUrl para mostrar el p Album Tracks
  const hasPreview = albumSongs.some((song) => song.previewUrl);

  // Verificamos que solo se muestren canciones únicas
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
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="m-0 small-text">
            <strong>Type:</strong> {item.kind ? item.kind : item.wrapperType}
          </p>
          <a
            href={item.collectionViewUrl}
            target="_blank"
            className="logo-link"
          >
            <img
              src={itunesIcon}
              alt="iTunes Icon"
              className="logo"
              style={{ width: "30px", height: "auto" }}
            />
          </a>
        </div>
        <hr style={{ borderBottom: "1px solid #ccc", width: "100%" }} />
        <img
          src={item.artworkUrl100}
          alt="Album Image Cover"
          className="album-image-cover"
        />
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
