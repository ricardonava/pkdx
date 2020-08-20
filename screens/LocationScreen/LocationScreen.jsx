import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import LocationComponent from './LocationComponent';
import searchPokemonLocation from '../../utils/searchPokemonLocation';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const Loading = styled(ActivityIndicator)`
  margin: auto;
`;

const LocationScreen = ({ route }) => {
  const { locationArea } = route.params;

  const [isSearching, setIsSearching] = useState(false);
  const [locationInfo, setLocationInfo] = useState([]);

  const searchLocation = searchPokemonLocation(
    setIsSearching,
    locationArea,
    setLocationInfo
  );

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <Screen>
      {isSearching ? (
        <Loading color="#c50e29" size="large" />
      ) : (
        <LocationComponent locationInfo={locationInfo} />
      )}
    </Screen>
  );
};

export default LocationScreen;
