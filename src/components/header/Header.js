import React from "react";
import { GitHub, Globe, Linkedin } from "react-feather";
import styled from "styled-components";

import "./index.less";
import { Heading } from "../../utils";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkOrange};
  background-image: radial-gradient(
    circle,
    ${(props) => props.theme.colors.lightningYellow} 0%,
    ${(props) => props.theme.colors.lightningOrange} 70%,
    ${(props) => props.theme.colors.pumpkin} 100%
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
  background: ${(props) => props.theme.colors.salomie};
  padding: 15px 30px 0 30px;
  z-index: -1;
`;

const ButtonGroup = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.a`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.oldRose};
  box-shadow: 0 8px 16px -4px rgba(200, 59, 80, 0.5);
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  margin: 5px;
  &:hover {
    background: ${(props) => props.theme.colors.flushMahogany};
    color: white;
    border-color: ${(props) => props.theme.colors.flushMahogany};
  }
`;

export const Header = () => (
  <Container>
    <StyledHeading>
      <Paint>CSS</Paint>
      <br /> Gallery
    </StyledHeading>
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
    <ButtonGroup>
      <Button
        href="https://github.com/bntnam/css-gallery"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </Button>
      <Button
        href="https://bntnam.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Globe />
      </Button>
      <Button
        href="https://www.linkedin.com/in/bntnam/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </Button>
    </ButtonGroup>
  </Container>
);
