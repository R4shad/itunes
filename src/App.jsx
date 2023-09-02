import { useState } from "react";
import SearchArea from "./components/SearchArea";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import './app.css'

function App() {
  const [data, setData] = useState(null);

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
      <SearchArea setData={setData} />
      <Cards data={data} />
    </div>
  );
}

export default App;
