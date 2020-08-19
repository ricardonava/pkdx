/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {
  ActivityIndicator,
  Avatar,
  Headline,
  Searchbar,
  Text,
  Title
} from 'react-native-paper';

const styles = StyleSheet.create({
  infoContainer: {
    margin: 20,
    alignItems: 'center'
  },
  pkmnId: {
    color: 'red',
    alignSelf: 'flex-end'
  },
  avatar: {
    backgroundColor: 'transparent'
  },
  name: {},
  type: {}
});

const Info = ({ pkmnInfo }) => {
  const { name, id, sprite, stats, types, height, weight } = pkmnInfo;
  if (pkmnInfo === false) {
    return <Text>Search Something!</Text>;
  }
  return (
    <ScrollView>
      <View style={styles.infoContainer}>
        <Title style={styles.pkmnId}>#{id}</Title>
        <Avatar.Image
          size={200}
          source={{
            uri: sprite
          }}
          style={styles.avatar}
        />
        <Headline style={styles.name}>{name}</Headline>
        {types.map((type) => (
          <Text style={styles.type} key={type.type.name}>
            {type.type.name}
          </Text>
        ))}
        <Title>{weight} KG</Title>
        <Title>{height} M</Title>
        <Headline>Base Stats</Headline>
        {stats.map((stat) => (
          <>
            <Text>{stat.stat.name}</Text>
            <Text>{stat['base_stat']}</Text>
          </>
        ))}
      </View>
    </ScrollView>
  );
};

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [pkmnInfo, setPkmnInfo] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);

  const onChangeSearch = (query) => setSearchQuery(query);

  const searchByName = async (query) => {
    setIsSearching((isSearching) => !isSearching);

    const endpoint = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    const { name, id, sprites, stats, types, height, weight } = data;

    setPkmnInfo({
      name,
      id,
      sprite: sprites.other['official-artwork'].front_default,
      stats,
      types,
      height: height / 10,
      weight: weight / 10
    });

    setIsSearching((isSearching) => !isSearching);
  };

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => searchByName(searchQuery)}
        onIconPress={() => console.log('STATE: ', pkmnInfo)}
      />
      {isSearching ? <ActivityIndicator /> : <Info pkmnInfo={pkmnInfo} />}
    </>
  );
};

export default SearchComponent;
