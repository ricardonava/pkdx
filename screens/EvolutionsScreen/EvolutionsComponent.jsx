import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Divider, List } from 'react-native-paper';
import MessageComponent from '../../components/MessageComponent';

const ListItem = ({ title }) => <List.Item title={title} />;

const EvolutionsComponent = (props) => {
  const { evolutionsInfo } = props;
  const renderItem = ({ item }) => <ListItem title={item.species_name} />;

  if (!Array.isArray(evolutionsInfo) || evolutionsInfo.length === 1) {
    return <MessageComponent>Pokemon has no Evolutions!!</MessageComponent>;
  }

  return (
    <FlatList
      data={evolutionsInfo}
      renderItem={renderItem}
      keyExtractor={(item) => item.species_name}
      ItemSeparatorComponent={Divider}
    />
  );
};

export default EvolutionsComponent;
