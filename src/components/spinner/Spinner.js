import React from "react";
import styled from "styled-components";

import { Subheading } from "../../utils";

const Loading = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: block;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 49%;
    top: 40%;
    width: 40px;
    height: 40px;
    border-style: solid;
    border-color: white;
    border-top-color: transparent;
    border-width: 4px;
    border-radius: 50%;
    -webkit-animation: spin 0.8s linear infinite;
    animation: spin 0.8s linear infinite;
  }
`;

const StyledSubheading = styled(Subheading)`
  position: absolute;
  left: 45%;
  top: 50%;
`;

export const Spinner = () => (
  <Loading>
    <StyledSubheading>Preparing...</StyledSubheading>
  </Loading>
);
