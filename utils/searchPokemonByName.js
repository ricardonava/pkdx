export default function searchPokemonByName(setIsSearching, setPkmnInfo) {
  return async (query) => {
    setIsSearching((searching) => !searching);

    try {
      const endpoint = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      const speciesEndpoint = `https://pokeapi.co/api/v2/pokemon-species/${query.toLowerCase()}`;
      const speciesResponse = await fetch(speciesEndpoint);
      const speciesData = await speciesResponse.json();

      const {
        name,
        id,
        sprites,
        stats,
        types,
        height,
        weight,
        location_area_encounters: locationArea
      } = data;

      const { evolution_chain: evolutions } = speciesData;

      setPkmnInfo({
        name,
        id,
        sprite: sprites.other['official-artwork'].front_default,
        stats,
        types,
        height: height / 10,
        weight: weight / 10,
        locationArea,
        evolutionsUrl: evolutions.url
      });
    } catch (err) {
      setPkmnInfo(null);
    }

    setIsSearching((searching) => !searching);
  };
}
