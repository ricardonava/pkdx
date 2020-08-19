/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import LocationComponent from './LocationComponent';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const LocationScreen = ({ route }) => {
  const { locationArea } = route.params;

  const [isSearching, setIsSearching] = useState(false);
  const [locationInfo, setLocationInfo] = useState([]);

  const searchLocation = async () => {
    setIsSearching((searching) => !searching);

    const endpoint = locationArea;
    const response = await fetch(endpoint);
    const data = await response.json();
    const locationArray = data.map((location) => {
      const { location_area: area } = location;
      const name = area.name.replace(/-/g, ' ');
      return { name };
    });

    setLocationInfo(locationArray);
    setIsSearching((searching) => !searching);
  };

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <Screen>
      {isSearching ? (
        <ActivityIndicator />
      ) : (
        <LocationComponent locationInfo={locationInfo} />
      )}
    </Screen>
  );
};

export default LocationScreen;
