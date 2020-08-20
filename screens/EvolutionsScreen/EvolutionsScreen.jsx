import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import searchPokemonEvolutions from '../../utils/searchPokemonEvolutions';
import EvolutionsComponent from './EvolutionsComponent';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const Loading = styled(ActivityIndicator)`
  margin: auto;
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
        <Loading color="#c50e29" size="large" />
      ) : (
        <EvolutionsComponent evolutionsInfo={evolutionsInfo} />
      )}
    </Screen>
  );
};

export default EvolutionsScreen;
