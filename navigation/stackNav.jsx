/* eslint-disable react/no-unused-prop-types */
import { createStackNavigator } from '@react-navigation/stack';
import { PropTypes } from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
// import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  const screen = (
    <>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'PKDX'
        }}
      />
      {/* <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: 'Pokemon'
        }}
      /> */}
    </>
  );
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        )
      }}
    >
      {screen}
    </Stack.Navigator>
  );
};

StackNav.defaultProps = {
  previous: undefined,
  scene: undefined,
  navigation: undefined
};

StackNav.propTypes = {
  scene: PropTypes.objectOf(Object),
  navigation: PropTypes.objectOf(PropTypes.func),
  previous: PropTypes.objectOf(Object)
};

export default StackNav;
