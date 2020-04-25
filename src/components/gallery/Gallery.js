import React from "react";
import styled from "styled-components";

import { Subheading, Text } from "../../utils";
import { Heart } from "../../components";

const Container = styled.div`
  background: ${props => props.theme.colors.tolopea};
  height: 800px;
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Subheading>Welcome to my CSS Galary!</Subheading>
      <Text pt={"10px"}>The Galary consists of various CSS images from my <a href="https://codepen.io/bntnam" target="_blank">CodePen</a>.</Text>
      <Text pt={"5px"}>If you have any idea or feedback, feel free to get in touch at my <a href="mailto:bntnam.app@gmail.com" target="_blank">email</a>. :)</Text>
      <Text pt={"5px"}>Now, hope you have fun. Cheers! &hearts;</Text>
    </Container>
  </>
);
