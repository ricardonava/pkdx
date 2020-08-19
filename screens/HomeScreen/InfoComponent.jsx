/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Headline, Text, Title } from 'react-native-paper';

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

const InfoComponent = ({ pkmnInfo }) => {
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

export default InfoComponent;
