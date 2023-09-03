export function sortAlbums(albums, sortOrder) {
  const sorted = [...albums];

  if (sortOrder === "desc") {
    sorted.sort((a, b) => b.collectionName.localeCompare(a.collectionName));
  } else {
    sorted.sort((a, b) => {
      const nameA = a.collectionName || "";
      const nameB = b.collectionName || "";
      return nameA.localeCompare(nameB);
    });
  }

  return sorted;
}
