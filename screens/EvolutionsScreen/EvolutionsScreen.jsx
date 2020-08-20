/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import EvolutionsComponent from './EvolutionsComponent';
import searchPokemonEvolutions from '../../utils/searchPokemonEvolutions';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const EvolutionsScreen = ({ route }) => {
  const { evolutionsUrl } = route.params;

  const [isSearching, setIsSearching] = useState(false);
  const [evolutionsInfo, setEvolutionsInfo] = useState([]);

  const searchEvolutions = searchPokemonEvolutions(
    setIsSearching,
    evolutionsUrl,
    setEvolutionsInfo
  );

  useEffect(() => {
    searchEvolutions();
  }, []);

  return (
    <Screen>
      {isSearching ? (
        <ActivityIndicator />
      ) : (
        <EvolutionsComponent evolutionsInfo={evolutionsInfo} />
      )}
    </Screen>
  );
};

export default EvolutionsScreen;
