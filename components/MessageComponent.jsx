import React from 'react';
import { Headline } from 'react-native-paper';
import styled from 'styled-components/native';

const Message = styled(Headline)`
  margin: auto;
`;

const MessageComponent = ({ children }) => {
  return <Message>{children}</Message>;
};

export default MessageComponent;
