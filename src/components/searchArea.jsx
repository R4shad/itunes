import { useState } from 'react'
import {handleSearch} from '../functions/peticionApi'
function SearchArea({setData}){

    const [result, setResult] = useState(null);

    // Estado para el valor del input
    const [searchText, setSearchText] = useState('Olivia Rodrigo');

    // Estado para la opción seleccionada en el selector
    const [selectedOption, setSelectedOption] = useState('all');
  
    // Función para manejar cambios en el input
    const handleInputChange = (event) => {
      setSearchText(event.target.value);
    };
  
     // Función para manejar cambios en el selector
      const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleSearchClick = async () => {
      try {
        const result = await handleSearch(searchText, selectedOption);
        // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar los resultados en la interfaz de usuario.
        console.log("Resultados de búsqueda:", result);
        //console.log(result.results);
        setResult(result.results)
        setData(result);
      } catch (error) {
        console.error("Error al buscar en la API de iTunes:", error);
      }
    };



  return (
    <div>
    <input
      type="text"
      placeholder="Ingrese texto de búsqueda"
      value={searchText}
      onChange={handleInputChange}
    />
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="all">All</option>
      <option value="music">Music</option>
      <option value="tvShow">TV Show</option>
    </select>
    <button onClick={handleSearchClick}>Search</button>
  </div>
  )
}

export default SearchArea