/* eslint-disable react/prop-types */
import * as React from 'react';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import InfoComponent from './InfoComponent';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [pkmnInfo, setPkmnInfo] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);

  const onChangeSearch = (query) => setSearchQuery(query);

  const searchByName = async (query) => {
    setIsSearching((searching) => !searching);

    const endpoint = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    const { name, id, sprites, stats, types, height, weight } = data;

    setPkmnInfo({
      name,
      id,
      sprite: sprites.other['official-artwork'].front_default,
      stats,
      types,
      height: height / 10,
      weight: weight / 10
    });

    setIsSearching((searching) => !searching);
  };

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => searchByName(searchQuery)}
      />
      {isSearching ? (
        <ActivityIndicator />
      ) : (
        <InfoComponent pkmnInfo={pkmnInfo} />
      )}
    </>
  );
};

export default SearchComponent;
