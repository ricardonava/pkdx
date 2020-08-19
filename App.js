import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { RootNavigator } from './navigation/rootNavigator';

const theme = {
  ...DefaultTheme,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <RootNavigator />
    </PaperProvider>
  );
}
