import makeEvolutionsChain from './makeEvolutionsChain';

export default function searchPokemonEvolutions(
  setIsSearching,
  evolutionsUrl,
  setEvolutionsInfo
) {
  return async () => {
    setIsSearching((searching) => !searching);

    const endpoint = evolutionsUrl;
    const response = await fetch(endpoint);
    const data = await response.json();

    const evoChain = makeEvolutionsChain(data);

    setEvolutionsInfo(evoChain);
    setIsSearching((searching) => !searching);
  };
}
