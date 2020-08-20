import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../components/Header';
import EvolutionsScreen from '../screens/EvolutionsScreen/EvolutionsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LocationScreen from '../screens/LocationScreen/LocationScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  const screen = (
    <>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'PKDX',
          headerStyle: {
            backgroundColor: '#c50e29'
          }
        }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{
          title: 'Location Area'
        }}
      />
      <Stack.Screen
        name="Evolutions"
        component={EvolutionsScreen}
        options={{
          title: 'Evolutions'
        }}
      />
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

export default StackNav;
