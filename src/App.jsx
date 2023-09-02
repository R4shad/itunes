import { useState } from 'react'
import SearchArea from './components/SearchArea';
import Cards from './components/Cards';

function App() {
  const [data, setData] = useState(null);

  // Filtrar álbumes únicos por collectionName
  // Filtrar álbumes únicos por collectionName
let uniqueAlbums = [];

if (data) {
  uniqueAlbums = data.results.filter((item, index, self) => {
    const firstIndex = self.findIndex((i) => i.collectionName === item.collectionName);
    return index === firstIndex;
  });
}

  return(
  <>
  <SearchArea setData={setData}/>
    
  <Cards data={data} /> 
  </>
  );
  
}

export default App
