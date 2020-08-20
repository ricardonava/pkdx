import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import searchPokemonByName from '../../utils/searchPokemonByName';
import InfoComponent from './InfoComponent';
import SearchComponent from './SearchComponent';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const Loading = styled(ActivityIndicator)`
  margin: auto;
`;

const HomeScreen = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [pkmnInfo, setPkmnInfo] = useState(undefined);

  const searchByName = searchPokemonByName(setIsSearching, setPkmnInfo);

  return (
    <Screen>
      <SearchComponent searchByName={searchByName} />
      {isSearching ? (
        <Loading color="#c50e29" size="large" />
      ) : (
        <InfoComponent navigation={navigation} pkmnInfo={pkmnInfo} />
      )}
    </Screen>
  );
};

export default HomeScreen;
