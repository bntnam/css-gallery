import React from "react";
import styled from "styled-components";

import { Subheading, BodyText } from "../../utils";

const Container = styled.div`
  background: ${props => props.theme.colors.tolopea};
`;

export const Gallery = () => (
  <Container>
    <Subheading>Heading</Subheading>
    <BodyText>Text</BodyText>
  </Container>
);
