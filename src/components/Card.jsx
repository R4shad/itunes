import React from 'react';

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.artworkUrl100} alt="Artist" />
      {item.collectionPrice ? (
        <p>Collection Price: {item.collectionPrice} {item.currency}</p>
      ) : null}
      <p>Collection Name: {item.collectionName}</p>
    </div>
  );
}

export default Card;
