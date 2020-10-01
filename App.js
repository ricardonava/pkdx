import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RootNavigator } from './navigation/rootNavigator';

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  cache: new InMemoryCache()
});

const theme = {
  ...DefaultTheme,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors
  }
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={theme}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <RootNavigator />
      </PaperProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('PKDX', () => App);
