import { useState } from "react";
import SearchArea from "./components/SearchArea";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import "./styles/app.css";

function App() {
  const [data, setData] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Nuevo estado para el orden
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
    <div className="app">
      <Navbar />
      <SearchArea
        setData={setData}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />{" "}
      {/* Pasa setSortOrder */}
      <div className="cards">
        <Cards data={data} sortOrder={sortOrder} /> {/* Pasa sortOrder */}
      </div>
    </div>
  );
}

export default App;
