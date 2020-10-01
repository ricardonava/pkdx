import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { RootNavigator } from './navigation/rootNavigator';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'https://pkdx-apollo-engine.herokuapp.com/'
});

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  cache,
  link
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
