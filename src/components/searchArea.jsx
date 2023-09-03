import { useState } from "react";
import { handleSearch } from "../functions/peticionApi";

function SearchArea({ setData }) {
  const [result, setResult] = useState(null);

  const [searchText, setSearchText] = useState("Olivia Rodrigo");

  const [selectedOption, setSelectedOption] = useState("all");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const result = await handleSearch(searchText, selectedOption);
      console.log("Resultados de búsqueda:", result);
      setResult(result.results);
      setData(result);
    } catch (error) {
      console.error("Error al buscar en la API de iTunes:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mt-3 ">
      <div style={{ borderBottom: "4px solid white", width: "60%" }}></div>

      <input
        type="text"
        className="form-control form-control-sm w-auto"
        placeholder="Ingrese texto de búsqueda "
        value={searchText}
        onChange={handleInputChange}
      />
      <select
        className="form-select custom-select w-auto no-focus-outline"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
      </select>
      <button className="btn btn-outline-primary" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}

export default SearchArea;
