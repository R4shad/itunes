import React from "react";
import Card from "./Card";
import "../styles/cards.css";

function Cards({ data }) {
  if (!data || data.results.length === 0) {
    return null;
  }
  // Filtramos de la respuesta de la Api albumes unicos, esto para que en las tarjetas no existan albumes repetidos
  const uniqueAlbums = data.results.reduce((unique, item) => {
    if (!unique.some((album) => album.collectionName === item.collectionName)) {
      unique.push(item);
    }
    return unique;
  }, []);

  const isSingleAlbum = uniqueAlbums.length === 1;

  return (
    <div className={`cards ${isSingleAlbum ? "single-album" : ""}`}>
      <h5>Results:</h5>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {uniqueAlbums.map((item, index) => {
            const albumSongs = data.results.filter(
              (song) => song.collectionName === item.collectionName
            );

            return (
              <div className="col-md-4" key={index}>
                <Card item={item} albumSongs={albumSongs} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
