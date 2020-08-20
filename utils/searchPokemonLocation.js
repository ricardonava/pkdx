export default function searchPokemonLocation(
  setIsSearching,
  locationArea,
  setLocationInfo
) {
  return async () => {
    setIsSearching((searching) => !searching);

    const endpoint = locationArea;
    const response = await fetch(endpoint);
    const data = await response.json();
    const locationArray = data.map((location) => {
      const { location_area: area } = location;
      const name = area.name
        .replace(/^\w/, (c) => c.toUpperCase())
        .replace(/-/g, ' ');
      return { name };
    });

    setLocationInfo(locationArray);
    setIsSearching((searching) => !searching);
  };
}
