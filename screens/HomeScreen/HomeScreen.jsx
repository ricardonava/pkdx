import { gql, useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import InfoComponent from './InfoComponent';
import SearchComponent from './SearchComponent';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const GET_A_POKEMON = gql`
  query getAPokemon($name: String!) {
    pokemon(name: $name) {
      name
      id
      sprite
      types
      height
      weight
      locationsUrl
      evolutionsUrl
      color
    }
  }
`;

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loadPokemon, { called, loading, data }] = useLazyQuery(GET_A_POKEMON);

  return (
    <Screen>
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loadPokemon={loadPokemon}
      />
      <InfoComponent
        navigation={navigation}
        query={searchQuery}
        loading={loading}
        data={data}
        called={called}
      />
    </Screen>
  );
};

export default HomeScreen;
