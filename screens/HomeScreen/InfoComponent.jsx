/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Headline, Title } from 'react-native-paper';
import styled from 'styled-components/native';
import MessageComponent from '../../components/MessageComponent';

const Container = styled.View`
  margin: 20px;
  align-items: center;
`;

const Id = styled(Title)`
  color: white;
  align-self: flex-end;
  background-color: #ff5252;
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
  margin-bottom: 10px;
`;

const Type = styled(Title)`
  background-color: #ff867f;
  border-radius: 5px;
  margin: 5px;
  min-width: 150px;
  padding: 40px 0px;
  text-align: center;
`;

const H1 = styled(Headline)`
  text-transform: capitalize;
  background-color: #ff5252;
  color: white;
  padding: 40px 40px;
  border-radius: 5px;
`;

const NavigationButton = styled(Button)`
  width: 150px;
  margin: 5px;
`;

const InfoComponent = (props) => {
  const { pkmnInfo, navigation } = props;
  const { navigate } = navigation;

  if (pkmnInfo === undefined) {
    return <MessageComponent>Search Pokemon!</MessageComponent>;
  }

  if (pkmnInfo === null) {
    return <MessageComponent>Pokemon not found!</MessageComponent>;
  }

  const {
    name,
    id,
    sprite,
    types,
    height,
    weight,
    locationArea,
    evolutionsUrl
  } = pkmnInfo;

  return (
    <ScrollView>
      <Container>
        <RowItems>
          <NavigationButton
            mode="contained"
            onPress={() =>
              navigate('Location', {
                locationArea
              })
            }
            color="#c50e29"
          >
            Locate
          </NavigationButton>
          <NavigationButton
            mode="contained"
            onPress={() =>
              navigate('Evolutions', {
                evolutionsUrl
              })
            }
            color="#c50e29"
          >
            Evolutions
          </NavigationButton>
        </RowItems>
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
          <Type>{weight} KG</Type>
          <Type>{height} M</Type>
        </RowItems>
      </Container>
    </ScrollView>
  );
};

// InfoComponent.propTypes = {
//   navigation: PropTypes.objectOf().isRequired
// };

export default InfoComponent;
