/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Headline, Title } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 20px;
  align-items: center;
`;

const Id = styled(Title)`
  color: white;
  align-self: flex-end;
  background-color: #c50e29;
  border-radius: 5px;
  padding: 1px 4px;
`;

const PokemonAvatar = styled.Image`
  background-color: transparent;
  height: 200px;
  width: 200px;
`;

const RowItems = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Type = styled(Title)`
  background-color: white;
  border-radius: 5px;
  margin: 5px;
  padding: 1px 4px;
  justify-content: center;
`;

const H1 = styled(Headline)`
  text-transform: capitalize;
  background-color: #c50e29;
  color: white;
  padding: 40px 40px;
  border-radius: 5px;
`;

const InfoComponent = (props) => {
  const { pkmnInfo, navigation } = props;
  const { navigate } = navigation;

  if (pkmnInfo === undefined) {
    return <Title>Search Pokemon!</Title>;
  }

  if (pkmnInfo === null) {
    return <Title>Pokemon not found!</Title>;
  }

  const {
    name,
    id,
    sprite,
    // stats,
    types,
    height,
    weight,
    locationArea
  } = pkmnInfo;

  return (
    <ScrollView>
      <Container>
        <Id>#{id}</Id>
        <H1>{name}</H1>
        <PokemonAvatar
          source={{
            uri: sprite
          }}
        />

        <RowItems>
          {types.map((type) => (
            <Type key={type.type.name}>{type.type.name}</Type>
          ))}
        </RowItems>
        <RowItems>
          <Type>{weight} KG </Type>
          <Type> {height} M</Type>
        </RowItems>
        {/* <H1>Base Stats</H1>
        {stats.map((stat) => (
          <RowItems>
            <Text>{stat.stat.name}: </Text>
            <Text>{stat['base_stat']}</Text>
          </RowItems>
        ))} */}
        <RowItems>
          <Button
            mode="contained"
            onPress={() =>
              navigate('Location', {
                locationArea
              })
            }
            color="#4bcbcc"
          >
            Locate
          </Button>
          <Button
            mode="contained"
            onPress={() =>
              navigate('Evolutions', {
                locationArea
              })
            }
            color="#84ffff"
          >
            Evolutions
          </Button>
        </RowItems>
      </Container>
    </ScrollView>
  );
};

// InfoComponent.propTypes = {
//   navigation: PropTypes.objectOf().isRequired
// };

export default InfoComponent;
