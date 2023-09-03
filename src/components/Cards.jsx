import React, { useState, useEffect } from "react";
import Card from "./Card";
import { sortAlbums } from "../functions/ordenarAlbumes";

import "../styles/cards.css";

function Cards({ data, sortOrder }) {
  const [visibleCards, setVisibleCards] = useState(15);
  const [sortedAlbums, setSortedAlbums] = useState([]);

  useEffect(() => {
    if (!data || !data.results) return;

    const uniqueAlbums = data.results.reduce((unique, item) => {
      if (
        !unique.some((album) => album.collectionName === item.collectionName)
      ) {
        unique.push(item);
      }
      return unique;
    }, []);

    const sorted = sortAlbums(uniqueAlbums, sortOrder);

    setSortedAlbums(sorted);
  }, [data, sortOrder]);

  return (
    <div className={`cards ${sortedAlbums.length === 1 ? "single-album" : ""}`}>
      <h5 className="results-heading">Results:</h5>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {sortedAlbums
            .filter((item) => item.collectionName)
            .slice(0, visibleCards)
            .map((item, index) => (
              <div className="col-md-4" key={index}>
                <Card
                  item={item}
                  albumSongs={data.results.filter(
                    (song) => song.collectionName === item.collectionName
                  )}
                />
              </div>
            ))}
        </div>
      </div>
      {visibleCards < sortedAlbums.length && (
        <div className="center-button-container">
          <button
            className="btn btn-outline-primary btn-light"
            onClick={() => setVisibleCards(visibleCards + 15)}
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;
