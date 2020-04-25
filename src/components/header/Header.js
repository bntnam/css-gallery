import React from "react";
import styled from "styled-components";

import "./index.less";
import { Heading } from "../../utils";

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

const StyledHeading = styled(Heading)`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%) rotate(-5deg);
  line-height: 60px;
`;

const Paint = styled.span`
  background: ${props => props.theme.colors.salomie};
  padding: 15px 30px 0 30px;
  z-index: -1;
`;

export const Header = () => (
  <Container>
    <StyledHeading><Paint>CSS</Paint><br /> Gallery</StyledHeading>
    <div id="Clouds">
      <div className="Cloud Foreground"></div>
      <div className="Cloud Background"></div>
      <div className="Cloud Foreground"></div>
      <div className="Cloud Background"></div>
      <div className="Cloud Foreground"></div>
      <div className="Cloud Background"></div>
      <div className="Cloud Background"></div>
      <div className="Cloud Foreground"></div>
      <div className="Cloud Background"></div>
      <div className="Cloud Background"></div>
    </div>
  </Container>
);
