import React from "react";
import styled from "styled-components";

import { Text } from "../../utils";

const Container = styled.div`
  background: ${props => props.theme.colors.blackcurrant};
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = () => (
  <Container>
    <Text>Made by <b><i>bntnam</i></b> with &hearts;</Text>
  </Container>
);
