/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Divider, List, Title } from 'react-native-paper';

const ListItem = ({ title }) => <List.Item key={title} title={title} />;

const EvolutionsComponent = (props) => {
  const { evolutionsInfo } = props;
  const renderItem = ({ item }) => <ListItem title={item.species_name} />;

  if (!Array.isArray(evolutionsInfo) || evolutionsInfo.length === 1) {
    return <Title>Pokemon has no Evolutions!!</Title>;
  }

  return (
    <FlatList
      data={evolutionsInfo}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={Divider}
    />
  );
};

export default EvolutionsComponent;
