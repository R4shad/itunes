import React from 'react';
import Card from './Card';
function Cards({ data }) {
  // Filtrar álbumes únicos por collectionName
  let uniqueAlbums = [];

  if (data) {
    uniqueAlbums = data.results.filter((item, index, self) => {
      const firstIndex = self.findIndex((i) => i.collectionName === item.collectionName);
      return index === firstIndex;
    });
  }

  return (
    <>
      {uniqueAlbums.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <div className="card-container">
            {uniqueAlbums.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
