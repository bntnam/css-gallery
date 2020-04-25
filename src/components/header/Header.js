import React from "react";
import styled from "styled-components";

import "./index.less";

const Container = styled.div`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.darkOrange};
  background-image: radial-gradient(
    circle,
    ${props => props.theme.colors.lightningYellow} 0%,
    ${props => props.theme.colors.lightningOrange} 70%,
    ${props => props.theme.colors.pumpkin} 100%
  );
  width: 100vw;
  height: 50vh;
`;

export const Header = () => (
  <Container>
    <div id="Clouds">
      <div class="Cloud Foreground"></div>
      <div class="Cloud Background"></div>
      <div class="Cloud Foreground"></div>
      <div class="Cloud Background"></div>
      <div class="Cloud Foreground"></div>
      <div class="Cloud Background"></div>
      <div class="Cloud Background"></div>
      <div class="Cloud Foreground"></div>
      <div class="Cloud Background"></div>
      <div class="Cloud Background"></div>
    </div>
  </Container>
);
