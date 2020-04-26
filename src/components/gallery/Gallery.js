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
        <Subheading textAlign={"center"}>Welcome to my CSS Gallery!</Subheading>
        <Text pt={"20px"} textAlign={"center"} lineHeight={"1.5"}>
          The Gallery consists of various CSS images from my{" "}
          <a
            href="https://codepen.io/bntnam"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodePen
          </a>
          .
        </Text>
        <Text
          pt={"12px"}
          textAlign={"center"}
          maxWidth={"600px"}
          lineHeight={"1.5"}
        >
          The purpose of this project is to show my CSS coding skills and keep
          my knowledge sharp while working in Front End development.
        </Text>
        <Text pt={"12px"} textAlign={"center"} lineHeight={"1.5"}>
          Hope you have fun. Cheers! &hearts;
        </Text>
        <CodePen />
      </Container>
    </>
  );
};
