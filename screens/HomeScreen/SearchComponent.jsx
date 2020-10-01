import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const Search = styled(Searchbar)`
  border-radius: 0px;
`;

const SearchComponent = (props) => {
  const { loadPokemon, searchQuery, setSearchQuery } = props;

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Search
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() =>
          loadPokemon({
            variables: { name: searchQuery }
          })
        }
      />
    </>
  );
};

export default SearchComponent;
