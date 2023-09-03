export function formatDescription(description) {
  if (!description) {
    return ""; // Si la descripción está vacía, devolver una cadena vacía
  }

  // Eliminar etiquetas HTML utilizando una expresión regular
  const withoutHtmlTags = description.replace(/<[^>]*>/g, "");

  // Encontrar la posición del primer punto o etiqueta HTML en el texto
  const endIndex =
    withoutHtmlTags.indexOf(".") !== -1
      ? withoutHtmlTags.indexOf(".")
      : withoutHtmlTags.indexOf("<");

  // Recortar el texto hasta el primer punto o etiqueta HTML
  var formattedDescription =
    endIndex !== -1 ? withoutHtmlTags.substring(0, endIndex) : withoutHtmlTags;

  formattedDescription += ".";

  return formattedDescription;
}
