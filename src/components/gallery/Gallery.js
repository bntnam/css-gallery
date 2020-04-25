import React from "react";
import styled from "styled-components";

import { Subheading, Text } from "../../utils";
import { Heart, CodePen } from "../../components";

const Container = styled.div`
  background: ${(props) => props.theme.colors.tolopea};
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  background: ${(props) => props.theme.colors.blackcurrant};
  height: 60px;
  width: 100vw;
  position: relative;
`;

export const Gallery = () => {
  return (
    <>
      <Box>
        <Heart />
      </Box>
      <Container>
        <Subheading textAlign={"center"}>Welcome to my CSS Galary!</Subheading>
        <Text pt={"10px"} textAlign={"center"}>
          The Galary consists of various CSS images from my{" "}
          <a
            href="https://codepen.io/bntnam"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodePen
          </a>
          .
        </Text>
        <Text pt={"5px"} textAlign={"center"}>
          If you have any idea or feedback, feel free to get in touch at my{" "}
          <a
            href="mailto:bntnam.app@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
          .
        </Text>
        <Text pt={"5px"} textAlign={"center"}>
          Now, hope you have fun. Cheers! &hearts;
        </Text>
        <CodePen />
      </Container>
    </>
  );
};
