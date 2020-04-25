import React from "react";
import styled from "styled-components";

import { Subheading, Text } from "../../utils";
import { Heart } from "../../components";

const Container = styled.div`
  background: ${props => props.theme.colors.tolopea};
  height: 800px;
  padding: 10px;
`;

const Box = styled.div`
  background: ${props => props.theme.colors.blackcurrant};
  height: 60px;
  width: 100vw;
  position: relative;
`

export const Gallery = () => (
  <>
    <Box>
      <Heart />
    </Box>
    <Container>
      <Subheading>Heading</Subheading>
      <Text>Text</Text>
    </Container>
  </>
);
