// Función para manejar la acción de búsqueda
export const handleSearch = async (searchText, selectedOption) => {
  try {
    // Construir la URL de la API de iTunes basada en los valores seleccionados
    const baseUrl = "https://itunes.apple.com/search?";
    const searchTerm = encodeURIComponent(searchText);
    const mediaType = encodeURIComponent(selectedOption);
    const url = `${baseUrl}term=${searchTerm}&media=${mediaType}`;

    // Realizar la solicitud a la API de iTunes y esperar la respuesta
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("La solicitud a la API de iTunes falló");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al buscar en la API de iTunes:", error);
  }
};
