import { useState } from "react";
import { handleSearch } from "../functions/peticionApi";

function SearchArea({ setData, sortOrder, setSortOrder }) {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
  };

  const handleSearchClick = async () => {
    try {
      // Utiliza el valor actual de sortOrder en la llamada a la API
      const newResult = await handleSearch(searchText, selectedOption);

      console.log("Resultados de búsqueda:", newResult);
      setData(newResult);
    } catch (error) {
      console.error("Error al buscar en la API de iTunes:", error);
    }
  };

  return (
    <nav className="d-flex justify-content-center align-items-center gap-3 mt-3 ">
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
      <select
        className="form-select custom-select w-auto no-focus-outline"
        value={sortOrder}
        onChange={handleSortOrderChange}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <button className="btn btn-outline-primary" onClick={handleSearchClick}>
        Search
      </button>
    </nav>
  );
}

export default SearchArea;
