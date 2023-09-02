import React from "react";
import "./card.css";

function Card({ item }) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={item.artworkUrl100} alt="Artist" />
        <p className="card-tittle">Collection Name: {item.collectionName}</p>
        <p className="card-text text-primary">Artist Name: {item.artistName}</p>
        {item.collectionPrice ? (
          <p className="card-text text-primary">
            Collection Price: {item.collectionPrice} {item.currency}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
