import React from "react";
import Card from "./Card";
function Cards({ data }) {
  // Filtrar álbumes únicos por collectionName
  let uniqueAlbums = [];

  if (data) {
    uniqueAlbums = data.results.filter((item, index, self) => {
      const firstIndex = self.findIndex(
        (i) => i.collectionName === item.collectionName
      );
      return index === firstIndex;
    });
  }

  return (
    <>
      {uniqueAlbums.length > 0 && (
        <div>
          <h5>Resultados:</h5>
          <div className="container d-flex justify-content-center ">
            <div className="row">
              {uniqueAlbums.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
