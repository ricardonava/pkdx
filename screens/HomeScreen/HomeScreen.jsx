import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import InfoComponent from './InfoComponent';
import SearchComponent from './SearchComponent';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const HomeScreen = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [pkmnInfo, setPkmnInfo] = useState(undefined);
  const [error, setError] = useState(null);

  const searchByName = async (query) => {
    setIsSearching((searching) => !searching);

    try {
      const endpoint = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
      const response = await fetch(endpoint);
      const data = await response.json();

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

      setPkmnInfo({
        name,
        id,
        sprite: sprites.other['official-artwork'].front_default,
        stats,
        types,
        height: height / 10,
        weight: weight / 10,
        locationArea
      });
    } catch (err) {
      setPkmnInfo(null);
    }

    setIsSearching((searching) => !searching);
  };

  return (
    <Screen>
      <SearchComponent searchByName={searchByName} />
      {isSearching ? (
        <ActivityIndicator />
      ) : (
        <InfoComponent
          navigation={navigation}
          pkmnInfo={pkmnInfo}
          error={error}
        />
      )}
    </Screen>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired
};

export default HomeScreen;
