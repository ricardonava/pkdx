/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView } from 'react-native';
import { Headline, Text, Title, Button } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 20px;
  align-items: center;
`;

const Id = styled(Title)`
  color: red;
  align-self: flex-end;
`;

const PokemonAvatar = styled.Image`
  background-color: transparent;
  height: 300px;
  width: 300px;
`;

const Name = styled(Headline)`
  text-transform: capitalize;
`;

const InfoComponent = (props) => {
  const { pkmnInfo, navigation } = props;
  const { navigate } = navigation;
  if (pkmnInfo === undefined) {
    return <Text>Search Something!</Text>;
  }
  const {
    name,
    id,
    sprite,
    stats,
    types,
    height,
    weight,
    locationArea
  } = pkmnInfo;

  return (
    <ScrollView>
      <Container>
        <Button
          mode="contained"
          onPress={() =>
            navigate('Location', {
              locationArea
            })
          }
        >
          Encounters
        </Button>

        <Id>#{id}</Id>
        <PokemonAvatar
          source={{
            uri: sprite
          }}
        />
        <Name>{name}</Name>
        {types.map((type) => (
          <Text key={type.type.name}>{type.type.name}</Text>
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
      </Container>
    </ScrollView>
  );
};

// InfoComponent.propTypes = {
//   navigation: PropTypes.objectOf().isRequired
// };

export default InfoComponent;
