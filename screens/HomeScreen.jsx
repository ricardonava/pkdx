import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components/native';
import SearchComponent from '../components/SearchComponent';

const Screen = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <SearchComponent navigation={navigation} />
    </Screen>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired
};

export default HomeScreen;
