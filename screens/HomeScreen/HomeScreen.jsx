import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import InfoComponent from './InfoComponent';
import SearchComponent from './SearchComponent';
import searchPokemonByName from '../../utils/searchPokemonByName';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const HomeScreen = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [pkmnInfo, setPkmnInfo] = useState(undefined);

  const searchByName = searchPokemonByName(setIsSearching, setPkmnInfo);

  return (
    <Screen>
      <SearchComponent searchByName={searchByName} />
      {isSearching ? (
        <ActivityIndicator />
      ) : (
        <InfoComponent navigation={navigation} pkmnInfo={pkmnInfo} />
      )}
    </Screen>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired
};

export default HomeScreen;
