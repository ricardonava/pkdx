import { PropTypes } from 'prop-types';
import React from 'react';
import { Appbar } from 'react-native-paper';
import styled from 'styled-components/native';

const AppbarHeader = styled(Appbar.Header)`
  elevation: 20;
  background-color: #c50e29;
`;

function setTitle(options, scene) {
  let title = '';
  if (options.headerTitle !== undefined) {
    title = options.headerTitle;
  } else if (options.title !== undefined) {
    title = options.title;
  } else {
    title = scene.route.name;
  }
  return title;
}

const Header = ({ scene, previous, navigation }) => {
  const { goBack } = navigation;
  const { options } = scene.descriptor;
  const title = setTitle(options, scene);
  return (
    <AppbarHeader>
      {previous && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} />
    </AppbarHeader>
  );
};

Header.defaultProps = {
  previous: undefined,
  scene: undefined,
  navigation: undefined
};

Header.propTypes = {
  scene: PropTypes.objectOf(Object),
  navigation: PropTypes.objectOf(PropTypes.func),
  previous: PropTypes.objectOf(Object)
};

export default Header;
