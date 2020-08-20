/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Divider, List } from 'react-native-paper';
import MessageComponent from '../../components/MessageComponent';

const ListItem = ({ title }) => <List.Item title={title} />;

const LocationComponent = (props) => {
  const { locationInfo } = props;
  const renderItem = ({ item }) => <ListItem title={item.name} />;

  if (!Array.isArray(locationInfo) || !locationInfo.length) {
    return <MessageComponent>No location found!!</MessageComponent>;
  }

  return (
    <FlatList
      data={locationInfo}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={Divider}
    />
  );
};

export default LocationComponent;
