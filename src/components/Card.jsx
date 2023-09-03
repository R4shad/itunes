import React from "react";
import "./card.css";
import Reproductor from "./Reproductor";

function Card({ item, albumSongs }) {
  const uniqueSongNames = new Set();

  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={item.artworkUrl100} alt="Artist" />
        <p className="card-tittle">Collection Name: {item.collectionName}</p>
        <p className="card-text text-primary">{item.artistName}</p>
        {item.collectionPrice ? (
          <p className="card-text text-primary">
            Price: {item.collectionPrice} {item.currency}
          </p>
        ) : null}
        <div style={{ borderBottom: "1px solid #ccc", width: "100%" }}></div>
        <p className="album-tracks">Album Tracks</p>
        {albumSongs.map((song, index) => {
          if (!uniqueSongNames.has(song.trackCensoredName)) {
            uniqueSongNames.add(song.trackCensoredName);
            return (
              <Reproductor
                key={index}
                songName={song.trackCensoredName}
                songUrl={song.previewUrl}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Card;
